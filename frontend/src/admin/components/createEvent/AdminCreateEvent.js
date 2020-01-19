import React, {useState} from 'react'
import AdminHeader from '../adminHeader/adminHeader.jsx'
import './Admin-create-event-style.css'
import addImage from '../../../public/images/add_image.png'
import addItem from '../../../public/images/add_item.png'

const AdminCreateEvent = () => {
   
    }
    
  let menuDivs = [];

    const [eventTitle, setEventTitle] = useState('')
    const [location, setLocation] = useState('')
    const [startDate, setStartDate] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endDate, setEndDate] = useState('')
    const [endTime, setEndTime] = useState('')
    const [item, setItem] = useState('')
    const [maxQty, setMaxQty] = useState('')
    // const [menuJson, setMenuJson] = useState([]);

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
      const handleItem = (event) =>{
          setItem(event.target.value)
      }
      const handleMaxQty = (event) =>{
          setMaxQty(event.target.value)
      }

      const handleAdd = (event) => {
          console.log('handling add');
                  
          menuDivs.push(
            <div>
              <span>testing</span>
            </div>
          )
        
          console.log(menuDivs)
          setMaxQty('');
          setItem('');   
      }

      const handleForm = (event) => {
        event.preventDefault()
        const EventObject = {eventTitle, location,startDate,startTime,endDate,endTime,item,maxQty}
    
        console.log(EventObject)
      }

return (
    <div className='AdminCreateEvents'>
        <AdminHeader selected='Create Event' username='Admin T.'></AdminHeader>
        <div className='AdminContentArea'>
        <h3 className='text-centered padded'>Create Event</h3> 
              <div className='centered-container'>
                <form onSubmit={handleForm}>

                    <div className='formEntry'>
                      <label for='eventTitle'>Event Title </label>
                      <input type='text' name="event title" id='eventTitle' value={eventTitle} onChange={handleEventTitleChange} data-check="{&quot;max_length&quot;:{&quot;args&quot;:[255],&quot;when&quot;:&quot;submit&quot;}}" id="id_group-details-name" maxlength="255" name="group-details-name" required />
                    </div> 

                    <div className='formEntry'>
                      <label for='location'>Location</label> 
                      <input type='text' name="location" id ='location' value={location} onChange={handleLocationChange} required />
                    </div>
                      
                    <div className='timeSetup '> 
                        <div>
                        <label for='startDate'>Start Date</label>
                        <input type='text' name="start date" id='startDate' value={startDate} onChange={handleStartDateChange} placeholder='mm/dd/yr' required />
                        </div>

                        <div>
                        <label for='startTime'>Start Time </label>
                        <input type='text' name="start time" id='startTime' value={startTime} onChange={handleStartTimeChange} placeholder='00:00 PM' required />
                        </div>

                        <div>
                        <label for='endDate'>End Date</label>
                        <input type='text' name="end date" id='endDate' value={endDate} onChange={handleEndDateChange} placeholder='mm/dd/yr' required />
                        </div>

                        <div>
                        <label for='endTime'>End Time</label>
                        <input type='text' name="end time" id='endTime' value={endTime} onChange={handleEndTimeChange} placeholder='00:00 PM' required />
                        </div>

                        
                    </div>
                      <div className='timeSetup'>
                        <div className='itemSetup'>
                            <div className='items-label'>
                              <label for='Item'>Item</label>
                            </div>
                              <input type='text' name="item" id='Item' value={item} onChange={handleItem}  required />
                        </div>
                          <div className='max'>
                            <div className='items-label'>
                            <label for='Max'>Max Qty</label>
                            </div>
                              <input type='text' name="item" id='Max' value={maxQty} onChange={handleMaxQty}  required />
                          </div>
                          <div className='buttonSetup'>
                              <div>
                                <button>
                                <img src={addImage} alt="Logo" className='image-size' />
                                </button>
                              </div>

                              <div className='add-item-button'>
<<<<<<< HEAD
                                <button type="button">
=======
                                <button type="button" onClickCapture={handleAdd}>
>>>>>>> d91c548997aa62c4720458ee4b80049778de5cf4
                                <img src={addItem} alt="Logo" className='image-size' />
                                </button>
                              </div>
                          </div>
                        </div>


                       {menuDivs}
                       
                       
                        <div className='preview-publish'>
                          <div>
                             <button type='text'>Preview</button>
                          </div>
                          
                          <div>
                            <button type='text'>Publish</button>
                          </div>

                        </div>
  
                </form>
              </div>
         </div>
    </div>

    
)};

export default AdminCreateEvent 


/**
 *   <header>

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
 */