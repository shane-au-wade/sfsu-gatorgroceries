import React, {useState} from 'react'
import dropDownIcon from '../../icons/arrow_drop_down-24px.svg';

const Order = (props) => {

    const [order] = useState(props.info)
    const [showMenu, setShowMenu] = useState('no_menu');

    const handlePrint = (event) => {
        event.preventDefault()
        console.log('printing')
        window.open('/admin/receipt'); 
        window.focus();
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

  
return (
    <div className='order-div'>
                    
                   <p className='info'>Order ID:</p> 
                    <p>{order.student_id}</p>
                    <p className='menu' onClickCapture={handleOrderClick}>
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
                    </div>
        </div>
        )
};

export default Order