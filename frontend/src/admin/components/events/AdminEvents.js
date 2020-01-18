import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import AdminHeader from '../adminHeader/adminHeader.jsx'
import eventServices from '../../services/events.js'
import './adminEvents.css'
// import dropDownIcon from '../icons/arrow_drop_down-24px.svg';

import AdminEvent from '../adminEvent/adminEvent.jsx'

const AdminEvents = () => {

    // console.log(id, '/n', date, '/n' , time, '/n', name, '/n', location, '/n', menu);

    let id = '7533a62d-270d-4dee-8be6-4e5d24a5b6e0';
    let date = '2020-01-02';
    let time = '1:30 PM - 3:30 PM';
    let name = 'Weekly Distribution';
    let location = 'SFSU | Annex 1'
    let menu = [
                {item: 'Tuna, Canned', qty: '2'},
                {item: 'beans, Canned', qty: '4'},
                {item: 'chips', qty: '3'},
                {item: 'celery', qty: '0'},
                {item: 'chicken, Canned', qty: '0'},
            ]
        
    const renderEvents = () => {

        //this is where an axios call could take place, and or useEffect() could take
        // care of the axis call and the rendering of the events objects. 

        eventServices.getActiveEvents().then( events => {
            console.log(events);
        });

        return(
            <AdminEvent
                id={id}
                date={date}
                time={time}
                name={name}
                location={location}
                menu={menu}
                ></AdminEvent>
        )
    }


return (
    <div className='adminEvents'>
        <AdminHeader selected='Events' username='Admin T.'></AdminHeader>
        <div className='AdminContentArea'>
            <h3 className='text-centered padded'>Upcoming Events</h3> 
            <div className='events-container'>
               
               {renderEvents()}
                {/* <AdminEvent
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
                <AdminEvent></AdminEvent> */}
                

            </div>
        </div>
    </div>
)};

export default AdminEvents  