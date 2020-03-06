import React from 'react'
import Food from '../../images/food.png'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const CreateOrderWrapper = styled.div`
  text-align: center;
  background-color: #f7f7f7;
  padding-bottom: 25px;
  display: flex;
  flex-direction: column;
`

const FoodImage = styled.img`
  width: 100%;
  max-width: 440px;
  padding: 40px;
  margin: 0 auto;
`

const Button = styled.button`
  font-size: 20px;
  padding: 10px 50px;
  color: rgb(230, 230, 230);
  background-color: #211061;
  border-radius: 11px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0 auto;
`

const CreateOrder = () => {
  return (
    <CreateOrderWrapper>
      <FoodImage src={Food} alt='food' />
      <Link to='signin'>
        <Button className='app-button'>Create Order</Button>
      </Link>
    </CreateOrderWrapper>
  )
}

export default CreateOrder