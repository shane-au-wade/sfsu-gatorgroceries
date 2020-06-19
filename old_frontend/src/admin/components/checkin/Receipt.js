import React, {useEffect} from 'react'

import './style/AdminCheckin.css'

const Receipt = (props) => {

    useEffect(() => { 
        // window.print()
        // setTimeout(function(){
        //     console.log('after');
        //     props.history.goBack()
        // },1000)
        
    }, []);

    const renderOrder = () => {
    return props.order.map(line => 
        <p id='item'>{line.item}<span> x </span><span>{line.qty}</span></p>
        )
    }

return (
             <div className="receipt" id='receipt'>
                    <p>Gator Groceries</p>
                    <br></br>
                    <p className='receiptInfo'>{'ID: ' + props.email}</p>
                    <br></br>
                    <p className='receiptInfo'>{props.firstName + ' ' + props.lastName}</p>
                    <br></br>
                    <p id='receiptInfo'>Order:</p>
                    {
                        renderOrder()
                    }
                    <br></br>
                    {/* <p id='noteInfo'><strong>NOTE:</strong></p>
                    <p id='noteInfo'><em>peanut allergy</em></p> */}
            </div>       
)};

export default Receipt