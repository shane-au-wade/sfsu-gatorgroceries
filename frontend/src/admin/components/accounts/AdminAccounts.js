import React, {useState, useEffect} from 'react'
import AdminHeader from '../adminHeader/adminHeader.jsx'
import './style/adminAccounts.css'
import UserTable from './UserTable.jsx';
import accountServices from '../../services/accounts'

const AdminAccounts = (props) => {

    // let tempUsers = [
    //     {name: 'Shane W.', type:'Dev'},
    //     {name: 'Jon K.', type:'Dev'},
    //     {name: 'Eduardo R.', type:'Dev'},
    // ]

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
    <AdminHeader selected='Accounts' history={props.history}></AdminHeader>
        <div className='AdminContentArea'>
        <h3 className='text-centered padded'>Users</h3>
        <UserTable users={users} username={sessionStorage.getItem('userName')}></UserTable>
        </div>
    </div>
)};

export default AdminAccounts