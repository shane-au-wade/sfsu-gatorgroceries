
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import AdminHeader from '../adminHeader/adminHeader.jsx'

import './adminEvents.css'
// import dropDownIcon from '../icons/arrow_drop_down-24px.svg';

import AdminEvent from '../adminEvent/adminEvent.jsx'

const AdminEvents = () => {

    

return (
    <div className='adminEvents'>
        <AdminHeader selected='Events' username='Admin T.'></AdminHeader>
        <div className='AdminContentArea'>
            <h3 className='text-centered padded'>Upcoming Events</h3> 
            <div className='events-container'>
               
                <AdminEvent></AdminEvent>
                <AdminEvent></AdminEvent>
                <AdminEvent></AdminEvent>
                <AdminEvent></AdminEvent>
                <AdminEvent></AdminEvent>
                

            </div>
        </div>
    </div>
)};

export default AdminEvents  