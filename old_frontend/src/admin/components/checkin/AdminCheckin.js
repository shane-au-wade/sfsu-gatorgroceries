import React, {useState, useEffect} from 'react'
import AdminHeader from '../adminHeader/adminHeader.jsx'
import './style/AdminCheckin.css'
import searchIcon from '../../icons/search-24px.svg';
import checkinServices from '../../services/checkin'
import Order from './order.jsx'
import Receipt from './Receipt.js'
import Axios from 'axios';

// import io from 'socket.io-client';
import socket from '../socket'

let prevSearchKey = ''

const AdminCheckin = (props) => {

    const [searchKey, setSearchKey] = useState('')
    const [orders, setOrders] = useState('init')
    const [timeBlocks, setTimeBlocks] = useState ([])
    const [receipt, setReceipt] = useState(<Receipt email='test@test.com' order={[]}></Receipt>);
    const [foundOrder, setFoundOrder] = useState('Order Not Found');

    const [numPlacedOrders, setNumPlacedOrders] = useState(0)
    const [numCompletedOrders, setNumCompletedOrders] = useState(0)

    useEffect(() => {
        // Below is the code to fetch number of placed and completed orders.
        const data = {
            event_id: props.location.state.eventID,
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


        
        socket.emit('join-room', props.location.state.eventID);
        
        // window.addEventListener("scroll", (event) => {event.preventDefault(); console.log('scrolling', event)});
        let tempBlocks = props.location.state.time_blocks;
        tempBlocks.push({block: 'none'})
        setTimeBlocks(tempBlocks)
        console.log('time blocks', props.location.state.time_blocks)
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

                    processOrders(foundOrders, props.location.state.time_blocks).then((processedOrders) => {
                        setOrders(processedOrders);
                    })

                    
                }     
        }).catch(err => {
            console.log('db error')
        })

    }, [])

    // This useEffect will update the number of placed and completed orders every time the page re-renders.
    useEffect(() => {
        // Below is the code to fetch number of placed and completed orders.
        const data = {
            event_id: props.location.state.eventID,
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
    })

    const processOrders = (foundOrders, timeBlocks) => {
        return new Promise((resolve, reject) => {
            let processedOrders = {}
            processedOrders.none = [];
            try 
            {
                timeBlocks.forEach(time => {
                        processedOrders[time.block] = [];
                    });
            } catch (error) {
                console.log('error in order time block setup')
            }   

            console.log('orders before adding:', processedOrders) 
            
            try 
            {
                foundOrders.forEach(order => {
                                try{ processedOrders[order.pickup].push(order) }
                                catch(error) { console.log('invalid order pickup time') } 
                            })
            } catch (error) {  
                console.log('error in order processing', error)
            }      
            console.log('final processed orders:', processedOrders)
            resolve(processedOrders)
        })    
    }

    const handleSumbit = (event) => {
        event.preventDefault();
        //console.log(`seachkey = ${searchKey}, prevKey = ${prevSearchKey}`)
        if(searchKey !== '' && searchKey !== prevSearchKey)
        {   
            prevSearchKey = searchKey
            let query = '[id*="' + searchKey.trim() +'"]';
            let foundOrders = 'Order Not Found'
            let orderIDs = []
            try
            {
                foundOrders = document.querySelectorAll(query);
                foundOrders.forEach(node => {
                    console.log(node.id);
                    orderIDs.push(node.id)
                })
            }
            catch(error)
            {

            }
            // console.log('order list:', foundOrders);
            if(orderIDs.length > 0)
            {
                setFoundOrder(orderIDs);
            }        
        }
    }

    const handleChange = (event) => {
        event.preventDefault();
        if(event.target.value === '')
        {
            prevSearchKey = ''
            setFoundOrder('Order Not Found');
        }
        setSearchKey(event.target.value.toLowerCase());
    }

    const updateReceipt = async (order) => {
        await setReceipt(<Receipt email={order.student_id} order={order.order} firstName={order.first_name} lastName={order.last_name}></Receipt>);
        let y = window.scrollY
            console.log('scroll top height', y)
             window.print()
             window.scrollTo(0,y);   
    }


    const renderOrders = (arr) => {  
        if(typeof(arr) === 'object')
        {
            let retOrders = [];
            let indexCounter = 0;
            arr.forEach(order => {
                retOrders.push(<Order info={order} index={indexCounter} history={props.history} updateReceipt={updateReceipt}></Order>)
                indexCounter++;
            })
            return retOrders;
        }  
    }

    const renderFoundOrder = () => {

        if(foundOrder !== 'Order Not Found')
        {
            // console.log('orders', orders)
            // console.log('found orders:', foundOrder)
            let retOrders = []

            foundOrder.forEach(orderStr => {
                let keyArr = orderStr.split('&');
                retOrders.push(orders[keyArr[1]][keyArr[2]])
            })

            // console.log('order arr', retOrders);

            return retOrders.map(order => <Order info={order} index={777} history={props.history} updateReceipt={updateReceipt}></Order>);
        }
        //console.log(orders);
       
                           
    }

    const renderTimeBlocks = () => {
             return timeBlocks.map(time => (
                <div className='time-container'>
                <p className='timeHeader'>{time.block}</p>
                {renderOrders(orders[time.block])}
                </div>
                )
            )
    }

    /**
     * socket.io update 
     */

    socket.on("update-orders", (order) => {

        if(orders !== 'init')
        {
            //console.log('now updating orders via socket.io: ', order)
            let updatedOrders = JSON.parse(JSON.stringify(orders))
            //console.log(updatedOrders)

            for(let i = 0; i < updatedOrders[order.pickup].length; i++)
            {
                if(updatedOrders[order.pickup][i].id === order.id)
                {
                    updatedOrders[order.pickup][i].status = order.status
                }

                if(i === (updatedOrders[order.pickup].length - 1))
                {
                    //console.log('calling setORder from socket update:')
                   // console.log(updatedOrders)
                    setOrders(updatedOrders)       
                }
            }  
        }
        
    })

return (
    <div className='adminCheckin'>
        <div>
            {receipt}
        </div>

        <div className='page'>
            <AdminHeader selected='Events' history={props.history}></AdminHeader>
            <div className='AdminContentArea'>
            <h3 className='text-centered padded'>Checkin</h3>
                <div  className='centered-container'>
                
                {/* this div will contain the search feature of the checkin. 
                users will input gator groceries ID's that are associated with their order */}
                <div className='search-div'>
                    <form onSubmit={handleSumbit}>
                    <img src={searchIcon} id='searchIcon' alt='searchIcon'></img>
                        <input name='search' type='text' autoComplete='off' className='search' onChange={handleChange}></input> 
                        {/* <button></button> */}
                    </form>
                </div>

                {/* Below will contain the code to display total number of placed and completed orders for the Checkin page. */}
                <div className='number-of-orders-container'>
                    <p className='numberOrdersHeader'><strong>Placed Orders: {numPlacedOrders}</strong></p>
                    <p className='numberOrdersHeader'><strong>Completed Orders: {numCompletedOrders}</strong></p>
                </div>

                <div id='foundOrderLocation'>
                {renderFoundOrder()}
                </div>
                <br></br>
                {renderTimeBlocks()}
                {/* {renderOrders()}       */}
                </div>
            </div>
        </div>    
    </div>
)};

export default AdminCheckin