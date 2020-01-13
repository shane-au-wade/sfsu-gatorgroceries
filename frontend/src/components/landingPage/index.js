import React from 'react'
import styled from 'styled-components'
import LogoHeader from '../LogoHeader'
import Schedule from './Schedule'
import CreateOrderButton from './CreateOrder'
import AboutMe from './AboutMe'

const PageWrapper = styled.div`
  text-align: center;
  max-width: 750px;
`

const LandingPage = () => {
  return (
    <PageWrapper>
      <LogoHeader />
      <Schedule />
      <CreateOrderButton />
      <AboutMe />
    </PageWrapper>
  )
}

export default LandingPage  