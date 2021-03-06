import React from 'react'
import AdminHeader from '../adminHeader/adminHeader.jsx'
import '../events/style/adminEvents.css'
import AdminEvent from '../adminEvent/adminEvent.jsx'

const AdminPreviewEvent = (props) => {

    const renderEvent = () => {
        if(props.location.state != null)
        {
            return (
                <AdminEvent
                date={props.location.state.date}
                time={props.location.state.time}
                name={props.location.state.name}
                location={props.location.state.location}
                menu={props.location.state.menu}
                time_blocks={props.location.state.time_blocks}
                preview={true}
                history={props.history}
                ></AdminEvent>
            )
        }
    }

return (
    <div className='adminEvents'>
        <AdminHeader selected='Create Event' history={props.history}></AdminHeader>
        <div className='AdminContentArea'>
            <h3 className='text-centered padded'>Preview Event</h3> 
            <div className='events-container'>
                {console.log('props', props)}
    
                {renderEvent()}
                
            </div>
        </div>
    </div>
)};

export default AdminPreviewEvent  