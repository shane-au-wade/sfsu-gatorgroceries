import React from 'react'
import {Paper, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PublicLogoHeader from '../../shared/components/publicLogoHeader'
import PublicEvent from '../../shared/components/publicEvent'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    paddingBottom: '30px'
  },
  EventsWrapper: {
    display: 'flex',
    flexDirection: 'column'
  },
  googleFormWrapper: {
    
    width: '90%',
    maxWidth: '600px',
    height:'5300px',
    paddingTop: '10px',
    background: 'rgb(247, 247, 247)', 
    margin: '0 auto',
    marginTop: '10px',
    marginBottom: "30px",
    ['@media screen and (max-width:500px)']: {
        height: '6200px'
    },
    ['@media screen and (max-width:360px)']: {
        
        height: '6350px'
    },
    ['@media screen and (max-width:320px)']: {
        width: '98%',
        height: '6450px'
    },

  },
  googleFormFit: {
    width:'90%', 
    height:'5300px',
    ['@media screen and (max-width:500px)']: {
        height: '6200px'
    },
    ['@media screen and (max-width:375px)']: {
        width: '98%',
        height: '6350px'
    },
    ['@media screen and (max-width:320px)']: {
        width: '100%',
        height: '6450px'
    },
  }
  
}));

const PublicEvents = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PublicLogoHeader />
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