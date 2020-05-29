import React from 'react'
import styled from 'styled-components'

const AboutUs = styled.div`
  font-size: 18px;
  padding: 30px 15px;
  max-width: 750px;
  margin: 0 auto
`

const Header = styled.h2`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 10px;
`

const AboutMe = () => {
  return (
    <AboutUs>
      <Header><strong>This is a SFSU only program. Please make sure to have your SFSU email ready.</strong></Header>
      <Header>What's Gator Groceries?</Header>
      <br />
      Gator Groceries is a free service provided by the associated students 
      in partnership with the SF/Marin Foodbank for students who are experiencing 
      food insecurity. We have a weekly distribution every Monday in Annex 1 - this 
      is our main day and you can expect to get up to a weeks worth of food. We also 
      have two emergency food days on Wednesday and Thursday on the bottom floor of 
      the Cesar Chavez Student Center, these emergency food days are supplementary 
      only with limited supplies. We are not open during holidays or school breaks. <br />
      <br />
     <Header>Other Food Resources</Header>
     <br />
      The San Francisco Bay area has lots of amazing resources for people who are 
      experiencing food insecurity. Pictured on the right is a flyer for a new pantry 
      opening near campus. We highly recommend students check it out. For other resources 
      please check out the SF/Marin online food locator here: https://www.sfmfoodbank.org/find-food/ 
      This online tool has access to over 270 food pantries in the SF/Marin area. There 
      are also resources on this web page to help secure other sources of food such 
      as sign-up assistance for SNAP (EBT food stamps).
    </AboutUs>
  )
}

export default AboutMe