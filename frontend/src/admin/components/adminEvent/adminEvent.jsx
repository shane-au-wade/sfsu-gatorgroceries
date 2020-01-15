import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import '../events/adminEvents.css'
import dropDownIcon from '../../icons/arrow_drop_down-24px.svg';
import editIcon from '../../icons/edit-24px.svg';

const AdminEvent = (props) => {
    
    const [showMenu, setShowMenu] = useState('no_menu');

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
    
    return (
        <div className='event-div '>
            <button className='editIcon'>
            <img src={editIcon}></img>
            </button>
            <div className='date'>
                <p className='text-left'>{props.month}</p>
                <p className='text-left'>{props.day}</p>
            </div>
            <p><strong>{props.title}</strong></p>
            <br></br>
            <hr></hr>
            <br></br>
            <p className='date-header'>Date And Time</p>
            <p className='info'>{props.date}</p>
            <p className='info'>{props.time}</p>
            <br></br>
            <p className='date-header'>Location</p>
            <p className='info'>{props.location}</p>
            <br></br>

            <p className='menu' onClickCapture={handleMenuClick}>
            <img src={dropDownIcon} className='dropDownIcon'></img>
            Menu
            </p>
            
            <div id='menu' className={showMenu}>
                <span className='menuHeader'><u>Item</u></span> <span><u>Max Qty</u></span>
                
                <div className='menuLine '>
                    <div className='item'>
                        <span>Tuna, canned </span>
                    </div> 
                    <span>2</span>
                </div>
                <div className='menuLine '>
                    <div className='item'>
                        <span>beans, canned </span>
                    </div> 
                    <span>4</span>
                </div>
                <div className='menuLine '>
                    <div className='item'>
                        <span>chips</span>
                    </div> 
                    <span>5</span>
                </div>
                <div className='menuLine '>
                    <div className='item'>
                        <span>celery</span>
                    </div> 
                    <span>3</span>
                </div>
                <div className='menuLine '>
                    <div className='item'>
                        <span>chicken, canned</span>
                    </div> 
                    <span>3</span>
                </div>
            </div>

            <p className='text-centered checkin'>
                <button>
                    Checkin
                </button>
            </p>  
    </div>

)};

export default AdminEvent;