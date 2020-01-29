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
        // let retVal = ''
        // if(typeof(order) === 'object')
        // {
        //     console.log(order)
        //     retVal = <Order info={order} history={props.history}></Order>
        // }
        // else if(order === 'init')
        // {
        //     retVal = ''
        // }
        // else 
        // {
        //     retVal = <p className="text-centered">Order Not Found</p>
        // }
        // return retVal

        let tempOrder = {student_id: "test2@mail.sfsu.edu",
        first_name: 'shane',
        last_name: 'wade',
        event_id: "45026795-8926-42d6-9b0c-6ef1d40bd692",
        order: [{item:'item1', qty: '5'} , {item:'item1', qty: '5'}, {item:'item1', qty: '5'}, {item:'item1', qty: '5'}],
        status: 'complete',
        bag: false,
        created_at: "2020-01-27T02:58:07.539Z",
        updated_at: "2020-01-27T02:58:07.539Z",
        id: "2b1c2824-2560-4e38-9fed-b037495e3ff7"}

        return <Order info={tempOrder} history={props.history}></Order>
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
            {renderOrder()}      
            </div>
        </div>
    </div>
)};

export default AdminCheckin