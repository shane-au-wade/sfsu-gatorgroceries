import React from 'react'
import Food from '../../images/food.png'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';

const CreateOrderWrapper = styled.div`
  text-align: center;
  background-color: #f7f7f7;
  padding-bottom: 25px;
  display: flex;
  flex-direction: column;
`

const FoodImage = styled.img`
  width: 80%;
  max-width: 440px;
  padding: 40px;
  margin: 0 auto;
`

const CreateOrder = () => {
  return (
    <CreateOrderWrapper>
      <FoodImage src={Food} alt='food' />
      <Link to='signin'>
        <Button variant="contained" color="primary"> 
         <p style={{color:'#fff'}}>Create Order</p>
        </Button>
      </Link>
    </CreateOrderWrapper>
  )
}

export default CreateOrder