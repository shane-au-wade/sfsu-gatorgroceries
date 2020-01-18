import React, {useState} from 'react'
import AdminHeader from '../adminHeader/adminHeader.jsx'
import './adminAccounts.css'

import UserTable from './UserTable.jsx';

const AdminAccounts = () => {

    let users = [
        {name: 'Shane W.', type:'Dev'},
        {name: 'Jon K.', type:'Dev'},
        {name: 'Eduardo R.', type:'Dev'},
    ]

return (
    <div className='adminAccounts'>
    <AdminHeader selected='Accounts' username='Admin T.'></AdminHeader>
        <div className='AdminContentArea'>
        <h3 className='text-centered padded'>Users</h3>
        <UserTable users={users}></UserTable>
        </div>
    </div>
)};

export default AdminAccounts