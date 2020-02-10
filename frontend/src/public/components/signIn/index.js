import React, {useState} from 'react'
import LogoHeader from '../LogoHeader'
import styled from 'styled-components'
import signInServices from '../../services/signin'
import {withRouter} from 'react-router-dom'

const PageWrapper = styled.div`
  text-align: center;
`

const SignInForm = styled.form`
  padding-top: 47px;
  max-width: 750px;
  margin: 0 auto
`

const TextInput = styled.input`
  margin-top: 22px;
  font-size: 20px;
  padding-left: 10px;
  border-radius: 7px;
  background-color: #F6F6F6;
  color: light gray;
  width: 70%;
  height: 48px;
  &:focus {
    color:black;
    background-color: white;
  }
  &::placeholder {
    font-size: 20px;
    color: light gray;
  }
`

const SubmitButton = styled.input`
  margin-top: 37px;
  font-size: 20px;
  padding: 10px 50px;
  color: rgb(230, 230, 230);
  background-color: #211061;
  border-radius: 11px;
`

const SignIn = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [studentEmail, setStudentEmail] = useState('')

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value)
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value)
  }

  const handleStudentEmailChange = (event) => {
    setStudentEmail(event.target.value)
  }

  const handleSignIn = (event) => {
    event.preventDefault()
    const student = {first_name:firstName, last_name:lastName, student_email:studentEmail}

    console.log(student)

    if(student.student_email.search(/@mail.sfsu.edu/i) !== -1)
    {
        signInServices.verifyStudent(student).then((surveyComplete) => {
        // console.log(surveyComplete)
        // depending on the value of survey_complete,
        // we will redirect to either 
        // the survey or placeorder
        if(surveyComplete)
        {
          props.history.push('/events', [student]);
        }
        else
        {
          props.history.push('/survey', [student]);
        }

        }).catch(err => {
          console.log('Error in student Verification: ', err)
        })
    }
    else{
      alert('invalid credentials')
    }

   
  }

  return (
    <PageWrapper>
      <LogoHeader />
      <SignInForm onSubmit={handleSignIn}>
        <TextInput hover type='text' placeholder='First Name' value={firstName} onChange={handleFirstNameChange} required />
        <TextInput type='text' placeholder='Last Name' value={lastName} onChange={handleLastNameChange} required />
        <TextInput type='text' placeholder='Student Email' value={studentEmail} onChange={handleStudentEmailChange} required /> <br />
        <SubmitButton type='submit' value='Submit' className='app-button' />
      </SignInForm>
    </PageWrapper>
  )
}

export default withRouter(SignIn)