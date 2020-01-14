import React from 'react'
import {Link} from 'react-router-dom'

import './adminAccounts.css'

import editIcon from '../../icons/edit-24px.svg';


const TableRow = (props) => {
    
    return(
        <tr>
                <td>{props.userName}</td>
                <td>{props.userType}</td> 
                <td className={props.editIcon}>
                <img src={editIcon} className='editIcon'></img>
                </td>
        </tr>
    )};

export default TableRow