import React from 'react'
import {Link} from 'react-router-dom'
import {Paper, Button, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FoodImg from '../../images/food.png'
import PublicLogoHeader from '../../shared/components/publicLogoHeader'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    textAlign: 'center'
  },
  scheduleWrapper: {
    background: 'rgb(243, 243, 243)',
  },
  createOrderWrapper: {
    background: 'rgb(247, 247, 247)', 
    display: "flex",
    flexDirection: "column",
    paddingBottom: '30px'
  },
  aboutUsWrapper: {
    fontSize: "18px",
    padding: "30px 15px",
    maxWidth: "750px",
    margin: "0 auto"
  },
  foodImg: {
    width: "80%",
    maxWidth: "440px",
    padding: "40px",
    margin: "0 auto"
  },
  scheduleHeader: {
    marginTop: "30px",
    fontSize: "20px",
    fontWeight: "400",
  }
}));

const PublicHome = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PublicLogoHeader />
      <Paper className={classes.scheduleWrapper} elevation={0}>
        <Typography component='h2' className={classes.scheduleHeader}>
          <strong>WEEKLY FOOD DISTRIBUTION</strong>
        </Typography>
        <Typography style={{marginBottom: '30px'}}>
          Every Wednesdays and Thursdays <br />
          11:00 am - 01:00 pm <br />
          SFSU, Cesar Chavez Building <br />
        </Typography>
      </Paper>
      <Paper className={classes.createOrderWrapper} elevation={0}> 
        <img src={FoodImg} className={classes.foodImg} alt='Food Img'></img>
        <Link to='/signin'>
          <Button variant="contained" color="primary"> 
            Create Order
          </Button>
        </Link>
      </Paper>
      <Paper className={classes.aboutUsWrapper} elevation={0}>
        <Typography component='h2' className={classes.scheduleHeader} >
          <strong>This is a SFSU only program. Please make sure to have your SFSU email ready.</strong>
        </Typography>
        <br />
        <Typography component='h2'  className={classes.scheduleHeader}>
          What's Gator Groceries?
        </Typography>
        <br />
          Gator Groceries is a free service provided by the associated students 
          in partnership with the SF/Marin Foodbank for students who are experiencing 
          food insecurity. We have a weekly distribution every Monday in Annex 1 - this 
          is our main day and you can expect to get up to a weeks worth of food. We also 
          have two emergency food days on Wednesday and Thursday on the bottom floor of 
          the Cesar Chavez Student Center, these emergency food days are supplementary 
          only with limited supplies. We are not open during holidays or school breaks. 
        <br />
        <Typography component='h2' className={classes.scheduleHeader} >
          Other Food Resources
        </Typography>
        <br />
        The San Francisco Bay area has lots of amazing resources for people who are 
        experiencing food insecurity. Pictured on the right is a flyer for a new pantry 
        opening near campus. We highly recommend students check it out. For other resources 
        please check out the SF/Marin online food locator here: 
        <br />
        <a href='https://www.sfmfoodbank.org/find-food/'>https://www.sfmfoodbank.org/find-food/</a>
        <br />
        This online tool has access to over 270 food pantries in the SF/Marin area. There 
        are also resources on this web page to help secure other sources of food such 
        as sign-up assistance for SNAP (EBT food stamps).
      </Paper>
    </div>
  )
}

export default PublicHome  