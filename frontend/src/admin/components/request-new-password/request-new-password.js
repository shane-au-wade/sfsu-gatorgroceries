import React, {useState} from 'react'
// import AdminHeader from './adminHeader/adminHeader.jsx'
import './request-new-password.css'
import logo from '../../../public/images/logo.png'


const RequestNewPassword = () => {

    const [email, setEmail] = useState('')

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
      }
    
      
      const handleEmail = (event) => {
        event.preventDefault()
        const EmailObject = {email}
    
        console.log(EmailObject)
      }
    
      

    return (
       
            <div className='adminRequestPassword'>
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
                       
                        <form className='signin-form-2' onSubmit={handleEmail}>
                            <input type='text' name='email' placeholder='Enter Email' value={email} onChange={handleEmailChange} required />
                            
                            <div className='login-button'>
                            <div>
                            <input type='submit' value='Submit' className='app-button-2' />
                              </div>  
                           
                            </div>
                        </form>
                        </div>
                     </div>
                    </div>

             </div>
    )};
    
    export default RequestNewPassword