import React, { useState, useEffect } from 'react';
import './place-order.css'
import logo from '../../images/logo.png'
import InputSpinner from '../inputSpinner/inputSpinner.jsx'

import orderServices from '../../services/placeOrder.js'


const PlaceOrder = (props) => {

  const [menu, setMenu] = useState([]);
  // const clicks = InputSpinner.clicks;
  const [order] = useState({})

  useEffect(() => {

    console.log('props placeorder', props)

    setMenu(props.location.state.menu)

  }, []); 

  const updateOrder = (spinnerState) => {
    console.log(spinnerState)
    order[spinnerState.item] = spinnerState.clicks
  }

  const redirect = () =>{
        console.log(order);

        let orderData = {}
        let finalOrder = []
        let lineItems = Object.entries(order);

        lineItems.forEach( lineItem => {
          finalOrder.push({item:lineItem[0],qty:lineItem[1]})
        })
        console.log('finalOrder: ', finalOrder)

        orderData.student_id = props.location.state.student.student_email;
        orderData.event_id = props.location.state.eventID;
        orderData.order = finalOrder;

        orderServices.placeOrder(orderData).then(data => {

        })

        //make an axios call
  }


  return (

    <div className='place-order'>
      <div className='header'>
      <img src={logo} alt='logo' className='main-logo'></img>
      </div>
      
         <h3 className='text-centered padding'>Choose from the following items</h3> 
      <div className='centered-container'>

        <div className='spinner-container'>
          
           { menu.map((line) => 
      (
        // your code here
        // understand the map below and change out the divs for InputSpinners
        <InputSpinner item={line.item} maxQty={line.qty} update={updateOrder}></InputSpinner>
        
      )
    )}

        </div>

      </div>
             <div className='submit-place-order'>
                <button type='submit' id='place-order-submit' onClick={redirect}>Submit</button>
            </div>
      </div>
    
  )

}

export default PlaceOrder