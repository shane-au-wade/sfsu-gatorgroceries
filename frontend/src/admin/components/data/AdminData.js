import React from 'react'
import AdminHeader from '../adminHeader/adminHeader.jsx'
import './style/AdminData.css';
import Graph from './graph.jsx'

const AdminData = (props) => {
return (
    <div className='adminData'>
    <AdminHeader selected='Data' username='Admin T.' history={props.history}></AdminHeader>
        <div className='AdminContentArea'>
        <h3 className='text-centered padded'>Data</h3>
            <div className='centered-container'>
                <Graph></Graph>
            </div>
        </div>
    </div> 
)};

export default AdminData 