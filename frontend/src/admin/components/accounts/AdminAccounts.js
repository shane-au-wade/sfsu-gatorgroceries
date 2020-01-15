import React, {useState} from 'react'
import AdminHeader from '../adminHeader/adminHeader.jsx'
import './adminAccounts.css'

import UserTable from './UserTable.jsx';

const AdminAccounts = () => {

    // const [showUsersTable, setUsersTable] = useState(true);
    // const [showCreateUser, setCreateUser] = useState(false);

    // const showPage = () => {

    //     console.log('show page in adminAccount called')
    //     let component = null;

    //     // setUsersTable(false);

    //     if(showUsersTable)
    //     {
    //         component = <UserTable></UserTable>
    //     } 
    //     else if (showCreateUser)
    //     {
    //         component = <CreateUser></CreateUser>;
    //     }
    //     return component;
    // }

return (
    <div className='adminAccounts'>
    <AdminHeader selected='Accounts' username='Admin T.'></AdminHeader>
        <div className='AdminContentArea'>
        <h3 className='text-centered padded'>Users</h3>
        <UserTable></UserTable>
        </div>
    </div>
)};

export default AdminAccounts