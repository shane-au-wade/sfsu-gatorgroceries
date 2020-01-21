import React, { useState, useEffect } from 'react';
import './place-order.css'
import logo from '../../images/logo.png'
import InputSpinner from '../inputSpinner/inputSpinner.jsx'

import orderServices from '../../services/placeOrder.js'


const PlaceOrder = () => {

  const [menu, setMenu] = useState([]);
  // const clicks = InputSpinner.clicks;
  const [order] = useState({})

  useEffect(() => {

    orderServices.getActiveEvents().then((events) => {
      console.log(events)
      console.log(events[0].menu)

    setMenu(events[0].menu)
    })



  }, []); 

  const updateOrder = (spinnerState) => {
    console.log(spinnerState)
    order[spinnerState.item] = spinnerState.clicks
  }

  const redirect = () =>{
        console.log(order);

        let finalOrder = []

        let lineItems = Object.entries(order);

        lineItems.forEach( lineItem => {
          finalOrder.push({item:lineItem[0],qty:lineItem[1]})
        })

        console.log('finalOrder: ', finalOrder)

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