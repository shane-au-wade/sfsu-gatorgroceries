import React from 'react'
import {
    Card, 
    CardContent, 
    CardActions, 
    Typography, 
    Button,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Paper
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '400px',
    margin: '0 auto',
    marginTop: '20px',
    /*eslint-disable */
    ['@media screen and (max-width:500px)']: {
        width: '95%',
       
    },
    /*eslint-disable */
    cardActionArea: {
      display: 'flex',
      flexDirection: 'row'
    },
    // menuWrapper: {
    //   display: 'flex',
    //   flexDirection: 'column'
    // }
   
  },
 
}));

const PublicEvent = (props) => {
  const classes = useStyles();

  let event = {event_id:props.id, time_blocks: props.time_blocks, menu:props.men}

  const goToCreateOrderPage = () => {
    props.redirect(event)
  }

  return (
    <Card key={props.id} id={props.id} classes={{root: classes.root}} elevation={2}>
        <CardContent className={classes.contentWrapper}>
            <Typography variant='h6'>{props.date}</Typography>
            <Typography variant='h6'>{props.name}</Typography>
            <hr></hr>
            <Typography component='p'>Date and Time</Typography>
            <Typography component='p'>{props.date}</Typography>
             <Typography component='p'>{props.time}</Typography>
            <br/>
            <Typography component='p'>Location</Typography>
            <Typography component='p'>{props.location}</Typography>
            <br/>
            <ExpansionPanel elevation={0}>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography >Menu</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails >
                  <Paper elevation={0}>
                    {props.menu.map(
                    line => 
                            <div key={line.item} className='menuLine '>
                                    {line.item}           
                            </div>  
                    )}
             
                  </Paper> 
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </CardContent>
        <CardActions classes={classes.cardActionArea}>
          <div style={{width:'60%'}}></div>
            <Button variant='contained' color='primary' onClick={goToCreateOrderPage}>Create Order</Button>
        </CardActions>
    </Card>
  )
}

export default PublicEvent