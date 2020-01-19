import React from 'react'
import {withRouter} from 'react-router-dom'
import './adminAccounts.css'
import createUserService from '../../services/createUser'

const CreateUser = (props) => {
    
    let user = {name: '', email: '', type: 'admin'}

    const handleChange = (event) => {
            console.log(event.target.name);
            user[event.target.name] = event.target.value; 
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        event.target.name.value = '';
        event.target.email.value = '';
        console.log(user)

        createUserService.createUser(user).then(() => {
            props.history.push('/admin/accounts');
        })
    }

    return (
            <div id='createUser'>
                <div className='createUserDiv shadow'>
                    <form onChange={handleChange} onSubmit={handleSubmit}>
                        <div>Name</div>
                        <div>
                            <input name='name' type='text' className='bottom-space form-entry' autoComplete='off' ></input>
                        </div>
                        <div>Email</div>
                        <div >
                            <input name='email' type='text' className='bottom-space form-entry' autoComplete='off'></input>
                        </div>
                        {/* <div>Temporary Password</div>
                        <div>
                            <input type='text' className='very-bottom-space form-entry'></input>
                        </div> */}

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