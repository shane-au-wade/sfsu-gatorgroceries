import React from 'react'
import {Link} from 'react-router-dom'
import './adminAccounts.css'

const CreateUser = () => {
    
    return (
            <div id='createUser'>
                <div className='createUserDiv shadow'>
                    <form>
                        <div>Name</div>
                        <div>
                            <input type='text' className='bottom-space form-entry'></input>
                        </div>
                        <div>Email</div>
                        <div >
                            <input type='text' className='bottom-space form-entry'></input>
                        </div>
                        <div>Temporary Password</div>
                        <div>
                            <input type='text' className='very-bottom-space form-entry'></input>
                        </div>

                        <p className='text-centered checkin'>
                            <Link to='/admin/accounts'>
                                <button>
                                    Create 
                                </button>
                            </Link>
                        </p>  

                    </form>
                </div>
            </div>
)};

export default CreateUser