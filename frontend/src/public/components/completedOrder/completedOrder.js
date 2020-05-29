import React from 'react';
import './style/completedOrder.css'
import logo from '../../images/logo.png'
import completedLogo from '../../images/completed-order.png'
import checkEmail from '../../images/check_email.svg'

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
        {/* <img src={completedLogo} alt='completedLogo' className ='completed-order'></img> */}
            <div className='completed-msg'>
              <p>Order Placed</p>
              <br></br>
              <img src={checkEmail} alt='check_email.svg'></img>
              <br></br>
              <br></br>
              <p>Please Confirm your Order via the link sent to your student email</p>
                {/* <p>Order Placed</p>
                <br></br>
                <br></br>
                <p>Please Confirm your Order via</p>
                <br></br>
                <br></br>
                <p>the link sent to your student email</p> */}
            </div>
            <br></br>
       </div>
      </div>
             <div className='submit-place-order'>
                <button type='submit' id='place-order-submit' onClick={redirect}>Go Home</button>
            </div>
      </div>
  )
}

export default CompletedOrder