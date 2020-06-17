import React, {useContext, useState, useEffect, useRef} from 'react';
import Realm from 'realm';
import {useAuth} from './AuthProvider';
import {Task, LCRideEntry, LCRideDatapoint} from './schemas';
import UUIDGenerator from 'react-native-uuid-generator';

// Create the context that will be provided to descendants of TasksProvider via
// the useTasks hook.
const TasksContext = React.createContext(null);

const TasksProvider = ({children, projectId}) => {
  // Get the user from the AuthProvider context.
  const {user} = useAuth();

  // The tasks list will contain the tasks in the realm when opened.
  const [tasks, setTasks] = useState([]);
  const [rideEntries, setRideEntries] = useState([]);

  // This realm does not need to be a state variable, because we don't re-render
  // on changing the realm.
  const realmRef = useRef(null);

  // The effect hook replaces lifecycle methods such as componentDidMount. In
  // this effect hook, we open the realm that contains the tasks and fetch a
  // collection of tasks.
  useEffect(() => {
    // Check that the user is logged in. You must authenticate to open a synced
    // realm.
    if (user == null) {
      console.warn('TasksView must be authenticated!');
      return;
    }

    // Define the configuration for the realm to use the Task schema. Base the
    // sync configuration on the user settings and use the project ID as the
    // partition value. This will open a realm that contains all objects where
    // object._partition == projectId.
    
    const config = {
      schemas: [Task.schema, LCRideEntry.schema, LCRideDatapoint.schema],
      sync: {
        user,
        partitionValue: projectId,
      },
    };

    console.log(
      `Attempting to open Realm ${projectId} for user ${
        user.identity
      } with config: ${JSON.stringify(config)}...`,
    );

    // Set this flag to true if the cleanup handler runs before the realm open
    // success handler, e.g. because the component unmounted.
    let canceled = false;

    // Now open the realm asynchronously with the given configuration.
    
    Realm.open(config)
      .then((openedRealm) => {
        // If this request has been canceled, we should close the realm.
        if (canceled) {
          openedRealm.close();
          return;
        }

        console.log('Realm is located at: ', openedRealm.path);

        // Update the realmRef so we can use this opened realm for writing.
        realmRef.current = openedRealm;

        // Read the collection of all Tasks in the realm. Again, thanks to our
        // configuration above, the realm only contains tasks where
        // task._partition == projectId.
        const syncTasks = openedRealm.objects('Task');
        const syncRideEntries = openedRealm.objects('LCRideEntry');

        // Watch for changes to the tasks collection.
        openedRealm.addListener('change', () => {
          // On change, update the tasks state variable and re-render.
          setTasks([...syncTasks]);
        });

        // Set the tasks state variable and re-render.
        setTasks([...syncTasks]);
        setRideEntries([...syncRideEntries])
      })
      .catch((error) => {
        console.log('error in opening realm')
        console.warn('Failed to open realm:', error)
      });

    // Return the cleanup function to be called when the component is unmounted
    // or the next time the effect runs.
    return () => {
      // Update the canceled flag shared between both this callback and the
      // realm open success callback above in case this runs first.
      canceled = true;

      // If there is an open realm, we must close it.
      const realm = realmRef.current;
      if (realm != null) {
        realm.removeAllListeners();
        realm.close();
        realmRef.current = null;
      }
    };
  }, [user, projectId]); // Declare dependencies list in the second parameter to useEffect().

  // Define our create, update, and delete functions that users of the
  // useTasks() hook can call.
  const createTask = (newTaskName) => {
    const realm = realmRef.current;
    // EXERCISE: Check that realm != null. If the realm is null, it isn't opened yet.

    // Open a write transaction.
    realm.write(() => {
      // Create a new task in the same partition -- that is, in the same project.
      realm.create(
        'Task',
        new Task({name: newTaskName || 'New Task', partition: projectId}),
      );
    });
  };

  // Define the function for updating a task's status.
  const setTaskStatus = (task, status) => {
    // One advantage of centralizing the realm functionality in this provider is
    // that we can check to make sure a valid status was passed in here.
    if (
      ![
        Task.STATUS_OPEN,
        Task.STATUS_IN_PROGRESS,
        Task.STATUS_COMPLETE,
      ].includes(status)
    ) {
      throw new Error(`Invalid Status ${status}`);
    }
    const realm = realmRef.current;

    realm.write(() => {
      task.status = status;
    });
  };

  // Define the function for deleting a task.
  const deleteTask = (task) => {
    const realm = realmRef.current;
    realm.write(() => {
      realm.delete(task);
    });
  };

  const createRideEntry = async () => {
    const realm = realmRef.current;
    // EXERCISE: Check that realm != null. If the realm is null, it isn't opened yet.

    // var rideEntryData = null

    // UUIDGenerator.getRandomUUID().then((uuid) => {
    //     rideEntryData = {
    //         partition: projectId,
    //         rideID:  uuid, 
    //         rideName: 'Sync Test',
    //         escName: 'STORMCORE',
    //         escFWVersion: '5.1',
    //         rideDate: Date.now(),
    //         hasFault: false,
    //         escHWVersion: 'STORMCORE_100D_PARALLEL',
    //       }
    // })

    let rideEntryData = {
      partition: projectId,
      rideID:  await UUIDGenerator.getRandomUUID(), 
      rideName: 'Sync Test',
      escName: 'STORMCORE',
      escFWVersion: '5.1',
      rideDate: Date(),
      hasFault: false,
      escHWVersion: 'STORMCORE_100D_PARALLEL',
    }

    let rideDataPointData = {
      partition: projectId,
      rideID: rideEntryData.rideID,
      dataPointTime: Date(),
      tempMos: 36.70000076293945,
      tempMosFahrenheit: 98.05999755859375,
      tempMotor: -99.9000015258789,
      currentMotor: 9.149999618530273,
      inputCurrent: 0.5199999809265137,
      focID: 0,
      focIQ: 0,
      dutyCycleNow: 0.39500001072883606, 
      rpm: 0,
      inputVoltage: 69.80000305175781,
      ampHours: 0,
      ampHoursCharged: 0,
      wattHours: 288.2626037597656,
      wattHoursCharged: 8.806500434875488,
      faultCode: 0,
      gpsSpeed: 556.7526360811567,
      latitude: 37.7774611079477,
      longitude: -122.4133067383414,
      altitude: 14.619683491066098,
      speed: 31.329999923706055,
      speedMPH: 19.467554092407227,
      gpsSpeedMPH: 4476.71044921875,
      tempMotorFahrenheit: -147.82000732421875 

    }

    if (realm != null) {
        // Open a write transaction.
      realm.write(() => {
        // Create a new LCRideEntry in the same partition -- that is, in the same project.
        realm.create(
          'LCRideEntry',
          new LCRideEntry(rideEntryData),
        );

        realm.create(
          'LCRideDatapoint',
          new LCRideDatapoint(rideDataPointData),
        );
      });
    }

  };

  // Render the children within the TaskContext's provider. The value contains
  // everything that should be made available to descendants that use the
  // useTasks hook.
  return (
    <TasksContext.Provider
      value={{
        createTask,
        deleteTask,
        setTaskStatus,
        createRideEntry,
        tasks,
        projectId,
      }}>
      {children}
    </TasksContext.Provider>
  );
};

// The useTasks hook can be used by any descendant of the TasksProvider. It
// provides the tasks of the TasksProvider's project and various functions to
// create, update, and delete the tasks in that project.
const useTasks = () => {
  const task = useContext(TasksContext);
  if (task == null) {
    throw new Error('useTasks() called outside of a TasksProvider?');
  }
  return task;
};

export {TasksProvider, useTasks};
