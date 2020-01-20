import React, { useState } from 'react';
import './place-order.css'
import logo from '../../images/logo.png'


const PlaceOrder = () => {

  return (

    <div className='place-order'>
      <div className='header'>
      <img src={logo} alt='logo' className='main-logo'></img>
      </div>
      
         <h3 className='text-centered padding'>Choose from the following items</h3> 
      <div className='centered-container'>
      
      </div>
    
      </div>
    
  )

}

export default PlaceOrder