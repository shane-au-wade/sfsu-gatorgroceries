import React, {useState} from 'react'
import dropDownIcon from '../../icons/arrow_drop_down-24px.svg';
import gg_logo from '../../../public/images/logo.png';
import checkIcon from '../../icons/check_circle-24px.svg';

const Order = (props) => {

    const [order] = useState(props.info)
    const [showMenu, setShowMenu] = useState('no_menu');

    const handlePrint = (event) => {
        event.preventDefault()
        console.log('printing')
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

    const renderButton = () => {
        let retVal = ''

        switch(order.status)
        {
            case 'placed':
                retVal = <button className='order-button print'>Print</button>
                break;
            case 'ready':
                retVal = <button className='order-button ready'><img src={checkIcon}></img></button>
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
                        <div className=' one-third'>
                            <span>
                                <img src={dropDownIcon} className='dropDownIcon' alt='dropDownIcon'></img>
                            </span>
                            <span>
                            {order.first_name + " " + order.last_name}
                            </span>
                        </div>
                        <div className=''><span>{order.status}</span> </div>
                        <div className=''>{renderButton()}</div>
                   </div>
                   
                    {/* <p className='menu' onClickCapture={handleOrderClick}>
                    <img src={dropDownIcon} className='dropDownIcon' alt='dropDownIcon'></img>
                    Order
                    </p>

                    <div className='menu' className={showMenu}>
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
                    </div>

                    <div className='text-centered checkin'> 
                            <button onClickCapture={handlePrint}>
                                Print
                            </button>
                    </div> */}
        </div>
        )
};

export default Order