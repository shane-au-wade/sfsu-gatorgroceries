import React from 'react'
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PublicLogoHeader from '../../shared/components/publicLogoHeader'
import LoopButton from '../../shared/components/loopButton'
import SelectCard from './selectCard'

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
    textAlign: 'center',
    // Media queries to handle multiple screen sizes
    // ['@media screen and (max-width:500px)']: { 
    //     // height: '6200px'
    // },
    // ['@media screen and (max-width:360px)']: {
        
    //     // height: '6350px'
    // },
    // ['@media screen and (max-width:320px)']: {
    //     // width: '98%',
    //     // height: '6450px'
    // },
  }
 
}));

const PublicCreateOrder = (props) => {
  const classes = useStyles();

  const redirect = () =>{
    console.log('order submitted')
    props.history.push('/order-placed'); // redirect to some page
  }

  return (
    <div className={classes.root}>
      <PublicLogoHeader />
      <Paper className={classes.centerWrapper} elevation={0}> 
        <SelectCard
        message='Choose one from the following options'
        options={[]}
        ></SelectCard>  
        <SelectCard
        message='Select a pickup time'
        options={[]}
        ></SelectCard>      
        <br/>
         <LoopButton redirect={redirect} text={'Submit'}></LoopButton>
      </Paper> 
    </div>
  )
}

export default PublicCreateOrder  