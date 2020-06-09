import React from 'react'
import {Paper, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PublicLogoHeader from '../../shared/components/publicLogoHeader'
import PublicEvent from './publicEvent'

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

const PublicEvents = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PublicLogoHeader />
      <Typography variant='h6' style={{textAlign:'center', marginTop: '15px'}}>Upcoming Events</Typography>
      <Paper className={classes.EventsWrapper} elevation={0}> 
        <PublicEvent>

        </PublicEvent>
        <PublicEvent>

        </PublicEvent>
        <PublicEvent>
            
        </PublicEvent>
      </Paper> 
    </div>
  )
}

export default PublicEvents