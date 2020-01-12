import React from 'react'
import Food from '../../images/food.png'
import {Link} from 'react-router-dom'

const CreateOrderButton = () => {
  return (
    <div className='create-order-wrapper'>
        <img src={Food} className='logo' alt='food' />
        <Link to='signin'><button className='app-button'>Create Order</button></Link>
      </div>
  )
}

export default CreateOrderButton