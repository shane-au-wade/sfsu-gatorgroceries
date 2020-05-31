import React, { Component } from 'react';
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
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    background: '#f3f3f3',
    marginTop: '-5%',
  },

  card: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}))

const AdminCreateEvent = (props) => {
  const classes = useStyles()
  console.log("Passed props: ", props)

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
              <TextField id='event-startTime' type='time' label='Start' defaultValue='0:00' InputLabelProps={{ shrink: true }} style={{ width: 110, marginTop: '5%' }} required />
              <TextField id='event-endTime' type='time' label='End' defaultValue='0:00' InputLabelProps={{ shrink: true }} style={{ width: 110, marginLeft: '5%', marginTop: '5%' }} required />
              <br />
              <TextField id='event-items' type='text' label='Item' InputLabelProps={{ shrink: true }} style={{ width: 200, marginTop: '5%' }} />
              <TextField id='event-qty' type='number' label='QTY' defaultValue='1' InputProps={{ inputProps: { min: 1 } }} InputLabelProps={{ shrink: true }} style={{ width: 50, marginLeft: '5%', marginTop: '5%' }} />
              <IconButton variant='contained' id='event-addItem' style={{ marginLeft: '1%', marginTop: '7%' }}><AddShoppingCartIcon /></IconButton>

              <List subheader='Items in Cart'>

              </List>
            </form>
            

          </CardContent>
        
        
        
        </Card>
      </div>

    </div>
  )
}

export default AdminCreateEvent;
