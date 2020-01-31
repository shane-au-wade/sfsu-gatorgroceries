import React, {useState, useEffect} from 'react'
import AdminHeader from '../adminHeader/adminHeader.jsx'
import eventServices from '../../services/events.js'
import './style/adminEvents.css'
import AdminEvent from '../adminEvent/adminEvent.jsx'

const AdminEvents = (props) => {

    const [events, setEvents] = useState('')
        
    useEffect(() => {        
        eventServices.getActiveEvents().then( events => {
            console.log("events in useEffect", events);   
            setEvents(events)
        }).catch(err => {
            //no active events
            console.log('catching db error')
            setEvents(err)
        });
        
    }, []);

    const renderEvents = () => {
        let retObj = ''
        console.log('events: ', typeof(events))
        if(typeof(events) !== 'string' && !events.error)
        {
            retObj = events.map(event => 
                <AdminEvent
                    key={event.id}
                    id={event.id}
                    date={event.date}
                    time={event.time}
                    name={event.name}
                    location={event.location}
                    menu={event.menu}
                    username={props.location.state.user_name}
                    time_blocks={event.time_blocks}
                    ></AdminEvent>
                    )
        }
        else
        {
            retObj = <div></div>
        }
        return retObj;
    }

return (
    <div className='adminEvents'>
        <AdminHeader selected='Events' username={props.location.state.user_name} history={props.history}></AdminHeader>
        <div className='AdminContentArea'>
            <h3 className='text-centered padded'>Upcoming Events</h3> 
            <div className='events-container'>
                {
                renderEvents()
                }
            </div>
        </div>
    </div>
)};

export default AdminEvents  