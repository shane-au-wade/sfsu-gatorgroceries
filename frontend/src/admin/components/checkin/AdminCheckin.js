import React from 'react'
import {Link} from 'react-router-dom'
import AdminHeader from '../adminHeader/adminHeader.jsx'
import './AdminCheckin.css'
import dropDownIcon from '../../icons/arrow_drop_down-24px.svg';
import searchIcon from '../../icons/search-24px.svg';

const AdminCheckin = () => {

    const handlePrint = (event) => {
        console.log('printing')
        window.open('/admin/receipt'); 
        window.focus();
        // handle.blur();
    }

    const handleOrderClick = () => {
       
    }

    const Order = (props) => {
        return (<div className='order-div'>
                    
                   <p className='info'>Name</p> 
                    <p>&nbsp;{props.ordername}</p>
                    <p className='info'>Order ID</p>
                    <p>&nbsp;{props.orderID}</p>
                    <p className='menu' onClickCapture={handleOrderClick}>
                    <img src={dropDownIcon} className='dropDownIcon' alt='dropDownIcon'></img>
                    Order
                    </p>
                    <div className='text-centered checkin'>
                        <Link onClickCapture={handlePrint}>
                            <button >
                                Print
                            </button>
                        </Link>
                    </div>
        </div>)
    };

return (
    <div className='adminCheckin'>
    <AdminHeader selected='Events' username='Admin T.'></AdminHeader>
        <div className='AdminContentArea'>
        <h3 className='text-centered padded'>Checkin</h3>
            <div className='checkin-div'>
            
            {/* this div will contain the search feature of the checkin. 
            users will input gator groceries ID's that are associated with their order */}
            <div className='search-div'>
                <form>
                <img src={searchIcon} id='searchIcon' alt='searchIcon'></img>
                    <input type='text' autoComplete='off' className='search'></input> 
                </form>
            </div>

            {/* this will be the order tile that will pop up after an order is found
            it will also indicate if there is not order at all */}
           
            <Order ordername='swade1' orderID='001'></Order>

            </div>
        </div>
    </div>
)};

export default AdminCheckin