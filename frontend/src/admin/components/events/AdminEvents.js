
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
               
                <AdminEvent
                month='Jan'
                day='01'
                title='Weekly Distribution'
                date='Mon, Jan 1, 2020'
                time='1:30 PM - 3:30 PM PST'
                location='SFSU | Annex 1'
                ></AdminEvent>

                <AdminEvent
                month='Jan'
                day='01'
                title='Weekly Distribution'
                date='Mon, Jan 1, 2020'
                time='1:30 PM - 3:30 PM PST'
                location='SFSU | Annex 1'
                ></AdminEvent>
                <AdminEvent></AdminEvent>
                <AdminEvent></AdminEvent>
                <AdminEvent></AdminEvent>
                <AdminEvent></AdminEvent>
                

            </div>
        </div>
    </div>
)};

export default AdminEvents  