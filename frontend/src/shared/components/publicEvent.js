import React from 'react'
import {
    Card, 
    CardContent, 
    CardActions, 
    Typography, 
    Button,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '400px',
    margin: '0 auto',
    marginTop: '20px',
    ['@media screen and (max-width:500px)']: {
        width: '95%',
       
    },
   
  },
 
}));

const PublicEvent = (props) => {
  const classes = useStyles();

  return (
    <Card classes={{root: classes.root}} elevation={2}>
        <CardContent className={classes.contentWrapper}>
            <Typography variant='h6'>June 3</Typography>
            <Typography variant='h6'>Gator Groceries</Typography>
            <Typography><hr></hr></Typography>
            <Typography component='p'>Date and Time</Typography>
            <Typography component='p'>2020-Jun-3</Typography>
            <Typography component='p'>11:00AM - 1:00PM</Typography>
            <br/>
            <Typography component='p'>Location</Typography>
            <Typography component='p'>SFSU, Chesar Chavez Building</Typography>
            <br/>
            <ExpansionPanel>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography >Menu</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography>
                    The menu will go here
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </CardContent>
        <CardActions>
            <Button variant='contained' color='primary'>Create Order</Button>
        </CardActions>
    </Card>
  )
}

export default PublicEvent