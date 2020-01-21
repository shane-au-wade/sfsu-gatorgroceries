import React from 'react'
import styled from 'styled-components'
import LogoHeader from '../LogoHeader'
import Schedule from './Schedule'
import CreateOrder from './CreateOrder'
import AboutMe from './AboutMe'

const PageWrapper = styled.div`
  text-align: center;
  margin: 0 auto;
`

const LandingPage = () => {
  return (
    <PageWrapper>
      <LogoHeader />
      <Schedule />
      <CreateOrder />
      <AboutMe />
    </PageWrapper>
  )
}

export default LandingPage  