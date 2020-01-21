import React, { Component } from 'react';
import AdminHeader from '../adminHeader/adminHeader.jsx'
import './Admin-create-event-style.css'
import addImage from '../../../public/images/add_image.png'
import addItem from '../../../public/images/add_item.png'
import dropDownIcon from '../../icons/arrow_drop_down-24px.svg';


class AdminCreateEvent extends Component {

      constructor(props) {
        super(props);
        let initState ={
            menu:  [],
            lineItem: {item: '', qty: ''},
            event: {
              startDate: '',
              startTime: '',
              startTP: 'PM',
              endTime: '',
              endTP: 'PM',
              name: '',
              location: '',
              menu: [{}],
            },
            counter: 0
        }

        this.state = initState;
      }


      componentDidMount() {
        this.state.lineItem.item = document.getElementById('Item');
        this.state.lineItem.qty = document.getElementById('Max')
      }
      
      handleChange = (evt) => {
        evt.preventDefault();
        console.log('EVENT NAME: ', evt.target.name);
        if(evt.target.name === 'item') 
        {
          this.state.event.menu[this.state.counter].item = evt.target.value;
        }
        else if(evt.target.name === 'qty')
        {
          this.state.event.menu[this.state.counter].qty = evt.target.value;
        }
        else
        {
          this.state.event[evt.target.name] = evt.target.value;
        }
         console.log(this.state.event)
      }
  
      handleAdd = (evt) => {
            console.log('handling add')
            evt.preventDefault();    
           let updatedState = this.state;
           updatedState.menu.push(
              {item:this.state.lineItem.item.value, qty:this.state.lineItem.qty.value}
            )
            this.state.lineItem.item.value = '';
            this.state.lineItem.qty.value = '';
            updatedState.counter = updatedState.counter + 1;
            updatedState.event.menu.push({});
            this.setState(updatedState);
            console.log('state: ', this.state)
        }
  
    
        handleForm = (evt) => {
          evt.preventDefault()
          // const EventObject = {eventTitle, location,startDate,startTime,endDate,endTime,item,maxQty}
          
          console.log(this.state.event)
        }


  render() { 
    return (  
      <div className='AdminCreateEvents'>
      <AdminHeader selected='Create Event' username='Admin T.'></AdminHeader>
      <div className='AdminContentArea'>
      <h3 className='text-centered padded'>Create Event</h3> 
            <div className='centered-container'>
              <form  id='eventForm' onChange={this.handleChange} onSubmit={this.handleForm}>

                  <div className='formEntry'>
                    <label for='eventTitle'>Event Title </label>
                    <input type='text' name="name" id='eventTitle' autoComplete='off' autoCapitalize='words' autoCorrect='on' required />
                  </div> 

                  <div className='formEntry'>
                    <label for='location'>Location</label> 
                    <input type='text' name="location" id ='location' autoComplete='off' required />
                  </div>
                    
                  <div className='timeSetup '> 
                      <div>
                      <label for='startDate'>Date</label>
                      <input type='text' name="startDate" id='startDate' placeholder='mm/dd/yr' autoComplete='off' required />
                      </div>

                      <div>
                        <p>
                          <label for='startTime'>Start</label>
                        </p>
                      
                        <input type='text' name="startTime" id='startTime' placeholder='00:00' autoComplete='off' required />
                        <select form='eventForm' name='startTP'>
                          <option value='PM'>PM</option>
                          <option value='AM'>AM</option>
                        </select>
                      </div>

                      {/* <div>
                      <label for='endDate'>End Date</label>
                      <input type='text' name="endDate" id='endDate' placeholder='mm/dd/yr' autoComplete='off' required />
                      </div> */}

                      <div>
                        <p>
                          <label for='endTime'>End</label>
                        </p>
                        <input type='text' name="endTime" id='endTime' placeholder='00:00' autoComplete='off' required />
                        <select form='eventForm' name='endTP'>
                          <option  value='PM'>PM</option>
                          <option  value='AM'>AM</option>
                        </select>
                      </div>

                      
                  </div>
                    <div className='itemDivs'>
                      <div className='itemSetup'>
                          <div className='items-label'>
                            <label for='Item'>Item</label>
                          </div>
                            <input type='text' name='item' id='Item' autoComplete='off' />
                      </div>

                     <div className='flexRow'>
                        <div className='max'>
                          <div className='items-label'>
                          <label for='Max'>Max Qty</label>
                          </div>
                            <input type='text' name='qty' id='Max'autoComplete='off'/>
                        </div>
                        <div className='buttonSetup'>
                            <div>
                              <button>
                              <img src={addImage} alt="Logo" className='image-size' />
                              </button>
                            </div>

                            <div className='add-item-button'>
                              <button type="button" onClickCapture={this.handleAdd}>
                              <img src={addItem} alt="Logo" className='image-size' />
                              </button>
                            </div>
                        </div>

                      </div>
                       
                      </div>

                      <p className='menu'>
                      <img src={dropDownIcon} className='dropDownIcon' alt='dropDownIcon'></img>
                      Menu
                      </p>
                      
                      <div id='menu'>
                          <span className='menuHeader'><u>Item</u></span> <span><u>Max Qty</u></span>
                          {
                            this.state.menu.map((line) =>  
                            <div key={line.item} className='menuLine '>
                                <div className='item'>
                                    <span>{line.item}</span>
                                </div> 
                                <span>{line.qty}</span>
                            </div>
                            )
                          }
                      </div>

                      <div className='preview-publish'>
                        <div>
                           <button type='text'>Preview</button>
                        </div>
                        
                      </div>

              </form>
            </div>
       </div>
  </div>
      
    );
  }
}
 
export default AdminCreateEvent;
