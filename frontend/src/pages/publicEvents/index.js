import React, {useEffect, useState} from 'react'
import {Paper, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PublicLogoHeader from '../../shared/components/publicLogoHeader'
import axios from 'axios'
import PublicEvent from './publicEvent'
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    paddingBottom: '30px',
  },
  EventsWrapper: {
    display: 'flex',
    flexDirection: 'column'
  },
  
}));

console.log('Student from signin page:', JSON.parse(window.sessionStorage.getItem('student')))

const PublicEvents = (props) => {
  const classes = useStyles();

  const [events, setEvents] = useState([])

    useEffect(() => {
      // console.log('props student events ',props)
      axios.get('admin/get-active-events').then(response => {
        console.log('events', events)
      setEvents(response.data)
    }).catch(err => {
      console.error('Student/Events Error: ', err)
    })
  }, [])

  const goToCreateOrderPage = (event) => {
    window.sessionStorage.setItem('event', JSON.stringify(event))
    props.history.push('/create-order')
  }

  const renderPublicEvents = () => {
    console.log('events in render public events', events)
    if(!events.error)
    {
      return events.map((event) =>  
                                <PublicEvent
                                id={event.id}
                                date={event.date}
                                name={event.name}
                                time={event.time}
                                location={event.location}
                                menu={event.menu}
                                time_blocks={event.time_blocks}
                                redirect={goToCreateOrderPage}
                                ></PublicEvent>
                                )
    }
    else
    {
      console.log('no current events')
      return <Typography component='p' style={{textAlign:'center'}}>No Upcoming Events</Typography>
    }
  }

  

  return (
    <div className={classes.root}>
      <PublicLogoHeader />
      <Typography variant='h6' style={{textAlign:'center', marginTop: '15px'}}>Upcoming Events</Typography>
      <Paper className={classes.EventsWrapper} elevation={0}> 
        {renderPublicEvents()}
      </Paper> 
    </div>
  )
}

export default PublicEvents