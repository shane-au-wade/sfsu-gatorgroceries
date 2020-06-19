import React from 'react'
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GGLogo from '../../images/logo.png'

const useStyles = makeStyles((theme) => ({
  logoWrapper: {
    background: 'rgb(196, 196, 196)', 
    textAlign: 'center'
  },
  logoImg: {
    height: "117px",
    marginTop: "40px",
    marginBottom: "40px",
  }
}));

const PublicLogoHeader = () => {

  const classes = useStyles();

  return (
      <Paper className={classes.logoWrapper} elevation={0}> 
            <img src={GGLogo} className={classes.logoImg} alt='GG Logo'></img>  
      </Paper>
  )
}

export default PublicLogoHeader  