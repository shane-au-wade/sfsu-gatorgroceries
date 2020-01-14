import React, {useState} from 'react'
import {Link} from 'react-router-dom'
// import AdminHeader from './adminHeader/adminHeader.jsx'
import './adminLogin.css'
import logo from '../../../public/images/logo.png'


const AdminLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
      }
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value)
      }
    
      const handleLogIn = (event) => {
        event.preventDefault()
        const LogInObject = {email, password}
    
        console.log(LogInObject)
      }

    return (
       
            <div className='adminLogin'>
                <div className='top-banner'>
                    <div>
                    <header>
                        <img src={logo} alt="Logo" className='image-size' />
                        
                    </header>
                    </div>

                    
                </div>
                <div className='log-in-container'>
                     <div className='log-in-background'>
                     
                     <div className='log-in-container'>
                       
                        <form className='signin-form-2' onSubmit={handleLogIn}>
                            <input type='text' placeholder='Email' value={email} onChange={handleEmailChange} required />
                            <input type='text' placeholder='Password' value={password} onChange={handlePasswordChange} required />
                            <input type='submit' value='Submit' className='app-button' /><br></br>
                            <a href="#">Forgot Password?</a>
                        </form>
                        </div>
                     </div>
                    </div>

             </div>
    )};
    
    export default AdminLogin  