import React, {useState, useEffect} from 'react'
import AdminHeader from '../adminHeader/adminHeader.jsx'
import './AdminCheckin.css'

const Receipt = () => {

    // const [showUsersTable, setUsersTable] = useState(true);
    // const [showCreateUser, setCreateUser] = useState(false);

    useEffect(() => {
        console.log('this function has been called')
        
        window.print()
        setTimeout(function(){
            console.log('after');
            window.close();
        },2000)
        
    }, []);

return (
            <div className="receipt" id='receipt'>
                    <img src='Sitelogo.png' className="logo"></img>
                    <p id='receiptInfo'>ID: 918780686</p>
                    <p id='receiptInfo'><strong>Name: Shane</strong></p>
                    <p id='order'><strong>Order:</strong></p>
                    <p id='item'>tuna x 3</p>
                    <p id='item'>beans x 1</p>
                    <p id='item'>celery x 2</p>
                    <p id='item'>apples x 1</p>
                    <p id='item'>crackers x 4</p>
                    <p id='item'>soup x 1</p>
                    <br></br>
                    <p id='noteInfo'><strong>NOTE:</strong></p>
                    <p id='noteInfo'><em>peanut allergy</em></p>
            </div>
)};

export default Receipt