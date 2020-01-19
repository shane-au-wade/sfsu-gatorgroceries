import React, {useState} from 'react'
import AdminHeader from '../adminHeader/adminHeader.jsx'
import './Admin-create-event-style.css'
import addImage from '../../../public/images/add_image.png'
import addItem from '../../../public/images/add_item.png'

const AdminCreateEvent = () => {
   
    }
    
    const [event, setEvent] = useState({
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: '',
      name: '',
      location: '',
      menu: []
    }) 

    const handleChange = (evt) => {
      console.log(evt.target.name);
      evt.preventDefault();
      event[evt.target.name] = evt.target.value; 
      setEvent(event);
      console.log(event)
    }

    const handleAdd = (event) => {
          console.log('handling add');
                  
          // menuDivs.push(
          //   <div>
          //     <span>testing</span>
          //   </div>
          // )
        
          // console.log(menuDivs)
          // setMaxQty('');
          // setItem('');   
      }

      const handleForm = (event) => {
        event.preventDefault()
        // const EventObject = {eventTitle, location,startDate,startTime,endDate,endTime,item,maxQty}
    
        console.log(event)
      }

return (
    <div className='AdminCreateEvents'>
        <AdminHeader selected='Create Event' username='Admin T.'></AdminHeader>
        <div className='AdminContentArea'>
        <h3 className='text-centered padded'>Create Event</h3> 
              <div className='centered-container'>
                <form  onChange={handleChange} onSubmit={handleForm}>

                    <div className='formEntry'>
                      <label for='eventTitle'>Event Title </label>
                      <input type='text' name="name" id='eventTitle' required />
                    </div> 

                    <div className='formEntry'>
                      <label for='location'>Location</label> 
                      <input type='text' name="location" id ='location' required />
                    </div>
                      
                    <div className='timeSetup '> 
                        <div>
                        <label for='startDate'>Start Date</label>
                        <input type='text' name="startDate" id='startDate' placeholder='mm/dd/yr' required />
                        </div>

                        <div>
                        <label for='startTime'>Start Time </label>
                        <input type='text' name="startTime" id='startTime' placeholder='00:00 PM' required />
                        </div>

                        <div>
                        <label for='endDate'>End Date</label>
                        <input type='text' name="endDate" id='endDate' placeholder='mm/dd/yr' required />
                        </div>

                        <div>
                        <label for='endTime'>End Time</label>
                        <input type='text' name="endTime" id='endTime' placeholder='00:00 PM' required />
                        </div>

                        
                    </div>
                      <div className='timeSetup'>
                        <div className='itemSetup'>
                            <div className='items-label'>
                              <label for='Item'>Item</label>
                            </div>
                              <input type='text' name="item" id='Item' required />
                        </div>
                          <div className='max'>
                            <div className='items-label'>
                            <label for='Max'>Max Qty</label>
                            </div>
                              <input type='text' name="item" id='Max' required />
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


                       {/* {menuDivs} */}
                       
                       
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


