import React, { useState, useEffect } from 'react';
import './style/place-order.css'
import logo from '../../images/logo.png'
import InputSpinner from '../inputSpinner/inputSpinner.jsx'
import orderServices from '../../services/placeOrder.js'
import LoopButton from '../../../shared/loopButton.js'

const PlaceOrder = (props) => {

  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState([])
  const [secondOrder, setSecondOrder] = useState([])
  const [showSecondOrder, setShowSecondOrder] = useState(false)
  const [timeBlocks, setTimeBlocks] = useState([])
  const [timeSelect, updateTimeSelect] = useState('none')

  useEffect(() => {
    // console.log('props placeorder', props)
    setMenu(props.location.state.menu)
    setTimeBlocks(props.location.state.time_blocks)
    order.push({'item': props.location.state.menu[0].item, 'qty':1})
    secondOrder.push({'item': props.location.state.menu[0].item, 'qty':1})
    // @ED these are the time blocks being passed in as a [{block:'1:00-2:00 PM'}]
    console.log('Blocks: ', props.location.state.time_blocks);
  }, [props]); 

/**old code for the order spinnners */

  // const updateOrder = (spinnerState) => {
  //   // console.log(spinnerState)
  //   order[spinnerState.item] = spinnerState.clicks
  // }

  const updateOrder = (event) => {
    // console.log(spinnerState)
    
    setOrder([{'item': event.target.value, 'qty':1}])
    //console.log('Updated order: ', order)
  }

  const updateSecondOrder = (event) => {
    // console.log(spinnerState)
    setSecondOrder([{'item': event.target.value, 'qty':1}])
    //console.log('Updated order: ', order)
  }

  const handleCheckBox = (event) => {
    //console.log('handling checkbox:', event.target.checked)
    setShowSecondOrder(event.target.checked)
  }

  const redirect = () =>{
        // console.log(order);
        let orderData = {}
        // let finalOrder = []
        // let lineItems = Object.entries(order);
        // lineItems.forEach( lineItem => {
        //   finalOrder.push({item:lineItem[0],qty:lineItem[1]})
        // })
    console.log('order:', order)
    console.log('second order:', secondOrder)

        // console.log('finalOrder: ', finalOrder)
        orderData.student_id = props.location.state.student.student_email;
        orderData.event_id = props.location.state.eventID;
        orderData.order = order;
        if(showSecondOrder) {
          orderData.order.push(secondOrder[0])
        }
        orderData.status = 'placed'

        //@Ed you need to populate this pickup field with the dropdown menu. 
        orderData.pickup = timeSelect

        console.log(orderData)

        orderServices.placeOrder(orderData).then(success => {
              if(success)
              {
                props.history.push('/completed-order')
                //props.history.push('/survey', [props.location.state.student ]);
              }
        }) 

        //axios api call
        // if(orderData.pickup != 'none')
        // {
        //    orderServices.placeOrder(orderData).then(success => {
        //     if(success)
        //     {
        //        // props.history.push('/completed-order')
        //       props.history.push('/survey', [props.location.state.student ]);
        //     }
        //   })     
        // }
        // else
        // {
        //   alert("Cannot place empty order")
        // }
       
  }

  const updateTimeBlock = (event) => {
    event.preventDefault();
    updateTimeSelect(event.target.value)
  }

  const renderSecondOrder = () => {
    if(showSecondOrder) {
      return (
        <>
        <h3 className='text-centered'>Their Order</h3>
        <br></br>
          <div className='time-select'>
            <select onChange={updateSecondOrder} name='timeSelect'>
              { menu.map((line) => <option  value={line.item}>{line.item}</option>) }
            </select>
          </div> 
        </>
      )
    } else {
      return <></>
    }
  }

  return (
    <div className='place-order'>
      <div className='header'>
      <img src={logo} alt='logo' className='main-logo'></img>
      </div>
         <h3 className='text-centered padding'>Choose one package from the following options</h3> 
      <div className='centered-container'>
            {/* <div className='spinner-container'>
              { 
              menu.map((line) => 
                          (
                              <InputSpinner item={line.item} maxQty={line.qty} update={updateOrder}></InputSpinner>   
                          )
                )}
            </div> */}

            <div className='package-container'>
              <h3 className='text-centered'>Your Order</h3>
              <br></br>
              <div className='time-select'>
                <select onChange={updateOrder} name='timeSelect'>
                  { menu.map((line) => <option  value={line.item}>{line.item}</option>) }
                </select>
              </div>
              <br></br>
                <h4>
                 If a family member or friend is coming with you, you can place a order for them now by checking this box ➡️
                <input className='checkbox' type="checkbox" onChange={handleCheckBox} name="secondOrder" value="Bike"></input>
                </h4>
              <br></br>
              {renderSecondOrder()}
              
              
                
            </div>
      </div>

    <h3 className='text-centered padding'>Select a Pickup Time</h3> 
      <div className='centered-container'>
            <div className='package-container'>
              <div className='time-select'>
                <select onChange={updateTimeBlock} name='timeSelect'>
                <option  value='none'>None</option>
                  {
                    timeBlocks.map(time => (<option  value={time.block}>{time.block}</option>))
                  }
                </select>
              </div>
                
            </div>
      </div>

             <div className='submit-place-order'>
                <LoopButton redirect={redirect} text={'Submit'}></LoopButton>
            </div>
            <br/>
            <br/>
           
      </div>
  )
}

export default PlaceOrder