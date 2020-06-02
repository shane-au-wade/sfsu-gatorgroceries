import React, { useState, useEffect } from 'react';
import './style/place-order.css'
import logo from '../../images/logo.png'
import InputSpinner from '../inputSpinner/inputSpinner.jsx'
import orderServices from '../../services/placeOrder.js'

const PlaceOrder = (props) => {

  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState([])
  const [timeBlocks, setTimeBlocks] = useState([])
  const [timeSelect, updateTimeSelect] = useState('none')

  useEffect(() => {
    // console.log('props placeorder', props)
    setMenu(props.location.state.menu)
    setTimeBlocks(props.location.state.time_blocks)
    order.push({'item': props.location.state.menu[0].item, 'qty':1})
    // @ED these are the time blocks being passed in as a [{block:'1:00-2:00 PM'}]
    console.log('Blocks: ', props.location.state.time_blocks);
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
        let orderData = {}
        // let finalOrder = []
        // let lineItems = Object.entries(order);
        // lineItems.forEach( lineItem => {
        //   finalOrder.push({item:lineItem[0],qty:lineItem[1]})
        // })


        // console.log('finalOrder: ', finalOrder)
        orderData.student_id = props.location.state.student.student_email;
        orderData.event_id = props.location.state.eventID;
        orderData.order = order;
        orderData.status = 'placed'


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

  const updateTimeBlock = (event) => {
    event.preventDefault();
    updateTimeSelect(event.target.value)
  }

  return (
    <div className='place-order'>
      <div className='header'>
      <img src={logo} alt='logo' className='main-logo'></img>
      </div>
         <h3 className='text-centered padding'>Choose One Packge from the following options</h3> 
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

    <h3 className='text-centered padding'>Select a Pickup Time</h3> 
      <div className='centered-container'>
            <div className='time-block-container'>
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

             <div className='submit-place-order'>
                <button type='submit' id='place-order-submit' onClick={redirect}>Submit</button>
            </div>
      </div>
  )
}

export default PlaceOrder