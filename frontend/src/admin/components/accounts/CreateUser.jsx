import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'
import './style/adminAccounts.css'
import createUserService from '../../services/createUser'

const CreateUser = (props) => {
    
    const [user, setUser] = useState({firstName: '', lastName: '', email: '',password: '', confirmedPassword: '', type: 'admin'})

    const handleChange = (event) => {
            console.log(event.target.name);
            user[event.target.name] = event.target.value; 
            setUser(user);
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if(user.password === user.confirmedPassword)
        {
            event.target.firstName.value = '';
            event.target.lastName.value = '';
            event.target.email.value = '';
            event.target.password.value = '';
            event.target.confirmedPassword.value = '';
            console.log(user)

            // axios api calls
            createUserService.createUser(user).then(() => {
                props.history.push('/admin/accounts');
            }).catch(err => {
                console.log(err);
            })
        }
        else
        {
            alert('Confirmed Password does not match')
        }
    }

    return (
            <div id='createUser'>
                <div className='createUserDiv shadow'>
                    <form onChange={handleChange} onSubmit={handleSubmit}>
                        <div>First Name</div>
                        <div>
                            <input name='firstName' type='text' className='bottom-space form-entry' autoComplete='off' required></input>
                        </div>
                        <div>Last Name</div>
                        <div>
                            <input name='lastName' type='text' className='bottom-space form-entry' autoComplete='off' required></input>
                        </div>
                        <div>Email</div>
                        <div >
                            <input name='email' type='text' className='bottom-space form-entry' autoComplete='off' required></input>
                        </div>
                        <div>Password</div>
                        <div >
                            <input name='password' type='password' className='bottom-space form-entry'  autoComplete='off' required></input>
                        </div>
                        <div>Confirm Password</div>
                        <div >
                            <input name='confirmedPassword' type='password' className='bottom-space form-entry' autoComplete='off' required></input>
                        </div>
                
                        <p className='text-centered checkin'>
                                <button>
                                    Create 
                                </button>
                        </p>  

                    </form>
                </div>
            </div>
)};

export default withRouter(CreateUser)