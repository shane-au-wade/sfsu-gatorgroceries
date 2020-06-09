import React from 'react'
import {Link} from 'react-router-dom'
import {Paper, TextField, Button, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PublicLogoHeader from '../../shared/components/publicLogoHeader'
import LoopButton from '../../shared/components/loopButton'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
   
  },
  textFieldWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    textAlign: 'center'
  },
  textField : {
    width: '90%',
    maxWidth: '500px',
    background: 'rgb(247, 247, 247)', 
    margin: '0 auto',
    marginTop: '10px',
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

  let student = {first_name:'', last_name:'', student_email:'@'}

  const handleSignIn = () => {
    console.log(student)
    // if(student.student_email.search(/@mail.sfsu.edu/i) !== -1)
    if(student.student_email.search(/@/i) !== -1)
    {
        // axios query to verify student, 
        // then use sessionStorage to store the 
        // the student email for later use
        // and student first and last name.

        props.history.push('/survey')
        // signInServices.verifyStudent(student).then((surveyComplete) => {
        // // console.log(surveyComplete)
        // // depending on the value of survey_complete,
        // // we will redirect to either 
        // // the survey or placeorder
        // // props.history.push('/events', [student]);
        
        // if(surveyComplete)
        // {
        //   props.history.push('/events', [student]);
        // }
        // else
        // {
        //   // previously if survey was not complete we would push to survey
        //   // for the summer of 2020, we will just redirect to events
        //   // and find a way to survey them on their own time
        //   // props.history.push('/survey', [student]);
        //   props.history.push('/events', [student, {survey_incomplete:true}]);
        // }

        // }).catch(err => {
        //   console.log('Error in student Verification: ', err)
        // })
    }
    else{
      alert('invalid credentials')
      return false
    }

  }

  return (
    <div className={classes.root}>
      <PublicLogoHeader />
      <Paper className={classes.textFieldWrapper} elevation={0}> 
            <TextField
            required
            variant={'outlined'}
            placeholder={'First Name'}
            className={classes.textField}
            name={'first_name'}
            />

            <TextField
              required
              variant={'outlined'}
              placeholder={'Last Name'}
              className={classes.textField}
              name={'last_name'}
            />

            <TextField
              required
              variant={'outlined'}
              placeholder={'Student Email'}
              className={classes.textField}
              name={'student_email'}
            />
            <Paper elevation={0}>
              <Typography component='p' className={classes.signinComment}> We are temporarily allowing any email to be used: Valid during Summer 2020 </Typography>
            </Paper> 
          <LoopButton redirect={handleSignIn} text={'Submit'} ></LoopButton>   
      </Paper>
    </div>
  )
}

export default PublicSignin  