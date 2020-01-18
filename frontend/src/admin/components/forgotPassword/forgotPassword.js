import React, {useState} from 'react'
import {Link} from 'react-router-dom'
// import AdminHeader from './adminHeader/adminHeader.jsx'
import './forgotPassword.css'
import logo from '../../../public/images/logo.png'


const ForgotPassword = () => {

    const [newPassword, setNewPassword] = useState('')

    const[reenteredPassword,setReenteredPasswordChange] = useState('')

    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value)
      }
    
      const handleReenteredPasswordChange = (event) =>{
            setReenteredPasswordChange(event.target.value)
      }
    
      
      const handlePassword = (event) => {
        event.preventDefault()
        const newPasswordObject = {newPassword,reenteredPassword}
        if(newPassword !== reenteredPassword){
                alert("Passwords don't match");
            } else {
                // make API call
                
                console.log(newPasswordObject)
            }
        }
    
      

    return (
       
            <div className='adminForgotPassword'>
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
                       
                        <form className='signin-form-2' onSubmit={handlePassword}>
                            <input type='password' name='password' placeholder='Enter New Password' value={newPassword} onChange={handleNewPasswordChange} required />
                            <input type='password' name='Reenter-password' placeholder='Reenter Password' value={reenteredPassword} onChange={handleReenteredPasswordChange} required />
                            <div className='login-button'>
                            <div>
                            <input type='submit' value='Submit' className='app-button-2' />
                              </div>  
                           
                            </div>
                            <a href="#">Forgot Password?</a>
                        </form>
                        </div>
                     </div>
                    </div>

             </div>
    )};
    
    export default ForgotPassword