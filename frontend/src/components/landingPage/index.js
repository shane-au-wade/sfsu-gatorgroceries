import React from 'react'
import LogoHeader from '../LogoHeader'
import Schedule from './Schedule'
import CreateOrderButton from './CreateOrder'
import AboutMe from './AboutMe'

const LandingPage = () => {
  return (
    <div className='page-wrapper'>
      <LogoHeader />
      <Schedule />
      <CreateOrderButton />
      <AboutMe />
    </div>
  )
}

export default LandingPage  