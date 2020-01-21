import React from 'react'
import logo from '../images/logo.png'
import styled from 'styled-components'

const LogoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    background: #C4C4C4;
    height: 200px;
`

const Logo = styled.img`
  margin: 0 auto;
  height: 117px;
  margin-top: 40px;
`

const LogoHeader = () => {
  return (
    <LogoWrapper>
      <Logo src={logo} alt='Gator Groceries logo' />
    </LogoWrapper>
  )
}

export default LogoHeader