import React, { useState } from 'react';
import AdminHeader from '../adminHeader/adminHeader.jsx'
import './style/Admin-create-event-style.css'
import addItem from '../../icons/add_circle_outline-24px.svg'
import removeItem from '../../icons/remove_circle_outline-24px.svg'
import dropDownIcon from '../../icons/arrow_drop_down-24px.svg';
import {Link} from 'react-router-dom';
import eventServices from '../../services/createEvent';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Paper';
import { CardHeader, CardContent, TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    background: '#f3f3f3',
    margin: '40px auto',
  },

  card: {
    padding: theme.spacing(2),
    textAlign: 'center',
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

  return (
    <div>
      <AdminHeader selected='Create Event' history={props.history}></AdminHeader>
      <div className='AdminContentArea'>
        <Card className={classes.root}>
          <CardHeader title='Create Event' style={{ textAlign: 'center' }}/>
          <CardContent>
            <form>
              <TextField id='event-title' label='Event Title' type='text' style={{ width: 400 }} required />
              <TextField id='event-location' label='Location' type='text' style={{ width: 400, marginTop: '1%' }} required />
              <TextField id='event-date' type='date' label='Date' InputLabelProps={{ shrink: true }} style={{ width: 250, marginTop: '5%' }} required />
              <br />
              <TextField id='event-startTime' type='time' label='Start' InputLabelProps={{ shrink: true }} style={{ width: 110, marginTop: '5%' }} required />
              <TextField id='event-endTime' type='time' label='End' InputLabelProps={{ shrink: true }} style={{ width: 110, marginLeft: '5%', marginTop: '5%' }} required />
              <br />
              
              <form onSubmit={(e) => itemAdd(e)}>
                <TextField id='event-items' value={itemName} onChange={e => setItemName(e.target.value)} type='text' label='Item' InputLabelProps={{ shrink: true }} style={{ width: 200, marginTop: '5%' }} required/>
                <TextField id='event-qty' value={itemQTY} onChange={e => setItemQTY(e.target.value)} type='number' label='QTY' InputProps={{ inputProps: { min: 1 } }} InputLabelProps={{ shrink: true }} style={{ width: 50, marginLeft: '5%', marginTop: '5%' }} required/>
                <IconButton variant='contained' id='event-addItem' type='submit' style={{ marginLeft: '1%', marginTop: '7%' }}><AddShoppingCartIcon /></IconButton>
              </form>
             
              <List subheader='Items in Cart'>
                {itemList.map((item) => {
                  const itemLabel = `item-list-label-${item.name}-${item.qty}`

                  return (
                    <ListItem key={itemLabel}>
                      <ListItemText primary={`Name: ${item.name}, QTY: ${item.qty}`} />
                      <ListItemSecondaryAction>
                        <IconButton edge='end' aria-label='delete' onClick={() => {itemDelete(itemLabel)}}><DeleteIcon /></IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  )
                })}

              </List>
            </form>
          </CardContent>  
        </Card>
      </div>
    </div>
  )
}

export default AdminCreateEvent;
