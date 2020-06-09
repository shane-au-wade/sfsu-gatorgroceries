import React from 'react'
import { Paper, Card, CardActions, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PublicLogoHeader from '../../shared/components/publicLogoHeader'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Link } from 'react-router-dom'

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
    ['@media screen and (max-width:500px)']: { 
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
  },
  mailIcon: {
    fontSize: 100,
   
  },
  card: {
    width: '300px',
    margin: '0 auto',
    marginTop: '20px',
    paddingTop: '10px',
    textAlign: 'center',
    /*eslint-disable */
    ['@media screen and (max-width:500px)']: {
        width: '95%',
       
    },
    /*eslint-disable */
  },
  cardActionArea: {
     display: 'flex',
     flexDirection: 'row',
  }
 
}));

const PublicOrderPlaced = (props) => {
  const classes = useStyles();

//   const redirect = () =>{
//     props.history.push('/events'); // redirect to some page
//     console.log('Survey Skipped')
//   }

  return (
    <div className={classes.root}>
      <PublicLogoHeader />
      <Paper className={classes.centerWrapper} elevation={0}> 
        <Card className={classes.card}>
            <Typography component='p'>Your Order has been placed!</Typography>
             <MailOutlineIcon className={classes.mailIcon} color='secondary'></MailOutlineIcon>
             <Typography variant='h6'>Please Confirm your Order via the link sent to your student email.</Typography>
             <CardActions className={classes.cardActionArea}>
                <div style={{width:'30%'}}></div>
                <div style={{width:'30%'}}></div>
                <Link to='/'> 
                    <Button variant='contained' color="primary">Go Home</Button>
                </Link>
                
             </CardActions>
        </Card>
       
      </Paper> 
    </div>
  )
}

export default PublicOrderPlaced  