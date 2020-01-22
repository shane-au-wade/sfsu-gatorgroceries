import React from 'react'
import './adminAccounts.css'
import {Link} from 'react-router-dom'
import TableRow from './TableRow.jsx'

const UserTable = (props) => {
 
    return (
        <div id='usersTable'> 
        <div className='table shadow'>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                    </tr>
                    <TableRow userName='Horace T.' userType='Sys Admin' editIcon='hidden'></TableRow>
                    {   
                    props.users.map(user => 
                        (<TableRow key={user.name} userName={user.name} userType={user.type}></TableRow>)
                    )}
                        
                </tbody>    
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