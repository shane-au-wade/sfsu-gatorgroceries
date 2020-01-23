import React, {useState} from 'react'
import './style/adminLogin.css'
import logo from '../../../public/images/logo.png'
import loginService from '../../services/login'

const AdminLogin = (props) => {

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
        event.target.email.value = '';
        event.target.password.value = '';
        const user = {username:email, password:password}
    
        console.log('user', user)

        loginService.login(user).then(success => {
          if(success)
          {
            props.history.push('/admin/events')
          }
        }).catch(err => {
          // console.error('Login error: ', err)
          
           alert('invalid credentials')
        });
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
                              <input name='email' type='text' placeholder='Email'  onChange={handleEmailChange} required />
                              <input type='password' name='password' placeholder='Password' onChange={handlePasswordChange} required />
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
    
    export default AdminLogin  