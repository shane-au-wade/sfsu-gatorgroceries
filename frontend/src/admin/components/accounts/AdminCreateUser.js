import React from 'react'
import AdminHeader from '../adminHeader/adminHeader.jsx'
import './style/adminAccounts.css'

import CreateUser from './CreateUser.jsx';

const AdminCreateUser = (props) => {

return (
    <div className='adminAccounts'>
    <AdminHeader selected='Accounts' history={props.history}></AdminHeader>
        <div className='AdminContentArea'>
        <h3 className='text-centered padded'>Create User</h3>
        <CreateUser></CreateUser>
        </div>
    </div>
)};

export default AdminCreateUser;