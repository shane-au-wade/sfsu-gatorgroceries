import React from 'react'
import {withRouter} from 'react-router-dom'
import './adminAccounts.css'
import createUserService from '../../services/createUser'

const CreateUser = (props) => {
    
    let user = {
                firstName: '', 
                lastName: '', 
                email: '', 
                type: 'admin'
                }

    const handleChange = (event) => {
            console.log(event.target.name);
            user[event.target.name] = event.target.value; 
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        event.target.firstName.value = '';
        event.target.lastName.value = '';
        event.target.email.value = '';
        console.log(user)

        //axios api calls
        createUserService.createUser(user).then(() => {
            props.history.push('/admin/accounts');
        }).catch(err => {
            console.log(err);
        })
    }

    return (
            <div id='createUser'>
                <div className='createUserDiv shadow'>
                    <form onChange={handleChange} onSubmit={handleSubmit}>
                        <div>First Name</div>
                        <div>
                            <input name='firstName' type='text' className='bottom-space form-entry' autoComplete='off' ></input>
                        </div>
                        <div>Last Name</div>
                        <div>
                            <input name='lastName' type='text' className='bottom-space form-entry' autoComplete='off' ></input>
                        </div>
                        <div>Email</div>
                        <div >
                            <input name='email' type='text' className='bottom-space form-entry' autoComplete='off'></input>
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