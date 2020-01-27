import React, {useEffect} from 'react'

import './style/AdminCheckin.css'

const Receipt = (props) => {

    useEffect(() => { 
        window.print()
        setTimeout(function(){
            console.log('after');
            props.history.goBack()
        },2000)
        
    }, []);

    const renderOrder = () => {
    return props.location.state.order.map(line => 
        <p id='item'>{line.item}<span> x </span><span>{line.qty}</span></p>
        )
    }

return (
        <div className='adminCheckin'>
             <div className="receipt" id='receipt'>
                    <img src={props.location.state.logo} className="logo" alt='GG Logo'></img>
                    <br></br>
                    <p id='receiptInfo'>{'ID: ' + props.location.state.email}</p>
                    <br></br>
                    <p id='receiptInfo'>Order:</p>
                    {
                        renderOrder()
                    }
                    <br></br>
                    {/* <p id='noteInfo'><strong>NOTE:</strong></p>
                    <p id='noteInfo'><em>peanut allergy</em></p> */}
            </div>
        </div>
           
)};

export default Receipt