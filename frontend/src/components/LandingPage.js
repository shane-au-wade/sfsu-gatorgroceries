import React from 'react'
import Food from '../images/food.png'
import {Link} from 'react-router-dom'
import LogoHeader from './LogoHeader'

const LandingPage = () => {
  return (
    <div className='page-wrapper'>
      <LogoHeader />
      <div className='schedule-wrapper'>
        <h2>WEEKLY FOOD DISTRIBUTION</h2>
        Every Monday <br />
        12:30 pm - 3:00 pm <br />
        Annex I <br />
        <h2>EMERGRENCY MEALS & SNACKS</h2>
        Every Wednesday & Thursday <br />
        1:00 pm - 6:00 pm <br />
        Cesar Chavez Student Center <br />
        Recreation & Dining Level
      </div>
      <div className='create-order-wrapper'>
        <img src={Food} className='logo' alt='food' />
        <Link to='signin'><button className='app-button'>Create Order</button></Link>
      </div>
      <div className='about-us-wrapper'>
        <h2>What's Gator Groceries?</h2>
        <br />
        Gator Groceries is a free service provided by the associated students 
        in partnership with the SF/Marin Foodbank for students who are experiencing 
        food insecurity. We have a weekly distribution every Monday in Annex 1 - this 
        is our main day and you can expect to get up to a weeks worth of food. We also 
        have two emergency food days on Wednesday and Thursday on the bottom floor of 
        the Cesar Chavez Student Center, these emergency food days are supplementary 
        only with limited supplies. We are not open during holidays or school breaks. <br />
        <br />
        <h2>Other Food Resources</h2>
        <br />
        The San Francisco Bay area has lots of amazing resources for people who are 
        experiencing food insecurity. Pictured on the right is a flyer for a new pantry 
        opening near campus. We highly recommend students check it out. For other resources 
        please check out the SF/Marin online food locator here: https://www.sfmfoodbank.org/find-food/ 
        This online tool has access to over 270 food pantries in the SF/Marin area. There 
        are also resources on this web page to help secure other sources of food such 
        as sign-up assistance for SNAP (EBT food stamps).
      </div>
    </div>
  )
}

export default LandingPage  