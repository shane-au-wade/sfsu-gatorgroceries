import React, { useState, useEffect } from 'react';
import './style/confirmOrder.css'
import logo from '../../images/logo.png'
import axios from 'axios'
import completedLogo from '../../images/completed-order.png'


const ConfirmOrder = (props) => {

  console.log('order confirmed props', props.match.params)

  // use the use effect to query to DB to ensure that the order
  // is valid and check if it has already been confirmed. 

  const [confirmMsg, setConfirmMsg] = useState('Confirming...')

  useEffect(() => {
   
    //axios query to orders/confirm order with body data, 
    

   axios.post('/orders/confirm-order', props.match.params).then(order => {

    console.log(order.data.confirmed)
      if(order.data.confirmed)
      {
        setConfirmMsg('Your order is confirmed! See you soon')
      }
   }).catch(err => {
     console.log(err)
   })
  
    


  }, [confirmMsg]); 

  const handleSubmit = (event) =>{
    event.preventDefault();

    // rerender a thank you message, 
    // change some color to green


    // Coming soon: An edit 
  }

  return (
    <div className='confirm-order'>
      <div className='header'>
      <img src={logo} alt='logo' className='main-logo'></img>
      </div>
      <div className='spacer'></div>
      <div className='centered-container'>  
      <p> {confirmMsg} </p>
      <p>
      <img src={completedLogo} alt='logo' className='main-logo'></img>
      </p>
            
       </div>
      </div>
            
  )
}

export default ConfirmOrder