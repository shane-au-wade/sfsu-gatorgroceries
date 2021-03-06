import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './style/event.css'
import dropDownIcon from '../../icons/arrow_drop_down-24px.svg';
import editIcon from '../../icons/edit-24px.svg';
import createEventServices from '../../services/createEvent'
import Axios from 'axios';


/*

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
    const [numCompletedOrders, setNumCompletedOrders] = useState(0)

    // console.log(id, '/n', date, '/n' , time, '/n', name, '/n', location, '/n', menu);

    const [showMenu, setShowMenu] = useState('no_menu');

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

    const renderButton = () => {
        // console.log('props adminEvent', props)
        let button = '';
        if(preview === true)
        {
            button = ( 
                        <button onClickCapture={handlePublish}>
                            Publish
                        </button>
                    )
        }
        else if(props.order === true)
        {
            button = (
                    <Link to={{
                        pathname: '/place-order',
                        state: {
                        eventID: id,
                        menu:menu,
                        student: props.student,
                        time_blocks: timeBlocks
                        } 
                    }} >
                        <button>
                            Order
                        </button>
                    </Link>
                    )
        }
        else
        {
            button = (
                    <Link to={{
                        pathname: '/admin/checkin',
                        state: {
                        eventID: id,
                        time_blocks: timeBlocks
                        } 
                    }}>
                        <button>
                            Checkin
                        </button>
                    </Link>
                    )
        }
        return button
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


    // The following block of code will let admins know how many orders have been placed/completed 
    // for each event using its event ID whenever the page is manually refreshed.
    useEffect(() => {
        const data = {
            event_id: id,
            student_id: ""
        }

        // For Placed Orders
        Axios.post('/admin/getPlacedOrders', data).then(response => {
            setNumPlacedOrders(response.data.count)
        }).catch(error => {
            console.log("Error occurred in adminEvent's useEffect to get num of placed and completed orders: ", error)
        })

        // For Completed Orders
        Axios.post('/admin/getCompletedOrders', data).then(response => {
            setNumCompletedOrders(response.data.count)
        }).catch(error => {
            console.log("Error occurred in adminEvent's useEffect to get num of placed and completed orders: ", error)
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
            <hr></hr>
            <br></br>
            <p className='date-header'>Order Status</p>
            <p className='info'>Placed Orders: {numPlacedOrders}</p>
            <p className='info'>Completed Orders: {numCompletedOrders}</p>
            <br></br>
            <hr></hr>
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

            <p className='text-centered checkin'>

                {renderButton()}
                
            </p>  
    </div>

</div>
        
)};

export default AdminEvent;