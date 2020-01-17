import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import AdminHeader from '../adminHeader/adminHeader.jsx'
import './AdminCheckin.css'

const AdminCheckin = () => {

    // const [showUsersTable, setUsersTable] = useState(true);
    // const [showCreateUser, setCreateUser] = useState(false);

    const handlePrint = (event) => {
        console.log('printing')
        window.open('/admin/receipt'); 
        window.focus();
        // handle.blur();
    }

return (
    <div className='adminCheckin'>
    <AdminHeader selected='Events' username='Admin T.'></AdminHeader>
        <div className='AdminContentArea'>
        <h3 className='text-centered padded'>Checkin</h3>
            <div className='checkin-div'>
            
            {/* this div will contain the search feature of the checkin. 
            users will input gator groceries ID's that are associated with their order */}
            <div>
                <form>
                    <input type='text' autoComplete='off'></input>
                </form>
                <input type='button' value='Find Order'></input>
            </div>

            {/* this will be the order tile that will pop up after an order is found
            it will also indicate if there is not order at all */}
            <div>
                <Link onClickCapture={handlePrint}>
                    <button>
                        print
                    </button>
                </Link>
            </div>
           

            </div>
        </div>
    </div>
)};

export default AdminCheckin