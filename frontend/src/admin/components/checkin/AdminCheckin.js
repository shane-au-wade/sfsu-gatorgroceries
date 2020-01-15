import React, {useState} from 'react'
import AdminHeader from '../adminHeader/adminHeader.jsx'
import './AdminCheckin.css'

const AdminCheckin = () => {

    // const [showUsersTable, setUsersTable] = useState(true);
    // const [showCreateUser, setCreateUser] = useState(false);

return (
    <div className='adminCheckin'>
    <AdminHeader selected='Events' username='Admin T.'></AdminHeader>
        <div className='AdminContentArea'>
        <h3 className='text-centered padded'>Checkin</h3>
            <div className='checkin-div'>
            this is the checkin page
            </div>
        </div>
    </div>
)};

export default AdminCheckin