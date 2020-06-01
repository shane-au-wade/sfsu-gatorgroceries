import React from 'react';
import './style/confirmOrder.css'
import logo from '../../images/logo.png'
import completedLogo from '../../images/completed-order.png'
import checkEmail from '../../images/check_email.svg'

const CompletedOrder = (props) => {

  console.log('order confirmed props', props)

  // use the use effect to query to DB to ensure that the order
  // is valid and check if it has already been confirmed. 

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
      <p> Click the button below to confirm your order </p>
      <div className='submit-place-order'>
                <button type='submit' id='place-order-submit' onClick={handleSubmit}>Confirm Order</button>
            </div>
            
       </div>
      </div>
            
     
  )
}

export default CompletedOrder