import React from 'react'
import AdminHeader from '../adminHeader/adminHeader.jsx'
import './adminAccounts.css'

import CreateUser from './CreateUser.jsx';

const AdminCreateUser = () => {

return (
    <div className='adminAccounts'>
    <AdminHeader selected='Accounts' username='Admin T.'></AdminHeader>
        <div className='AdminContentArea'>
        <h3 className='text-centered padded'>Create User</h3>
        <CreateUser></CreateUser>
        </div>
    </div>
)};

export default AdminCreateUser;