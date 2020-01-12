import React from 'react'
import Logo from '../images/logo.png'

const LogoHeader = () => {
  return (
    <div className='logo-wrapper'>
      <img src={Logo} className='logo' alt='logo' />
    </div>
  )
}

export default LogoHeader