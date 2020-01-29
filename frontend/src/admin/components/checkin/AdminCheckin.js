import React, {useState, useEffect} from 'react'
import AdminHeader from '../adminHeader/adminHeader.jsx'
import './style/AdminCheckin.css'
import searchIcon from '../../icons/search-24px.svg';
import checkinServices from '../../services/checkin'
import Order from './order.jsx'

const AdminCheckin = (props) => {

    const [searchKey, setSearchKey] = useState('')
    const [orders, setOrders] = useState('init')

    useEffect(() => {
        let searchParams = {eventID: props.location.state.eventID}
        console.log(searchParams);
        checkinServices.getAllOrders(searchParams).then(foundOrders => {
            if(foundOrders.error)
                {
                    console.log('no orders found error')
                    setOrders('')
                }
                else
                {
                    console.log('orders', foundOrders)
                    setOrders(foundOrders); 
                }     
        }).catch(err => {
            console.log('db error')
        })
    }, [])


    const handleSumbit = (event) => {
        event.preventDefault();
        if(searchKey !== '')
        {
            // let searchParams = {eventID: props.location.state.eventID, student_id: searchKey}
            // //axios call will go here
            // checkinServices.searchOrder(searchParams).then((foundOrder) => {
            //     // console.log('Order: ', foundOrder)
            //     if(foundOrder.error)
            //     {
            //         setOrder('')
            //     }
            //     else
            //     {
            //         setOrder(foundOrder); 
            //     }     
            // }).catch(err => {
            //     console.log('db error')
            // })
        }
    }

    const handleChange = (event) => {
        event.preventDefault();
        if(event.target.value === '')
        {
            setOrders('init');
        }
        setSearchKey(event.target.value);
    }

    const renderOrders = () => {
        let retVal = ''
        if(typeof(orders) === 'object')
        {
            console.log(orders)
            retVal = orders.map(order => <Order info={order} history={props.history}></Order>)
        }
        else if(orders === 'init')
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
    <AdminHeader selected='Events' username={props.location.state.user_name}  history={props.history}></AdminHeader>
        <div className='AdminContentArea'>
        <h3 className='text-centered padded'>Checkin</h3>
            <div className='centered-container'>
            
            {/* this div will contain the search feature of the checkin. 
            users will input gator groceries ID's that are associated with their order */}
            <div className='search-div'>
                <form onSubmit={handleSumbit}>
                <img src={searchIcon} id='searchIcon' alt='searchIcon'></img>
                    <input name='search' type='text' autoComplete='off' className='search' onChange={handleChange}></input> 
                    {/* <button></button> */}
                </form>
            </div>
            {renderOrders()}      
            </div>
        </div>
    </div>
)};

export default AdminCheckin