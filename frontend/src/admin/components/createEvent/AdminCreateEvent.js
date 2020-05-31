import React, { useState } from 'react';
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

  const [itemName, setItemName] = useState('')
  const [itemQTY, setItemQTY] = useState('')
  const [itemList, setItemList] = useState([])

  //console.log("Passed props: ", props)

  const itemAdd = (e) => {
    // Prevent the browser from refreshing after adding an item.
    e.preventDefault()

    // This will make sure that a item doesn't get added if name and/or qty textboxes are empty.
    if(itemName !== '' || itemQTY !== '')
    {
      // Attach a unique id to the item.
      const itemLabel = `item-list-label-${itemName}-${itemQTY}`

      // Add the new item to the itemList state and render the component again.
      setItemList(itemList.concat({ name: itemName, qty: itemQTY, id: itemLabel }))
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
    console.log("Contents: ", e)
  }

  return (
    <div style={{overflow: 'hidden'}}>
      <AdminHeader selected='Create Event' history={props.history}></AdminHeader>
      <div className='AdminContentArea'>
        <Card className={classes.root}>
          <CardHeader title='Create Event' style={{ textAlign: 'center' }}/>
          <CardContent>
            <form onSubmit={(e) => calculateTimeBlocks(e)}>
              <TextField id='event-title' label='Event Title' type='text' style={{ maxWidth:'80vh', marginRight: '5%' }} required />
              <TextField id='event-location' label='Location' type='text' style={{}} required />
              <TextField id='event-date' type='date' label='Date' InputLabelProps={{ shrink: true }} style={{ width: 250, marginTop: '5%' }} required />
              <br />
              <TextField id='event-startTime' type='time' label='Start' InputLabelProps={{ shrink: true }} style={{ width: 110, marginTop: '5%' }} required />
              <TextField id='event-endTime' type='time' label='End' InputLabelProps={{ shrink: true }} style={{ width: 110, marginLeft: '5%', marginTop: '5%' }} required />
              <br />
              
              <form onSubmit={(e) => itemAdd(e)}>
                <TextField id='event-items' value={itemName} onChange={e => setItemName(e.target.value)} type='text' label='Item' InputLabelProps={{ shrink: true }} style={{ width: 200, marginTop: '5%' }} required/>
                <TextField id='event-qty' value={itemQTY} onChange={e => setItemQTY(e.target.value)} type='number' label='QTY' InputProps={{ inputProps: { min: 1 } }} InputLabelProps={{ shrink: true }} style={{ width: 50, marginLeft: '5%', marginTop: '5%' }} required/>
                <IconButton variant='contained' id='event-addItem' type='submit' style={{ marginLeft: '5%', marginTop: '7%' }}><AddShoppingCartIcon /></IconButton>
              </form>

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
                            <TableCell align='left'>{item.name}</TableCell>
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

              <Button variant='outlined' id='event-submitEvent' type='submit' color='secondary' size='large' style={{ marginTop: '7%' }}>Preview</Button>
              
            </form>
          </CardContent>  
        </Card>
      </div>
    </div>
  )
}

export default AdminCreateEvent;
