import React, {useState, useEffect} from 'react'
import AdminHeader from '../adminHeader/adminHeader.jsx'
import eventServices from '../../services/events.js'
import './style/adminEvents.css'
import AdminEvent from '../adminEvent/adminEvent.jsx'

const AdminEvents = (props) => {

    const [events, setEvents] = useState([])
        
    useEffect(() => {        
        eventServices.getActiveEvents().then( events => {
            console.log("events", events);   
            setEvents(events)
        });
        
    }, []);

return (
    <div className='adminEvents'>
        <AdminHeader selected='Events' username='Admin T.'></AdminHeader>
        <div className='AdminContentArea'>
            <h3 className='text-centered padded'>Upcoming Events</h3> 
            <div className='events-container'>
               {
               events.map(event => 
                            <AdminEvent
                                key={event.id}
                                id={event.id}
                                date={event.date}
                                time={event.time}
                                name={event.name}
                                location={event.location}
                                menu={event.menu}
                                ></AdminEvent>
                         )
                }
            </div>
        </div>
    </div>
)};

export default AdminEvents  