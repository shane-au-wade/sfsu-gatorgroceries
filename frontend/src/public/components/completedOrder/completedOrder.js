import React, { useState, useEffect } from 'react';
import './completedOrder.css'
import logo from '../../images/logo.png'
import completedLogo from '../../images/completed-order.png'
import {withRouter} from 'react-router-dom'


const CompletedOrder = (props) => {

  
  const redirect = () =>{
    props.history.push('/');
  }


  return (

    <div className='completed-order'>
      <div className='header'>
      <img src={logo} alt='logo' className='main-logo'></img>
      </div>

      <div className='spacer'></div>
  
      <div className='centered-container'>
        
        <div className='order-completed'>
        <img src={completedLogo} alt='completedLogo' className ='completed-order'></img>

            <div className='completed-msg'>
                <p>Order Completed</p>
                <br></br>
                <br></br>
                <p>Please Check In</p>
            </div>

            <div className='check-in'>
                
            </div>
        
       </div>
       

      </div>
             <div className='submit-place-order'>
                <button type='submit' id='place-order-submit' onClick={redirect}>Go Home</button>
            </div>
      </div>
    
  )

}

export default CompletedOrder