import React from 'react'
import logo from '../../images/logo.png'
import styled from 'styled-components'

const LogoWrapper = styled.div`
  background-color: #C4C4C4;
  border-radius: 1%;
`

const Logo = styled.img`
  width: 80%;
  margin: 10% 10% 12%;
`

const LogoHeader = () => {
  return (
    <LogoWrapper>
      <Logo src={logo} alt='Gator Groceries logo' />
    </LogoWrapper>
  )
}

export default LogoHeader