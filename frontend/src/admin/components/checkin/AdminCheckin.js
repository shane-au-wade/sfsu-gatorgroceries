import React, {useState} from 'react'
// import {Link} from 'react-router-dom'
import AdminHeader from '../adminHeader/adminHeader.jsx'
import './style/AdminCheckin.css'

import searchIcon from '../../icons/search-24px.svg';
import checkinServices from '../../services/checkin'
import Order from './order.jsx'

const AdminCheckin = (props) => {

    const [searchKey, setSearchKey] = useState('')
    const [order, setOrder] = useState('')
    const [showMenu, setShowMenu] = useState('no_menu');

    const handleSumbit = (event) => {
        event.preventDefault();
        console.log(searchKey);
        let searchParams = {eventID: props.location.state.eventID, student_id: searchKey}
        
        //axios call will go here
        console.log(searchParams)
        checkinServices.searchOrder(searchParams).then((foundOrder) => {
            console.log('Order: ', foundOrder)
            let tempOrder = foundOrder
            setOrder(tempOrder);
           
        }).catch(err => {
            
        })
    }

    const handleChange = (event) => {
        event.preventDefault();

        if(event.target.value === '')
        {
            setOrder('');
        }
        setSearchKey(event.target.value);
        // console.log(searchKey);
    }

    const renderOrder = () => {
        if(order !== '')
        {
            console.log('rendering order')
            return <Order info={order}></Order>
        }
        else 
        {
            return <div></div>
        }
    }

return (
    <div className='adminCheckin'>
    <AdminHeader selected='Events' username='Admin T.'></AdminHeader>
        <div className='AdminContentArea'>
        <h3 className='text-centered padded'>Checkin</h3>
            <div className='checkin-div'>
            
            {/* this div will contain the search feature of the checkin. 
            users will input gator groceries ID's that are associated with their order */}
            <div className='search-div'>
                <form onSubmit={handleSumbit}>
                <img src={searchIcon} id='searchIcon' alt='searchIcon'></img>
                    <input name='search' type='text' autoComplete='off' className='search' onChange={handleChange}></input> 
                    {/* <button></button> */}
                </form>
            </div>
            {renderOrder()}      
            </div>
        </div>
    </div>
)};

export default AdminCheckin