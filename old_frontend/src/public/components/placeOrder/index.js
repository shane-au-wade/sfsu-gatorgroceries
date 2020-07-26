import React, { useState, useEffect } from 'react';
import './style/place-order.css'
import logo from '../../images/logo.png'
import InputSpinner from '../inputSpinner/inputSpinner.jsx'
import orderServices from '../../services/placeOrder.js'
import LoopButton from '../../../shared/loopButton.js'
import Axios from 'axios';

const PlaceOrder = (props) => {

  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState([])
  const [timeBlocks, setTimeBlocks] = useState([])
  const [timeSelect, updateTimeSelect] = useState('none')

  const [numPlacedOrders, setNumPlacedOrders] = useState(0)
  const [numReadyOrders, setNumReadyOrders] = useState(0)
  const [numCompletedOrders, setNumCompletedOrders] = useState(0)

  const [additionalOrder, setAdditionalOrder] = useState(false)

  useEffect(() => {
    // console.log('props placeorder', props)
    setMenu(props.location.state.menu)
    setTimeBlocks(props.location.state.time_blocks)
    order.push({'item': props.location.state.menu[0].item, 'qty':1})
    // @ED these are the time blocks being passed in as a [{block:'1:00-2:00 PM'}]
    console.log('Blocks: ', props.location.state.time_blocks);

    // Set this boolean to indicate to system to concatenate this order to an existing one.
    setAdditionalOrder(props.location.state.additionalOrder)
  }, [props]); 

/**old code for the order spinnners */

  // const updateOrder = (spinnerState) => {
  //   // console.log(spinnerState)
  //   order[spinnerState.item] = spinnerState.clicks
  // }

  const updateOrder = (event) => {
    // console.log(spinnerState)
    
    setOrder([{'item': event.target.value, 'qty':1}])
    //console.log('Updated order: ', order)
  }

  const redirect = () =>{
        // console.log(order);
        //let orderData = {}
        // let finalOrder = []
        // let lineItems = Object.entries(order);
        // lineItems.forEach( lineItem => {
        //   finalOrder.push({item:lineItem[0],qty:lineItem[1]})
        // })


        // console.log('finalOrder: ', finalOrder)
        // orderData.student_id = props.location.state.student.student_email;
        // orderData.event_id = props.location.state.eventID;
        // orderData.order = order;
        // orderData.status = 'placed'

        let orderData = {
          student_id: props.location.state.student.student_email,
          event_id: props.location.state.eventID,
          order: order,
          status: 'placed',
          additionalOrder: additionalOrder // This boolean will indicate to system that this order should be concatenated to existing order.
        }


        //@Ed you need to populate this pickup field with the dropdown menu. 
        orderData.pickup = timeSelect

        console.log(orderData)

        orderServices.placeOrder(orderData).then(success => {
              if(success)
              {
                props.history.push('/completed-order')
                //props.history.push('/survey', [props.location.state.student ]);
              }
        }) 

        //axios api call
        // if(orderData.pickup != 'none')
        // {
        //    orderServices.placeOrder(orderData).then(success => {
        //     if(success)
        //     {
        //        // props.history.push('/completed-order')
        //       props.history.push('/survey', [props.location.state.student ]);
        //     }
        //   })     
        // }
        // else
        // {
        //   alert("Cannot place empty order")
        // }
       
  }

  const redirectExistingOrder = () => {
    let orderData = {
      student_id: props.location.state.student.student_email,
      event_id: props.location.state.eventID,
      order: order,
      status: 'placed',
      additionalOrder: additionalOrder
    }

    orderData.pickup = timeSelect

    console.log(orderData)

    orderServices.placeOrder(orderData).then(success => {
          if(success)
          {
            props.history.push('/completed-order')
            //props.history.push('/survey', [props.location.state.student ]);
          }
    })
  }

  const updateTimeBlock = (event) => {
    event.preventDefault();
    updateTimeSelect(event.target.value)
  }

  useEffect(() => {
    const data = {
      event_id: props.location.state.eventID,
      student_id: props.location.state.student.student_email
    }

    // For Placed Orders
    Axios.post('/admin/getPlacedOrders', data).then(response => {
        setNumPlacedOrders(response.data.count)
    }).catch(error => {
        console.log("Error occurred in adminEvent's useEffect to get num of placed, ready, and completed orders: ", error)
    })

    // For Ready Orders
    Axios.post('/admin/getReadyOrders', data).then(response => {
        setNumReadyOrders(response.data.count)
    }).catch(error => {
        console.log("Error occurred in adminEvent's useEffect to get num of placed, ready, and completed orders: ", error)
    })

    // For Completed Orders
    Axios.post('/admin/getCompletedOrders', data).then(response => {
        setNumCompletedOrders(response.data.count)
    }).catch(error => {
        console.log("Error occurred in adminEvent's useEffect to get num of placed, ready, and completed orders: ", error)
    })
  }, [])

  const checkForAdditionalOrder = () => {
    if(additionalOrder){
      return true
    }
    else{
      return false
    }
  }

  return (
    <div className='place-order'>
      <div className='header'>
        <img src={logo} alt='logo' className='main-logo'></img>
      </div>

      {additionalOrder ? <><h3 className='text-centered padding'>Choose one package from the following options for your family member</h3><h4 className='text-centered padding'>This will be added onto your existing order</h4></> : <h3 className='text-centered padding'>Choose one package from the following options</h3> }
      
      <div className='centered-container'>
        {/* <div className='spinner-container'>
          { 
          menu.map((line) => 
                      (
                          <InputSpinner item={line.item} maxQty={line.qty} update={updateOrder}></InputSpinner>   
                      )
            )}
        </div> */}

        <div className='package-container'>
          <div className='time-select'>
            <select onChange={updateOrder} name='timeSelect'>
              { menu.map((line) => <option  value={line.item}>{line.item}</option>) }
            </select>
          </div>   
        </div>
      </div>


      { checkForAdditionalOrder() ? console.log("Time blocks will be hidden as student already has an existing order to this event. Current order will be concatenated to the existing one.") :
      <>
        <h3 className='text-centered padding'>Select a Pickup Time</h3> 
        <div className='centered-container'>
          <div className='package-container'>
            <div className='time-select'>
              <select onChange={updateTimeBlock} name='timeSelect'>
                <option  value='none'>None</option>
                {
                  timeBlocks.map(time => (<option  value={time.block}>{time.block}</option>))
                }
              </select>
            </div>
          </div>
        </div>
      </>
      }

      <div className='submit-place-order'>
        <LoopButton redirect={redirect} text={'Submit'}></LoopButton>
      </div>
      
    </div>
  )
}

export default PlaceOrder