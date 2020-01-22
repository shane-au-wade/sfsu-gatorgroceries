import React, {useState, useEffect} from 'react'
import AdminHeader from '../adminHeader/adminHeader.jsx'
import './adminAccounts.css'
import UserTable from './UserTable.jsx';
import accountServices from '../../services/accounts'

const AdminAccounts = () => {

    let tempUsers = [
        {name: 'Shane W.', type:'Dev'},
        {name: 'Jon K.', type:'Dev'},
        {name: 'Eduardo R.', type:'Dev'},
    ]

    const [users, setUsers] = useState([])

    useEffect(() => {
        accountServices.getAdminUsers().then((admins) => {
            setUsers(admins)
        }).catch(err => {
            console.log(err)
        })    
    }, [])

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