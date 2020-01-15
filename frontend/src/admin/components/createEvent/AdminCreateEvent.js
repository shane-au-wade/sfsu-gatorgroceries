import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import AdminHeader from '../adminHeader/adminHeader.jsx'
import './Admin-create-event-style.css'

const AdminCreateEvent = () => {
    const [eventTitle, setEventTitle] = useState('')
    const [location, setLocation] = useState('')
    const [startDate, setStartDate] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endDate, setEndDate] = useState('')
    const [endTime, setEndTime] = useState('')

    const handleEventTitleChange = (event) => {
        setEventTitle(event.target.value)
      }
    
      const handleLocationChange = (event) => {
        setLocation(event.target.value)
      }
      const handleStartDateChange = (event) => {
        setStartDate(event.target.value)
      }

      const handleStartTimeChange = (event) => {
        setStartTime(event.target.value)
      }
      const handleEndDateChange = (event) => {
        setEndDate(event.target.value)
      }
      const handleEndTimeChange = (event) => {
        setEndTime(event.target.value)
      }

    
      const handleForm = (event) => {
        event.preventDefault()
        const LogInObject = {eventTitle, location,startDate,startTime,endDate,endTime}
    
        console.log(LogInObject)
      }

return (
    <div className='admin-create-events'>
        <AdminHeader selected='Create Event' username='Admin T.'></AdminHeader>
        <div className='AdminContentArea'>
            <div className='title-container'>
                <h2>Create Event</h2>
                <button type='text'>Preview</button>
              <button type='text'>Publish</button>
            </div>

          


            <div className='create-event-background'>
            
            <div>

                  <form onSubmit={handleForm}>
                            

                              <div className='form-container'>
                              <label for="event title" >Event Title </label>
                             
                                
                              <input type='text' name="event title" value={eventTitle} onChange={handleEventTitleChange} data-check="{&quot;max_length&quot;:{&quot;args&quot;:[255],&quot;when&quot;:&quot;submit&quot;}}" id="id_group-details-name" maxlength="255" name="group-details-name" required />
                             
                              </div>

                              <div className='form-container'>
                              <label for="location" >Location</label>
                                
                              <input type='text' name="location" value={location} onChange={handleLocationChange} required />
                              
                              </div>

                              <div className='form-container'>
                              <label for="start date" >Start Date</label>
                                
                              <input type='text' name="start date" value={startDate} onChange={handleStartDateChange} required />
                              
                              </div>

                              <div className='start-end-time'>
                              <div className='form-container'>
                              <label for="start time" >Start Time</label>
                                
                              <input type='text' name="start time" value={startTime} onChange={handleStartTimeChange} required />
                              
                              </div>
                              <div className='form-container'>
                              <label for="end date">End Date</label>
                              
                              <input type='text' name="end date" value={endDate} onChange={handleEndDateChange} required />
                              
                              </div>
                              <div className='form-container'>
                              <label for="end time">End Time</label>
                                
                              <input type='text' name="end time" value={endTime} onChange={handleEndTimeChange} required />
                              
                              </div>
                              </div>
                  </form>
                </div>
            </div>
         </div>
         </div>

    
)};

export default AdminCreateEvent 