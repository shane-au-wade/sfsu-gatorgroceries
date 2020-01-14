import React from 'react'
import styled from 'styled-components'

const SheduleWrapper = styled.div`
  font-size: 18px;
  background-color: #F3F3F3;
  text-align: center;
  padding-bottom: 15px;
`

const Header = styled.h2`
  padding-top: 10px;
  font-size: 20px;
  font-weight: 400;
`

const Schedule = () => {
  return (
    <SheduleWrapper>
        <Header>WEEKLY FOOD DISTRIBUTION</Header>
        Every Monday <br />
        12:30 pm - 3:00 pm <br />
        Annex I <br />
        <Header>EMERGRENCY MEALS & SNACKS</Header>
        Every Wednesday & Thursday <br />
        1:00 pm - 6:00 pm <br />
        Cesar Chavez Student Center <br />
        Recreation & Dining Level
    </SheduleWrapper>
  )
}

export default Schedule