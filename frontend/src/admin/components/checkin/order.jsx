import React, {useState} from 'react'
import dropDownIcon from '../../icons/arrow_drop_down-24px.svg';
import gg_logo from '../../../public/images/logo.png';
import checkIcon from '../../icons/check_circle-24px.svg';

const Order = (props) => {

    const [order, setOrder] = useState(props.info)
    const [showMenu, setShowMenu] = useState('no_menu');

    const handlePrint = (event) => {
        event.preventDefault()
        console.log('printing')

        //axios call to update the orders state

        props.history.push({
            pathname: '/admin/receipt',
            target: '_blank',
            state: {
                email: order.student_id,
                order: order.order,
                logo: gg_logo
            }
          })
        // handle.blur();
    }

    const handleOrderClick = () => {
        if(showMenu === 'no_menu')
        {
            setShowMenu('')
        }
        else
        {
            setShowMenu('no_menu')
        }
    }

    const handleReadyClick = () => {
        let tempOrder = JSON.parse(JSON.stringify(order))
        tempOrder.status = 'complete';
        setOrder(tempOrder);
    }

    const renderButton = () => {
        let retVal = ''

        switch(order.status)
        {
            case 'placed':
                retVal = <button onClickCapture={handlePrint} className='order-button print'>Print</button>
                break;
            case 'ready':
                retVal = <button onClickCapture={handleReadyClick} className='order-button ready'><img src={checkIcon}></img></button>
                break;
            case 'complete':
                retVal = <button className='order-button complete'><img src={checkIcon}></img></button>
                break;
            default:
                console.log('error in button render in order.jsx')
                break;
        }
        return retVal;
    }

  
return (
    <div className='order-div'>
                    
                   {/* <p className='info'>Order ID:</p>  */}
                   <div className='flex-row'>
                        <div className='name'>
                            <span onClickCapture={handleOrderClick}>
                                <img src={dropDownIcon} className='dropDownIcon' alt='dropDownIcon'></img>
                            </span>
                            <span className='orderName'>
                            {order.first_name + " " + order.last_name}
                            </span>
                        </div>
                        <div className='status'><span>{order.status}</span> </div>
                        <div className=''>{renderButton()}</div>
                   </div>
                   

                    <div className={showMenu + ' dropDown'}>
                        <p className='email'>{order.student_id}</p>
                        <hr></hr>
                        <p className='order'>Order</p>
                        <span className='menuHeader'><u>Item</u></span> <span><u>Max Qty</u></span>
                        {
                        order.order.map(
                            line => 
                                    <div key={line.item} className='menuLine '>
                                        <div className='item'>
                                            <span>{line.item}</span>
                                        </div> 
                                        <span>{line.qty}</span>
                                    </div>  
                            )
                        }

                        <div className='flex-row bottom-buttons'>
                            <div>
                                <button className='order-button print'>Print</button>
                            </div>
                            <div className=''>
                                <button className='order-button ready'><img src={checkIcon}></img></button>
                            </div>
                            <div className=''>
                                <button className='order-button complete'><img src={checkIcon}></img></button>
                            </div>
                        </div>

                    </div>

        </div>
        )
};

export default Order