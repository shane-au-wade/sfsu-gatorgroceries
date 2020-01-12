import React, {useState} from 'react'
import LogoHeader from './LogoHeader'

const SignIn = () => {
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
    const signInObject = {firstName, lastName, studentEmail}

    console.log(signInObject)
  }

  return (
    <div className='page-wrapper'>
      <LogoHeader />
      <form className='signin-form' onSubmit={handleSignIn}>
        <input type='text' placeholder='First Name' value={firstName} onChange={handleFirstNameChange} required />
        <input type='text' placeholder='Last Name' value={lastName} onChange={handleLastNameChange} required />
        <input type='text' placeholder='Student Email' value={studentEmail} onChange={handleStudentEmailChange} required /> <br />
        <input type='submit' value='Submit' className='app-button' />
      </form>
    </div>
  )
}

export default SignIn