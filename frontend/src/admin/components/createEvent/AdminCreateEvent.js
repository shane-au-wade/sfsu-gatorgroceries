import React from 'react'
import {Link} from 'react-router-dom'
import AdminHeader from '../adminHeader/adminHeader.jsx'
import './Admin-create-event-style.css'

const AdminCreateEvent = () => {
return (
    <div>
        <AdminHeader selected='Create Event' username='Admin T.'></AdminHeader>
        <div className='AdminContentArea'>
            <div>
                <h1>Create An Event</h1>
            </div>
        </div>
    </div>
    
)};

export default AdminCreateEvent 