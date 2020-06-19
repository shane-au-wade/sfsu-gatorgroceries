import React, { useState } from 'react'
import {Paper, TextField, FormControl, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PublicLogoHeader from '../../shared/components/publicLogoHeader'
import LoopButton from '../../shared/components/loopButton'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh', 
  },
  mainWrapper: {
    textAlign: 'center'
  },
  textFieldWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  textField : {
    width: '90%',
    maxWidth: '400px',
    background: 'rgb(252, 252, 252)', 
    margin: '0 auto',
    marginTop: '15px',
  },
  signinComment: {
 
    width: '80%',
    maxWidth: '400px',
    paddingTop: '10px',
    margin: '0 auto'
  },
  
}));

const PublicSignin = (props) => {
  const classes = useStyles();

  const [error, setError] =  useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  let student = {first_name:'', last_name:'', student_email:''}

  const handleSignIn = () => {
    console.log('Student in Signin Page:', student)
    // if(student.student_email.search(/@mail.sfsu.edu/i) !== -1)
    if(student.student_email.search(/@/i) !== -1)
    {
        // axios query to verify student, 
        // then use sessionStorage to store the 
        // the student email for later use
        // and student first and last name.

        axios.post('student/verify-student', student).then((surveyComplete) => {
        // console.log(surveyComplete)
        // depending on the value of survey_complete,
        // we will redirect to either 
        // the survey or events

        window.sessionStorage.setItem('student', JSON.stringify(student))
        if(surveyComplete)
        {
          props.history.push('/events');
        }
        else
        {
          // previously if survey was not complete we would push to survey
          // for the summer of 2020, we will just redirect to events
          // and find a way to survey them on their own time
          // props.history.push('/survey', [student]);
          props.history.push('/events', [student, {survey_incomplete:true}]);
        }

        }).catch(err => {
          console.log('Error in student Verification: ', err)
        })
    }
    else{
      setError(true)
      setErrorMessage('Invalid Email')
      return false
    }

  }

/**
 * @param {*} event
 * This function untilizes the event name which is the key
 * in the student object.  That way I can easily set all
 * the parameters of the student object in on function 
 */

  const handleFormInput = (event) => {
    // console.log('Event name:', event.target.name)
    // console.log('Event value:', event.target.value)
    student[event.target.name] = event.target.value
    if(student.student_email === '')
    {
      setError(false)
      setErrorMessage('Valid emails contain the "@" symbol')
    }
  }

  return (
    <div className={classes.root}>
      <PublicLogoHeader /> 
      <Paper className={classes.mainWrapper} elevation={0}> 

      <form  onChange={handleFormInput}>
        <Paper className={classes.textFieldWrapper} elevation={0}>
              <TextField
              variant={'outlined'}
              placeholder={'First Name'}
              className={classes.textField}
              label='First Name'
              name={'first_name'}
              />
              <TextField
                variant={'outlined'}
                placeholder={'Last Name'}
                className={classes.textField}
                label='Last Name'
                name={'last_name'}
              />
              <TextField
                error={error}
                variant={'outlined'}
                placeholder={'Student Email'}
                className={classes.textField}
                label='Student Email'
                name={'student_email'}
                helperText={errorMessage}
              />
          </Paper>   
        </form>
            
            <Paper elevation={0}>
              <Typography component='p' className={classes.signinComment}> We are temporarily allowing any email to be used:</Typography>
              <Typography component='p'>Valid during Summer 2020</Typography>
            </Paper> 
          <LoopButton redirect={handleSignIn} text={'Submit'} ></LoopButton>   
      </Paper>
    </div>
  )
}

export default PublicSignin  