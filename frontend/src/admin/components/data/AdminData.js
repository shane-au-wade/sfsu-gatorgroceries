import React from 'react'
import AdminHeader from '../adminHeader/adminHeader.jsx'
import './style/AdminData.css';
import Graph from './graph.jsx'

const AdminData = (props) => {
return (
    <div className='adminData'>
    <AdminHeader selected='Data' history={props.history}></AdminHeader>
        <div className='AdminContentArea'>
        <h3 className='text-centered padded'>Data</h3>
            <div className='centered-container'>
                <p>This is a dummy graph</p>
                <Graph></Graph>
                <p>
                    The goal of the data page is to visualize, in real time, data collected from the weekly events.
                    This data will hopefully allow the Administration to make better business decisions. 
                </p>
                <br></br>
            </div>
        </div>
    </div> 
)};

export default AdminData 