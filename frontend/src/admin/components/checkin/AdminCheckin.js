import React, {useState, useEffect} from 'react'
import AdminHeader from '../adminHeader/adminHeader.jsx'
import './style/AdminCheckin.css'
import searchIcon from '../../icons/search-24px.svg';
import checkinServices from '../../services/checkin'
import Order from './order.jsx'
import Receipt from './Receipt.js'

import io from 'socket.io-client';



const AdminCheckin = (props) => {

    const [searchKey, setSearchKey] = useState('')
    const [orders, setOrders] = useState('init')
    const [timeBlocks, setTimeBlocks] = useState ([])
    const [receipt, setReceipt] = useState(<Receipt email='test@test.com' order={[]}></Receipt>);
    const [foundOrder, setFoundOrder] = useState('Order Not Found');
    const socket = io('/event-checkin');


    useEffect(() => {
        
        
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
            
            let query = '[id*="' + searchKey +'"]';
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
            setFoundOrder('Order Not Found');
        }
        setSearchKey(event.target.value);
    }

    const updateReceipt = (order) => {
        setReceipt(<Receipt email={order.student_id} order={order.order} firstName={order.first_name} lastName={order.last_name}></Receipt>);
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
            console.log('orders', orders)
            console.log('found orders:', foundOrder)
            let retOrders = []

            foundOrder.forEach(orderStr => {
                let keyArr = orderStr.split('&');
                retOrders.push(orders[keyArr[1]][keyArr[2]])
            })

            console.log('order arr', retOrders);

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

return (
    <div className='adminCheckin'>
        <div>
            {receipt}
        </div>

        <div className='page'>
            <AdminHeader selected='Events' username={props.location.state.user_name}  history={props.history}></AdminHeader>
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