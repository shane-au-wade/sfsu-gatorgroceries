import React, {useState} from 'react'
import './adminAccounts.css'
import {Link} from 'react-router-dom'
import TableRow from './TableRow.jsx'

const UserTable = (props) => {
 
    const [users, setUsers] = useState(props.users)

    const renderUsers = () => {
        let tableRows = [];
        users.forEach((user) => {
            tableRows.push(
                <TableRow userName={user.name} userType={user.type}></TableRow>
            )
        });
        return tableRows
    }

    return (
        <div id='usersTable'> 
        <div className='table shadow'>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                </tr>
                <TableRow userName='Horace T.' userType='Sys Admin' editIcon='hidden'></TableRow>
                {renderUsers()}
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