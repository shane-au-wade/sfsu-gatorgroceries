import React, {useState, useEffect} from 'react'
// import {Link} from 'react-router-dom'
import AdminHeader from '../adminHeader/adminHeader.jsx'
import eventServices from '../../services/events.js'
import './adminEvents.css'
// import dropDownIcon from '../icons/arrow_drop_down-24px.svg';

import AdminEvent from '../adminEvent/adminEvent.jsx'

const AdminEvents = () => {

    // console.log(id, '/n', date, '/n' , time, '/n', name, '/n', location, '/n', menu);

    // let id = '7533a62d-270d-4dee-8be6-4e5d24a5b6e0';
    // let date = '2020-01-02';
    // let time = '1:30 PM - 3:30 PM';
    // let name = 'Weekly Distribution';
    // let location = 'SFSU | Annex 1'
    // let menu = [
    //             {item: 'Tuna, Canned', qty: '2'},
    //             {item: 'beans, Canned', qty: '4'},
    //             {item: 'chips', qty: '3'},
    //             {item: 'celery', qty: '0'},
    //             {item: 'chicken, Canned', qty: '0'},
    //         ]

    const [eventTiles, setEventTiles] = useState([])
        

    useEffect(() => {
        console.log('this function has been called')
        
        eventServices.getActiveEvents().then( events => {
            console.log(events);
        
            let tempArr = [];

            events.forEach((event) => {
                
                    tempArr.push(<AdminEvent
                        key={event.id}
                        id={event.id}
                        date={event.date}
                        time={event.time}
                        name={event.name}
                        location={event.location}
                        menu={event.menu}
                        ></AdminEvent>)
                
            })

            console.log('event tiles', eventTiles)
            
            setEventTiles(tempArr)
        });
        
    }, []);

return (
    <div className='adminEvents'>
        <AdminHeader selected='Events' username='Admin T.'></AdminHeader>
        <div className='AdminContentArea'>
            <h3 className='text-centered padded'>Upcoming Events</h3> 
            <div className='events-container'>
               {eventTiles}
            </div>
        </div>
    </div>
)};

export default AdminEvents  