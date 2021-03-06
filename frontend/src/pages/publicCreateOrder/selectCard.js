import React from 'react'
import {
    Card, 
    CardContent, 
    Typography, 
    NativeSelect,
    FormControl,
    InputBase
} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);


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
  },
  margin: {
      margin: '10px'
  }
 
}));

const SelectCard = (props) => {
  const classes = useStyles();
  console.log('props in card select', props)

  const renderOptions = () => {
      console.log('props in card select', props)
      
          console.log('rendering options')
        return props.options.map(option => <option value={option}>{option}</option>)
      
  }

  return (
    <Card classes={{root: classes.root}} elevation={2}>
        <CardContent className={classes.contentWrapper}>
            <Typography variant="h6">{props.message}</Typography>
            <FormControl className={classes.margin}>
                <NativeSelect input={<BootstrapInput />}>
                    {
                       renderOptions 
                    }
                </NativeSelect>
            </FormControl>
        </CardContent>
    </Card>
  )
}

export default SelectCard