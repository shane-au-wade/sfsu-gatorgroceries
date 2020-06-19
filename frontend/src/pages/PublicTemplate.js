import React from 'react'
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PublicLogoHeader from '../../shared/components/publicLogoHeader'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  centerWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    // Media queries to handle multiple screen sizes
    /*eslint-disable */
    ['@media screen and (max-width:500px)']: { // eslint-ignore
        // height: '6200px'
    },
    ['@media screen and (max-width:360px)']: {
        
        // height: '6350px'
    },
    ['@media screen and (max-width:320px)']: {
        // width: '98%',
        // height: '6450px'
    },
    /*eslint-disable */
  }
 
}));

const PublicTemplate = (props) => {
  const classes = useStyles();

  const redirect = () =>{
    props.history.push('/events'); // redirect to some page
    console.log('Survey Skipped')
  }

  return (
    <div className={classes.root}>
      <PublicLogoHeader />
      <Paper className={classes.centerWrapper} elevation={0}> 
         
      </Paper> 
    </div>
  )
}

export default PublicTemplate  