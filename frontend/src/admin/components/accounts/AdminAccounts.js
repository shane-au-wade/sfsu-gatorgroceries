import React from 'react'
import AdminHeader from '../adminHeader/adminHeader.jsx'
import './adminAccounts.css'
import TableRow from './TableRow.jsx'

const AdminAccounts = () => {
return (
    <div className='adminAccounts'>
    <AdminHeader selected='Accounts' username='Admin T.'></AdminHeader>
        <div className='AdminContentArea'>
        <h3 className='text-centered padded'>Users</h3>
        <table>
            <tr>
                <th>Name</th>
                <th>Type</th>
            </tr>
            <TableRow userName='Horace T.' userType='Sys Admin' editIcon='hidden'></TableRow>
            <TableRow userName='Shane W.' userType='Dev' editIcon=''></TableRow>    
            </table>

            <p className='text-centered checkin'>
                <button>
                    Create 
                </button>
            </p>  

        </div>
    </div>
)};

export default AdminAccounts 