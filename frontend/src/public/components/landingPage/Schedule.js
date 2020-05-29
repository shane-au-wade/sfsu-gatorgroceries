import React from 'react'
import styled from 'styled-components'

const SheduleWrapper = styled.div`
  font-size: 18px;
  background-color: #F3F3F3;
  text-align: center;
  padding-bottom: 30px;
  margin: 0 auto
`

const Header = styled.h2`
  padding-top: 30px;
  font-size: 20px;
  font-weight: 400;
`

const Schedule = () => {
  return (
    <SheduleWrapper>
        <Header><strong>WEEKLY FOOD DISTRIBUTION</strong></Header>
        Every Wednesdays and Thursdays <br />
        11:00 am - 01:00 pm <br />
        SFSU, Cesar Chavez Building <br />
    </SheduleWrapper>
  )
}

export default Schedule