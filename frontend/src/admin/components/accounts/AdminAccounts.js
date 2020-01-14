import React from 'react'
import {Link} from 'react-router-dom'
import AdminHeader from '../adminHeader/adminHeader.jsx'

import './adminAccounts.css'

import editIcon from '../../icons/edit-24px.svg';

const AdminAccounts = () => {
return (
    <div className='adminAccounts'>
    <AdminHeader selected='Accounts' username='Admin T.'></AdminHeader>
        <div className='AdminContentArea'>
        <h3 className='text-centered padded'>Users</h3>
        <table>
            <tr>
                <th>Name</th>
                <th>Type</th>
            </tr>
            <tr>
                <td>Horace T.</td>
                <td>Sys Admin</td>
               
            </tr>
            <tr>
                <td>Shane W.</td>
                <td>Dev</td> 
                <td>
                <img src={editIcon} className='editIcon'></img>
                </td>
            </tr>
            <tr>
                <td>Shane W.</td>
                <td>Dev</td> 
                <td>
                <img src={editIcon} className='editIcon'></img>
                </td>
            </tr>
            <tr>
                <td>Shane W.</td>
                <td>Dev</td> 
                <td>
                <img src={editIcon} className='editIcon'></img>
                </td>
            </tr>
            <tr>
                <td>Shane W.</td>
                <td>Dev</td> 
                <td>
                <img src={editIcon} className='editIcon'></img>
                </td>
            </tr>
            <tr>
                <td>Shane W.</td>
                <td>Dev</td> 
                <td>
                <img src={editIcon} className='editIcon'></img>
                </td>
            </tr>
            <tr>
                <td>Shane W.</td>
                <td>Dev</td> 
                <td>
                <img src={editIcon} className='editIcon'></img>
                </td>
            </tr>
            <tr>
                <td>Shane W.</td>
                <td>Dev</td> 
                <td>
                <img src={editIcon} className='editIcon'></img>
                </td>
            </tr>
            <tr>
                <td>Shane W.</td>
                <td>Dev</td> 
                <td>
                <img src={editIcon} className='editIcon'></img>
                </td>
            </tr>
            <tr>
                <td>Shane W.</td>
                <td>Dev</td> 
                <td>
                <img src={editIcon} className='editIcon'></img>
                </td>
            </tr>
            <tr>
                <td>Shane W.</td>
                <td>Dev</td> 
                <td>
                <img src={editIcon} className='editIcon'></img>
                </td>
            </tr>
            <tr>
                <td>Shane W.</td>
                <td>Dev</td> 
                <td>
                <img src={editIcon} className='editIcon'></img>
                </td>
            </tr>
            <tr>
                <td>Shane W.</td>
                <td>Dev</td> 
                <td>
                <img src={editIcon} className='editIcon'></img>
                </td>
            </tr>
            <tr>
                <td>Shane W.</td>
                <td>Dev</td> 
                <td>
                <img src={editIcon} className='editIcon'></img>
                </td>
            </tr>
            <tr>
                <td>Shane W.</td>
                <td>Dev</td> 
                <td>
                <img src={editIcon} className='editIcon'></img>
                </td>
            </tr>
            <tr>
                <td>Shane W.</td>
                <td>Dev</td> 
                <td>
                <img src={editIcon} className='editIcon'></img>
                </td>
            </tr>
            <tr>
                <td>Shane W.</td>
                <td>Dev</td> 
                <td>
                <img src={editIcon} className='editIcon'></img>
                </td>
            </tr>
            <tr>
                <td>Shane W.</td>
                <td>Dev</td> 
                <td>
                <img src={editIcon} className='editIcon'></img>
                </td>
            </tr>
            <tr>
                <td>Shane W.</td>
                <td>Dev</td> 
                <td>
                <img src={editIcon} className='editIcon'></img>
                </td>
            </tr>
            <tr>
                <td>Shane W.</td>
                <td>Dev</td> 
                <td>
                <img src={editIcon} className='editIcon'></img>
                </td>
            </tr>
            <tr>
                <td>Shane W.</td>
                <td>Dev</td> 
                <td>
                <img src={editIcon} className='editIcon'></img>
                </td>
            </tr>
            
            </table>

            <p className='text-centered checkin'>
                <button>
                    Create 
                </button>
            </p>  

        </div>
    </div>
)};

export default AdminAccounts 