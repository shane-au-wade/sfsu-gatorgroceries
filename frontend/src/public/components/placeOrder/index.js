import React, { useState, useEffect } from 'react';
import './place-order.css'
import logo from '../../images/logo.png'
import InputSpinner from '../inputSpinner/inputSpinner.jsx'

import orderServices from '../../services/placeOrder.js'


const PlaceOrder = () => {

  const [menu, setMenu] = useState([]);

  useEffect(() => {

    orderServices.getActiveEvents().then((events) => {
      console.log(events)
      console.log(events[0].menu)

      setMenu(events[0].menu)

    })



  }, []); 
    
  

  return (

    <div className='place-order'>
      <div className='header'>
      <img src={logo} alt='logo' className='main-logo'></img>
      </div>
      
         <h3 className='text-centered padding'>Choose from the following items</h3> 
      <div className='centered-container'>

        <div className='spinner-container'>
          
           {
             
             //event.menu.map(line => 
              // <InputSpinner item={line.item} maxQty={line.qty}><InputSpinner>)


              menu.map((line) => 
               (
                 // your code here
                 // understand the map below and change out the divs for InputSpinners
                  <div key={line.item} className='menuLine '>
                      <InputSpinner item={line.item} maxQty={line.qty}> </InputSpinner>
                  </div>
                  
               )
              )
           }
        </div>
           
      </div>
             <div className='submit-place-order'>
                <button type='submit' id='place-order-submit'>Submit</button>
            </div>
      </div>
    
  )

}

export default PlaceOrder