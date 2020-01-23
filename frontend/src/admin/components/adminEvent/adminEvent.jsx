import React, {useState} from 'react'
import {Link, withRouter} from 'react-router-dom'

import './style/event.css'
import dropDownIcon from '../../icons/arrow_drop_down-24px.svg';
import editIcon from '../../icons/edit-24px.svg';
import createEventServices from '../../services/createEvent'

const AdminEvent = (props) => {

    // State
    // ID will be used to uniquely identify each event div
    // date 
    // time
    // event name, 
    // location
    // menu in json format. this will need to be sorted out. 
    const [id] = useState(props.id); 
    const [date] = useState(new Date(props.date));
    const [time] = useState(props.time);
    const [name] = useState(props.name);
    const [location] = useState(props.location);
    const [menu] = useState(props.menu);
    const [preview] = useState(props.preview)

    console.log(id, '/n', date, '/n' , time, '/n', name, '/n', location, '/n', menu);
    // console.log(menu);
    
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

    const renderMenu = () => {
        let retElements = [];
        menu.forEach((line) => {
            console.log(line);
            retElements.push(
                <div key={line.item} className='menuLine '>
                    <div className='item'>
                        <span>{line.item}</span>
                    </div> 
                    <span>{line.qty}</span>
                </div>)
        })
        return retElements;
    }

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
        console.log('props adminEvent', props)
        let button = '';
        if(preview === true)
        {
            button = (<button onClickCapture={handlePublish}>
                Publish
            </button>)
        }
        else if(props.order === true)
        {
            button = (
                <Link to={{
                    pathname: '/place-order',
                    state: {
                      eventID: id,
                      menu:menu,
                      student: props.student
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
                    } 
                }} >
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

        createEventServices.createEvent(eventData).then(() => {

        }).catch(err => {
            console.error('Error in creating Event: ', err)
        })
    }
    
    return (
        <div key={id} id={id} className='adminEvent'>
                <div  className='event-div'>
            <button className={'editIcon ' + props.editIcon}>
            <img src={editIcon} alt='editIcon'></img>
            </button>
            <div className='date'>
                <p className='text-left'>{getMonth()}</p>
                <p className='text-left'>{date.getDate()}</p>
            </div>
            <p><strong>{name}</strong></p> 
            <br></br>
            <hr></hr>
            <br></br>
            <p className='date-header'>Date And Time</p>
            <p className='info'>{date.toDateString()}</p>
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
                {renderMenu()}
            </div>

            <p className='text-centered checkin'>

                {renderButton()}
                
            </p>  
    </div>

</div>
        
)};

export default AdminEvent;