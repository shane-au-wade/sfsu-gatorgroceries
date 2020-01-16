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
    <div className='AdminCreateEvents'>
        <AdminHeader selected='Create Event' username='Admin T.'></AdminHeader>
        <div className='AdminContentArea'>
           
                <header>

                <div className='title-container'>
                <h2>Create Event</h2>
                </div>
                
    

               </header>
            

          


            <div className='create-event-background'>
            
            <div className='form-container'>

                  <form onSubmit={handleForm}>
                            

                           
                              <label for="event title" >Event Title </label>
                             
                                
                              <input type='text' name="event title" value={eventTitle} onChange={handleEventTitleChange} data-check="{&quot;max_length&quot;:{&quot;args&quot;:[255],&quot;when&quot;:&quot;submit&quot;}}" id="id_group-details-name" maxlength="255" name="group-details-name" required />
                             
                            
                              <label for="location" >Location</label>
                                
                              <input type='text' name="location" value={location} onChange={handleLocationChange} required />
                      
            <div className='start-end-time debug'>

                                  
                            <p>
                              <label for="start date" >Starts</label>
                                </p>
                                <p>
                              <input type='text' name="start date" value={startDate} onChange={handleStartDateChange} placeholder='Start Date' required />
                                 </p>
                    
                                <p>
                              <label for="start time" >Start Time</label>
                                </p>
                                <p>
                              <input type='text' name="start time" value={startTime} onChange={handleStartTimeChange} placeholder=' Start Time' required />
                              </p>
                              
                            <p>
                              <label for="end date">Ends</label>
                              </p>
                              <p>
                              <input type='text' name="end date" value={endDate} onChange={handleEndDateChange} placeholder='End Date' required />
                              </p>
                              
                            <p>
                              <label for="end time">End Time</label>
                               </p> 
                               <p>
                              <input type='text' name="end time" value={endTime} onChange={handleEndTimeChange} placeholder='End Time' required />
                              </p>
                             

                              </div>
                            
                  </form>
                </div>
            </div>
         </div>
         </div>

    
)};

export default AdminCreateEvent 