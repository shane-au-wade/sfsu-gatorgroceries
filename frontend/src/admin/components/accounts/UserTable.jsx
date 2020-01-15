import React from 'react'
import './adminAccounts.css'
import {Link} from 'react-router-dom'
import TableRow from './TableRow.jsx'

const UserTable = () => {
 
    return (
        <div id='usersTable'> 
        <div className='table shadow'>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                </tr>
                <TableRow userName='Horace T.' userType='Sys Admin' editIcon='hidden'></TableRow>
                <TableRow userName='Shane W.' userType='Dev' editIcon=''></TableRow>
                <TableRow userName='Jon K.' userType='Dev' editIcon=''></TableRow>
                <TableRow userName='Eduardo R.' userType='Dev' editIcon=''></TableRow>
            </table>
            <p className='text-centered checkin'>
                <Link to='/admin/create-user'>
                    <button>
                        New 
                    </button>
                </Link>
            </p>  
        </div>
    </div>
    )};

export default UserTable