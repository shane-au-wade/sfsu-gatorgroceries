import React, {useState} from 'react'
import AdminHeader from '../adminHeader/adminHeader.jsx'
import './style/AdminCheckin.css'
import searchIcon from '../../icons/search-24px.svg';
import checkinServices from '../../services/checkin'
import Order from './order.jsx'

const AdminCheckin = (props) => {

    const [searchKey, setSearchKey] = useState('')
    const [order, setOrder] = useState('init')

    const handleSumbit = (event) => {
        event.preventDefault();
        if(searchKey !== '')
        {
            let searchParams = {eventID: props.location.state.eventID, student_id: searchKey}
            //axios call will go here
            checkinServices.searchOrder(searchParams).then((foundOrder) => {
                // console.log('Order: ', foundOrder)
                if(foundOrder.error)
                {
                    setOrder('')
                }
                else
                {
                    setOrder(foundOrder); 
                }     
            }).catch(err => {
                console.log('db error')
            })
        }
    }

    const handleChange = (event) => {
        event.preventDefault();
        if(event.target.value === '')
        {
            setOrder('init');
        }
        setSearchKey(event.target.value);
    }

    const renderOrder = () => {
        // console.log('rendering order: ', order)
        // console.log(typeof(order))
        let retVal = ''
        if(typeof(order) === 'object')
        {
            retVal = <Order info={order}></Order>
        }
        else if(order === 'init')
        {
            retVal = ''
        }
        else 
        {
            retVal = <p className="text-centered">Order Not Found</p>
        }
        return retVal
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