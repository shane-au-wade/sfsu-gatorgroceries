import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import AdminHeader from './adminHeader/adminHeader.jsx'
import '../Admin-create-event-style.css'

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
    <div>
        <AdminHeader selected='Create Event' username='Admin T.'></AdminHeader>
        <div className='AdminContentArea'>
            <div className='title-container'>
                <h2>Create An Event</h2>
            </div>
            <div className='create-event-background'>
                <form>

                </form>

            </div>
        </div>
    </div>
    
)};

export default AdminCreateEvent 