import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './style/event.css'
import dropDownIcon from '../../icons/arrow_drop_down-24px.svg';
import editIcon from '../../icons/edit-24px.svg';
import createEventServices from '../../services/createEvent'
import Axios from 'axios';

import {FormControlLabel, Checkbox} from '@material-ui/core'


/*

This publicEvent.jsx was created to separate the adminEvent page into two seperate versions.
One for admins and one for the students. 

adminEvent contains sensitive functionality like the ability to edit events and seeing how many
orders have been placed/completed.

publicEvent does not share this functionality.

*/


const AdminEvent = (props) => {

    const [id] = useState(props.id); 
    const [date] = useState(new Date(props.date));
    const [time] = useState(props.time);
    const [name] = useState(props.name);
    const [location] = useState(props.location);
    const [menu] = useState(props.menu);
    const [preview] = useState(props.preview)
    const [timeBlocks] = useState(props.time_blocks)

    const [numPlacedOrders, setNumPlacedOrders] = useState(0)
    const [numReadyOrders, setNumReadyOrders] = useState(0)
    const [numCompletedOrders, setNumCompletedOrders] = useState(0)

    // console.log(id, '/n', date, '/n' , time, '/n', name, '/n', location, '/n', menu);

    const [showMenu, setShowMenu] = useState('no_menu');

    const holdData = {
        placed: numPlacedOrders,
        ready: numReadyOrders,
        complete: numCompletedOrders
    }

    const getMonth = () => {
        let month = ''
        switch(date.getMonth())
        {
            case 0: 
                month = 'Jan'
                break;
            case 1:
                month = 'Feb'
                break;
            case 2:
                month = 'Mar'
                break;
            case 3:
                month = 'Apr'
                break;
            case 4:
                month = 'May'
                break;
            case 5:
                month = 'Jun'
                break;
            case 6:
                month = 'Jul'
                break;
            case 7:
                month = 'Aug'
                break;
            case 8:
                month = 'Sep'
                 break;
            case 9:
                month = 'Oct'
                break;
            case 10:
                month = 'Nov'
                break;
            case 11:
                month = 'Dec'
                break;
            default:
                console.log(new Error('Unable to parse month in adminEvent.jsx'))
        }
        return month;
    }

    // Parse out the month, day, and year from the date in props. The getMonth() is the function above.
    const tempDateYear = new Date(props.date).getUTCFullYear()
    const tempDateMonth = getMonth()
    const tempDateDay = new Date(props.date).getUTCDate()
    const constructedDate = tempDateYear + "-" + tempDateMonth + "-" + tempDateDay

    const handleMenuClick = () =>
    {
        if(showMenu === 'no_menu')
        {
            setShowMenu('')
        }
        else
        {
            setShowMenu('no_menu')
        }
    }

    // renderButton will contain the logic to maintain the limits of how many times students can order from an event.
    const renderButton = () => {
        var sum = holdData.placed + holdData.ready + holdData.complete

        if(sum === 0){
            return(<Link to={{
            pathname: '/place-order', 
            state: { eventID: id, menu: menu, student: props.student, time_blocks: timeBlocks, 
                additionalOrder: false}}}>
                    <button>Order</button>
                    </Link>)
        }
        else if(sum === 1){
            return(
                <div>
                    <p className='info'>You have already reached the max of 1 order for this event. You are allowed to place 1 more order for your family member.</p>
                    <br></br>
                    <Link to={{
                        pathname: '/place-order', 
                        state: { eventID: id, menu: menu, student: props.student, time_blocks: timeBlocks, 
                            additionalOrder: true}}}>
                                <button>Order for Family Member</button>
                                </Link>
                </div>
                )
        }
        else if(sum > 1){
            return(
                <div>
                    <p className='info'>Cannot order as you have reached the maximum amount allowed for this event.</p>
                    <br></br>
                    <button disabled>Cannot Order</button>
                </div>
            )
        }
        else{
            return null
        }
    }

    const handlePublish = () => {
        console.log('handling publish');
        //axios call to /admin/createEven
        let eventData = {};
        eventData.date = date;
        eventData.time = time;
        eventData.name = name;
        eventData.location = location;
        eventData.menu = menu;
        eventData.time_blocks = timeBlocks;
        createEventServices.createEvent(eventData).then(() => {

            props.history.push('/admin/events')

        }).catch(err => {
            console.error('Error in creating Event: ', err)
        })
    }

    useEffect(() => {
        const data = {
            event_id: id,
            student_id: props.student.student_email
        }

        // For Placed Orders
        Axios.post('/admin/getPlacedOrders', data).then(response => {
            setNumPlacedOrders(response.data.count)
        }).catch(error => {
        })

        // For Ready Orders
        Axios.post('/admin/getReadyOrders', data).then(response => {
            setNumReadyOrders(response.data.count)
        }).catch(error => {
        })

        // For Completed Orders
        Axios.post('/admin/getCompletedOrders', data).then(response => {
            setNumCompletedOrders(response.data.count)
        }).catch(error => {
        })
    }, [])

    return (
        <div key={id} id={id} className='adminEvent'>
            <div  className='event-div'>

            <Link to={{
                pathname: '/admin/edit-event',
                state: {
                    edit: true,
                    eventID: id,
                    name: name,
                    location: location,
                    menu: menu,
                    date: date,
                    time: time,
                    time_blocks: timeBlocks
                    } 
                }} >
                <button className={'editIcon ' + props.editIcon}>
                <img src={editIcon} alt='editIcon'></img>
                </button>
            </Link>

            <div className='date'>
                <p className='text-left'>{getMonth()}</p>
                <p className='text-left'>{tempDateDay}</p>
            </div>
            <p><strong>{name}</strong></p> 
            <br></br>
            <hr></hr>
            <br></br>
            <p className='date-header'>Date And Time</p>
            <p className='info'>{constructedDate}</p>
            <p className='info'>{time}</p>
            <br></br>
            <p className='date-header'>Location</p>
            <p className='info'>{location}</p>
            <br></br>

            <p className='menu' onClickCapture={handleMenuClick}>
            <img src={dropDownIcon} className='dropDownIcon' alt='dropDownIcon'></img>
            Menu
            </p>

            <div id='menu' className={showMenu}>
                <span className='menuHeader'><u>Item</u></span> <span><u>Max Qty</u></span>
                {
                menu.map(
                    line => 
                            <div key={line.item} className='menuLine '>
                                <div className='item'>
                                    <span>{line.item}</span>
                                </div> 
                                <span>{line.qty}</span>
                            </div>  
                    )
                }
            </div>

            <div className='text-centered checkin'>
                {renderButton()}
            </div>
    </div>

</div>
        
)};

export default AdminEvent;