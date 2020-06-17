import React, {useState, useRef, useEffect} from 'react';
import {Overlay, Input, Button} from 'react-native-elements';
import {useTasks} from './TasksProvider';

// This class will attempt to sync a ride entry with my realm db


export function AddRideEntryView() {

  console.log('loading AddRideEntryView.js')

  const [overlayVisible, setOverlayVisible] = useState(false);
  // const [newTaskName, setNewTaskName] = useState('');
  const {createRideEntry} = useTasks()

  return (
    <>
      <Overlay
        isVisible={overlayVisible}
        overlayStyle={{width: '90%'}}
        onBackdropPress={() => setOverlayVisible(false)}>
        <>
          {/* <Input
            placeholder="New Ride Entry"
            onChangeText={(text) => setNewTaskName(text)}
            autoFocus={true}
          /> */}
          <Button
            title="Create"
            onPress={() => {
              setOverlayVisible(false);
            //   createTask(newTaskName);
              createRideEntry()
            }}
          />
        </>
      </Overlay>
      <Button
        type="outline"
        title="Share Ride"
        onPress={() => {
          setOverlayVisible(true);
        }}
      />
    </>
  );
}
