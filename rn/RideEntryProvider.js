import React, {useContext, useState, useEffect, useRef} from 'react';
import Realm from 'realm';
import {useAuth} from './AuthProvider';
import {LCRideEntry} from './schemas';
import UUIDGenerator from 'react-native-uuid-generator';

// Create the context that will be provided to descendants of TasksProvider via
// the useTasks hook.
const RidesContext = React.createContext(null);

const RideEntryProvider = ({children, projectId}) => {
  // Get the user from the AuthProvider context.
  const {user} = useAuth();

  // The tasks list will contain the tasks in the realm when opened.
 

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
        console.warn('AddRideEntryView must be authenticated!');
        return;
      }
  
      // Define the configuration for the realm to use the LCRideEntry schema. Base the
      // sync configuration on the user settings and use the project ID as the
      // partition value. This will open a realm that contains all objects where
      // object._partition == projectId.
      const config = {
        schema: [LCRideEntry.schema],
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
          console.log('realm has been opened in Ride Provider')
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
          const syncRideEntries = openedRealm.objects('LCRideEntry');
  
          // Watch for changes to the tasks collection.
          openedRealm.addListener('change', () => {
            // On change, update the tasks state variable and re-render.
            console.log('A new sync ride entry has been created')
            setRideEntries([...syncRideEntries]);
          });
  
          // Set the tasks state variable and re-render.
          setRideEntries([...syncRideEntries]);
        })
        .catch((error) => console.warn('Failed to open realm:', error));




  
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

 
  const createRideEntry = () => {
    const realm = realmRef.current;
    // EXERCISE: Check that realm != null. If the realm is null, it isn't opened yet.

    var rideEntryData = null

    UUIDGenerator.getRandomUUID().then((uuid) => {
        rideEntryData = {
            partition: projectId,
            rideID:  uuid, 
            rideName: 'Sync Test',
            escName: 'STORMCORE',
            escFWVersion: '5.1',
            rideDate: Date.now(),
            hasFault: false,
            escHWVersion: 'STORMCORE_100D_PARALLEL',
          }
    })

    // let rideEntryData = {
    //   partition: projectId,
    //   rideID:  , 
    //   rideName: 'Sync Test',
    //   escName: 'STORMCORE',
    //   escFWVersion: '5.1',
    //   rideDate: Date.now(),
    //   hasFault: false,
    //   escHWVersion: 'STORMCORE_100D_PARALLEL',
    // }

    if (realm != null) {
        // Open a write transaction.
      realm.write(() => {
        // Create a new task in the same partition -- that is, in the same project.
        realm.create(
          'LCRideEntry',
          new LCRideEntry(rideEntryData),
        );
      });
    }

  };

  // Render the children within the TaskContext's provider. The value contains
  // everything that should be made available to descendants that use the
  // useTasks hook.
  return (
    <RidesContext.Provider
      value={{
        createRideEntry,
        rideEntries,
        projectId,
      }}>
      {children}
    </RidesContext.Provider>
  );
};

// The useTasks hook can be used by any descendant of the TasksProvider. It
// provides the tasks of the TasksProvider's project and various functions to
// create, update, and delete the tasks in that project.
const useRides = () => {
  const ride = useContext(RidesContext);
  if (ride == null) {
    throw new Error('useRide() called outside of a RideEntryProvider?');
  }
  return ride;
};



export {RideEntryProvider, useRides};
