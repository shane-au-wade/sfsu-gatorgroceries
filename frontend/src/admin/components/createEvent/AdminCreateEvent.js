import React, { useState, useEffect } from 'react';
import AdminHeader from '../adminHeader/adminHeader.jsx'
import './style/Admin-create-event-style.css'
import addItem from '../../icons/add_circle_outline-24px.svg'
import removeItem from '../../icons/remove_circle_outline-24px.svg'
import dropDownIcon from '../../icons/arrow_drop_down-24px.svg';
import {Link} from 'react-router-dom';
import eventServices from '../../services/createEvent';

import { makeStyles } from '@material-ui/core/styles';

// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListSubheader from '@material-ui/core/ListSubheader';

import Card from '@material-ui/core/Paper';
import { CardHeader, CardContent, TextField, Checkbox } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90vw',
    maxWidth: 500,
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    background: '#f3f3f3',
    margin: '40px auto',
  },

  // This card style controls the Card component on which the entire Create Event section is located on.
  card: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },

  // This paper style controls the Paper component on which the item table is located on.
  paper: {
    width: '100%'
  },

  table: {
    width: 500,
  },

  // The table container will expand vertically up to a max of 175px, then it will apply scrolling behavior.
  container: {
    maxHeight: 175,
  },
}))

const AdminCreateEvent = (props) => {
  const classes = useStyles()

  // The following states will be sent over to the Preview screen once the Preview button is pressed:

  const [eventTitle, setEventTitle] = useState('')
  const [eventLocation, setEventLocation] = useState('')
  const [eventDate, setEventDate] = useState('')

  const [concatTime, setConcatTime] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [timeBlocks, setTimeBlocks] = useState([])

  const [itemName, setItemName] = useState('')
  const [itemQTY, setItemQTY] = useState('')
  const [itemList, setItemList] = useState([])

  const[showPreviewButton, setShowPreviewButton] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)

  // This useEffect will only run once on page load such that it will grab prop history's states if it exists.
  useEffect(() => {
    // If the props had existing information already, set them.
    if(props.location.state.edit === true){
      console.log("I AM BEING CALLED")
      setEventTitle(props.location.state.name)
      setEventLocation(props.location.state.location)

      // The date picker is in yyyy-MM-dd format.
      let tempDate = new Date(props.location.state.date)
      let tempDay = 0
      let tempMonth = 0

      // Prefix with zero if the day and/or month is less than 2 digits to fit Date picker format.
      if(tempDate.getDay() < 10){
        tempDay = "0" + tempDate.getDay()
      }
      if(tempDate.getMonth() < 10){
        tempMonth = "0" + tempDate.getMonth()
      }
      tempDate = tempDate.getFullYear() + "-" + tempMonth + "-" + tempDay
      setEventDate(tempDate)

      // Split the time string by the dash and remove the time designations while also keeping track of which 
      // time to convert back to military format.
      let tempTimeWithTimeDesignations = (props.location.state.time).split(" - ")
      let tempStartTime = ''
      let tempEndTime = ''
      let startConvertToMilitary = false
      let endConvertToMilitary = false

      // Replace each instance of AM or PM with empty string and determine which ones need to be converted to military.
      if(tempTimeWithTimeDesignations[0].indexOf("AM") !== -1){
        tempStartTime = tempTimeWithTimeDesignations[0].replace("AM", "")
      }
      else{
        tempStartTime = tempTimeWithTimeDesignations[0].replace("PM", "")
        startConvertToMilitary = true
      }
      if(tempTimeWithTimeDesignations[1].indexOf("AM") !== -1){
        tempEndTime = tempTimeWithTimeDesignations[1].replace("AM", "")
      }
      else{
        tempEndTime = tempTimeWithTimeDesignations[1].replace("PM", "")
        endConvertToMilitary = true
      }

      // Determine which time needs to be converted to military time.
      let tempStartTimeArray = tempStartTime.split(":")
      if(startConvertToMilitary){
        tempStartTimeArray[0] = (parseInt(tempStartTimeArray[0]) + 12).toString()
      }

      let tempEndTimeArray = tempEndTime.split(":")
      if(endConvertToMilitary){
        tempEndTimeArray[0] = (parseInt(tempEndTimeArray[0]) + 12).toString()
      }

      // Bring them all together into temp variables to be pushed to their states.
      tempStartTime = tempStartTimeArray[0] + ":" + tempStartTimeArray[1]
      tempEndTime = tempEndTimeArray[0] + ":" + tempEndTimeArray[1]

      setStartTime(tempStartTime)
      setEndTime(tempEndTime)

      setItemList(props.location.state.menu)
    }
  }, [])

  //console.log("Passed props: ", props)

  const itemAdd = (e) => {
    // Prevent the browser from refreshing after adding an item.
    e.preventDefault()

    // This will make sure that a item doesn't get added if name and/or qty textboxes are empty.
    if(itemName !== '')
    {
      if(itemQTY === '' || itemQTY === '0' || itemQTY === 0){
        console.log("empty")
        setItemQTY('1')
      }
      // Attach a unique id to the item.
      const itemLabel = `item-list-label-${itemName}-${itemQTY}`

      // Add the new item to the itemList state and render the component again.
      setItemList(itemList.concat({ item: itemName, qty: itemQTY, id: itemLabel }))
    }

    // Clear the item and qty textboxes.
    clearItemText()
  }

  const itemDelete = (itemLabel) => {
    console.log("itemLabel is: ", itemLabel)
    var itemIndex = -1

    // This line is very important. Make a new reference to the itemList via spread syntax 
    // such that setItemList will be sure to rerender the list correctly.
    var tempItemList = [...itemList]
    
    // Find the index in which the object's id matches the itemLabel.
    tempItemList.forEach(function(item, index){
      if(item.id === itemLabel){
        itemIndex = index
      }
    })

    // If the itemIndex is not -1, take out the element at the itemIndex and set the state to the new item list.
    if(itemIndex !== -1){
      tempItemList.splice(itemIndex, 1)
      setItemList(tempItemList)
    }
  }

  // Set the name and qty textboxes states back to empty.
  const clearItemText = () => {
    setItemName('')
    setItemQTY('')
  }

  // Calculate time blocks and then push user to the preview screen.
  const calculateTimeBlocks = (e) => {
    e.preventDefault()

    // Clear the timeBlocks if the user happened to somehow press the Submit button a second time.
    if(timeBlocks.length > 0){
      console.log("Length is: ", timeBlocks.length)
      timeBlocks.splice(0, timeBlocks.length)
    }

    // Split the start and end times by the colon, seperating them into hours and minutes. Then create the start and end Date objects.
    let startArr =  startTime.split(':');
    let endArr =  endTime.split(':');

    // Get individual hours and minutes from start and end arrays.
    let startHour = startArr[0]
    let newStartHour = 0
    let endHour = endArr[0]
    let startMinutes = startArr[1]
    let endMinutes = endArr[1]

    // Perform check to see if start and end hours are less than 10. If so, remove the zero in front of them.
    if(startHour.charAt(0) === '0'){
      startHour = startHour.substr(1)
    }
    if(endHour.charAt(0) === '0'){
      endHour = endHour.substr(1)
    }

    // Perform check to see if the end hour is AM or PM.
    let endTimeDesignation = parseInt(endHour)
    if(endTimeDesignation > 11){
      endTimeDesignation = "PM"
    }
    else if(endTimeDesignation === 24 && endTimeDesignation < 12){
      endTimeDesignation = "AM"
    }

    // Calculate time block size from start to end.
    let blockSize = Math.abs(endHour - startHour)

    console.log("Block size between start and end is: ", blockSize)

    // Calculate the next hour after the starting hour and set time designations to the start hour and the next hour.
    let nextHour = parseInt(startHour) + 1
    let startTimeDesignation = parseInt(startHour)
    let nextTimeDesignation = nextHour

    if(parseInt(startHour) > 13){
      newStartHour = Math.abs(startHour - 12)
    }
    else{
      newStartHour = startHour
    }

    // If the start hour is after 12PM, convert it to standard. Otherwise, keep it the same.
    if(startTimeDesignation > 13){
      startTimeDesignation = Math.abs(startTimeDesignation - 12)
    }

    // If the next hour after the start hour is after 12PM, convert it to standard.
    if(nextHour > 13){
      nextHour = Math.abs(nextHour - 12)
    }

    // If the next hour is after 11:59AM, set timeDesignation to PM. Otherwise, set it to AM.
    if(parseInt(startHour) > 11){
      startTimeDesignation = "PM"
    }
    else{
      startTimeDesignation = "AM"
    }
    if(nextTimeDesignation > 11){
      nextTimeDesignation = "PM"
    }
    else{
      nextTimeDesignation = "AM"
    }

    // Hardcoded to look for 13 to convert to 1 for the very first block to get rid of an annoying bug.
    if(newStartHour === 13 || newStartHour === '13'){
      newStartHour = 1
    }
    if(nextHour === 13 || nextHour === '13'){
      nextHour = 1
    }

    // Push the first time block onto timeBlocks array and move to the for loop for the rest of the time blocks.
    timeBlocks.push({ block: `${newStartHour}:${startMinutes}${startTimeDesignation} - ${nextHour}:${startMinutes}${nextTimeDesignation}` })

    // For loop through timeBlocks and push a block in specified format. If the end is reached, push the final block
    // and set the end minutes.
    for(var i = 1; i < blockSize; i++){
      // Get the next hour and the hour after it.
      nextHour = parseInt(startHour) + i
      let nextNextHour = parseInt(startHour) + i + 1

      // Set timeDesignations to the next hour and the hour after that.
      let timeDesignations = [nextHour, nextNextHour]

      // Determine the time designations for the next hour and the hour after that.
      if(timeDesignations[0] > '11'){
        timeDesignations[0] = "PM"
      }
      else{
        timeDesignations[0] = "AM"
      }
      if(timeDesignations[1] > '11'){
        timeDesignations[1] = "PM"
      }
      else{
        timeDesignations[1] = "AM"
      }

      // Determine whether or not the next hour and the hour after that need to be converted to standard time.
      if(nextHour >= 13){
        nextHour = Math.abs(nextHour - 12)
      }
      if(nextNextHour >= 13){
        nextNextHour = Math.abs(nextNextHour - 12)
      }

      // If this is not the last element in the timeBlocks, push to timeBlocks another block 
      // with the next hour and the hour after that in the specified format.
      if(i + 1 < blockSize){
        timeBlocks.push({ block: `${nextHour}:${startMinutes}${timeDesignations[0]} - ${nextNextHour}:${startMinutes}${timeDesignations[1]}`})
      }
      else{
        // If this is the last element, determine the final timeDesignation and then push onto timeBlocks the 2nd to last hour and then the end hour.
        // Perform check to see if the end hour is AM or PM.
        let timeDesignation = endHour
        if(timeDesignation > '11'){
          timeDesignation = "PM"
        }
        else{
          timeDesignation = "AM"
        }

        // Perform check to see if the end hour needs to be converted to standard time.
        if(endHour > 13){
          endHour = Math.abs(endHour - 12)
        }

        timeBlocks.push({ block: `${nextHour}:${startMinutes}${timeDesignations[0]} - ${endHour}:${endMinutes}${timeDesignation}`})
      }
    }

    console.log("Time blocks are: ", timeBlocks)
    setTimeBlocks(timeBlocks)

    // Concat the time into one string for display on the Preview page.
    let tempConcatTime = `${newStartHour}:${startMinutes}${startTimeDesignation} - ${endHour}:${endMinutes}${endTimeDesignation}`
    setConcatTime(tempConcatTime)

    // Unhide the Preview button.
    setShowPreviewButton(true)
  }

  // Controls Dialog Popup.
  const handleClickOpen = () => {
    setDialogOpen(true);
  };
  const handleClose = () => {
    setDialogOpen(false);
  };

  // This gets called after clicking on the Preview button after it gets unhidden by the timeBlocks algorithm.
  const eventAlertPopUp = () => {
    // Now send page information to Preview.

    props.history.push({
      pathname: '/admin/preview-event',
      state: {
        date: eventDate,
        time: concatTime,
        name: eventTitle,
        location: eventLocation,
        menu: itemList,
        time_blocks: timeBlocks,
      }
    })
  }


  return (
    <div style={{overflow: 'hidden'}}>
      <AdminHeader selected='Create Event' history={props.history}></AdminHeader>
      <div className='AdminContentArea'>
        <Card className={classes.root}>
          <CardHeader title='Create Event' style={{ textAlign: 'center' }}/>
          <CardContent>
            <form onSubmit={(e) => calculateTimeBlocks(e)}>
              <TextField id='event-title' type='text' label='Event Title' value={eventTitle} onChange={e => setEventTitle(e.target.value)} style={{ maxWidth:'80vh', marginRight: '5%' }} required />
              <TextField id='event-location' type='text' label='Location' value={eventLocation} onChange={e => setEventLocation(e.target.value)} style={{}} required />
              <TextField id='event-date' type='date' label='Date' value={eventDate} onChange={e => setEventDate(e.target.value)} InputLabelProps={{ shrink: true }} style={{ width: 250, marginTop: '5%' }} required />
              
              <br />
              <TextField id='event-startTime' type='time' label='Start' value={startTime} onChange={e => setStartTime(e.target.value)} InputLabelProps={{ shrink: true }} style={{ width: 110, marginTop: '5%' }} required />
              <TextField id='event-endTime' type='time' label='End' value={endTime} onChange={e => setEndTime(e.target.value)} InputLabelProps={{ shrink: true }} style={{ width: 110, marginLeft: '5%', marginTop: '5%' }} required />
              <br />
              
              <TextField id='event-items' value={itemName} onChange={e => setItemName(e.target.value)} type='text' label='Item' InputLabelProps={{ shrink: true }} style={{ width: 200, marginTop: '5%' }} />
              <TextField id='event-qty' value={itemQTY} onChange={e => setItemQTY(e.target.value)} type='number' label='QTY' InputProps={{ inputProps: { min: 1 } }} InputLabelProps={{ shrink: true }} style={{ width: 50, marginLeft: '5%', marginTop: '5%' }} />
              <IconButton variant='contained' id='event-addItem' onClick={e => itemAdd(e)} style={{ marginLeft: '5%', marginTop: '7%' }}><AddShoppingCartIcon /></IconButton>

              <Paper className={classes.paper}>
                <TableContainer className={classes.container}>
                  <Table stickyHeader size='small' aria-label="a simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align='left' style={{ minWidth: 50}}>Item</TableCell>
                        <TableCell align='left' style={{ minWidth: 50}}>QTY</TableCell>
                        <TableCell align='left' style={{ minWidth: 50}}>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {itemList.map((item) => {
                        const itemLabel = `item-list-label-${item.name}-${item.qty}`;

                        return (
                          <TableRow hover key={itemLabel} style={{borderBottom: "none",}}>
                            <TableCell align='left'>{item.item}</TableCell>
                            <TableCell align='left'>{item.qty}</TableCell>
                            <TableCell align='left'><IconButton aria-label='delete' onClick={() => {itemDelete(itemLabel)}}><DeleteIcon /></IconButton></TableCell>
                          </TableRow>
                        )
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
             
              {/* This List has been commented out as the Table implementation is much better and offers more functionality than List does. */}
              {/* <List id='item-list'>
                <ListSubheader component='div' id='item-list-subheader-item'>Menu Item</ListSubheader>
                {itemList.map((item) => {
                  const itemLabel = `item-list-label-${item.name}-${item.qty}`

                  return (
                    <ListItem key={itemLabel}>
                      <ListItemText primary={`${item.name}`} />
                      <ListItemText primary={`${item.qty}`}/>
                      <ListItemSecondaryAction>
                        <IconButton edge='end' aria-label='delete' onClick={() => {itemDelete(itemLabel)}}><DeleteIcon /></IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  )
                })}
              </List> */}

              <Button variant='outlined' id='event-submitEvent' type='submit' color='secondary' size='large' style={{ marginTop: '7%' }}>Check</Button>
              
            </form>

            { showPreviewButton ? <Button variant='outlined' id='event-Preview' onClick={handleClickOpen} style={{ marginTop: '7%' }}>Preview</Button> : <span>Please click the Check button after you are done</span>}
            <Dialog open={dialogOpen} onClose={handleClose} aria-labelledby='alert-dialog-title' aria-dialog-description='alert-dialog-description'>
              <DialogContent>
                <DialogContentText id='alert-dialog-content'>
                  Are you ready to see the Finalize Changes screen?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color='primary'>Go Back</Button>
                <Button onClick={eventAlertPopUp} color='primary' autoFocus>Finalize</Button>
              </DialogActions>
            </Dialog>
          </CardContent>  
        </Card>
      </div>
    </div>
  )
}

export default AdminCreateEvent;
