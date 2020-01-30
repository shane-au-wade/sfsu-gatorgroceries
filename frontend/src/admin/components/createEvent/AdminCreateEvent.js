import React, { Component } from 'react';
import AdminHeader from '../adminHeader/adminHeader.jsx'
import './style/Admin-create-event-style.css'
import addItem from '../../icons/add_circle_outline-24px.svg'
import dropDownIcon from '../../icons/arrow_drop_down-24px.svg';
import {Link} from 'react-router-dom'

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
              time_blocks: ''
            },
            counter: 0
        }

        this.state = initState;
      }

      componentDidMount() {
        let updatedState = this.state;
        updatedState.lineItem.item = document.getElementById('Item');
        updatedState.lineItem.qty = document.getElementById('Max');
        this.setState(updatedState);
      }
      
      generateTimeBlocks = (obj) => {
        let startArr =  obj.event.startTime.split(':');
        let endArr =  obj.event.endTime.split(':');
        let start = new Date(2020, 0, 1, startArr[0], startArr[1], 0, 0)
        let end = new Date(2020, 0, 1, endArr[0], endArr[1], 0, 0)
        let blocks = []
        let startStr = '';
        let endStr = ''
        do
        { 
          // extract and save the start time
          // increment the start 
          // concat the times and push on blocks
          startStr = start.getHours() + ':' + start.getMinutes();
          if(start.getHours() + 1 > 12)
          {
            start.setHours(1)
          }
          else
          {
            start.setHours(start.getHours() + 1);
          }

          if(start.getHours() === end.getHours() && start.getMinutes() > end.getMinutes())
          {
            endStr = start.getHours() + ':' + end.getMinutes();
          }
          else
          {
             endStr = start.getHours() + ':' + start.getMinutes();
          }

          blocks.push({block:startStr.padEnd(4,'0') + '-' + endStr.padEnd(4,'0') + ' ' + obj.event.startTP})

        } while (start.getHours() < end.getHours())

        console.log('time blocks', blocks)
        return blocks;
      }

      handleChange = (evt) => {
        evt.preventDefault();
        console.log('EVENT NAME: ', evt.target.name);
        let updatedState = this.state;
        if(evt.target.name === 'item') 
        {
          updatedState.event.menu[updatedState.counter].item = evt.target.value;
        }
        else if(evt.target.name === 'qty')
        {
          updatedState.event.menu[updatedState.counter].qty = evt.target.value;
        }
        else
        {
          updatedState.event[evt.target.name] = evt.target.value;
        }

        if(updatedState.event.startTime !== '' && updatedState.event.endTime !== '') // if the start and end times are populated
        {
          updatedState.event.time_blocks = this.generateTimeBlocks(updatedState);
          this.setState(updatedState)
        }
        else{
          console.log(updatedState.event)
          this.setState(updatedState)
        }
         
      }
  
      handleAdd = (evt) => {
            console.log('handling add')
            evt.preventDefault();    

          if( this.state.lineItem.item.value !== '' && this.state.lineItem.qty.value !== '')
          {
            let updatedState = this.state;
           updatedState.menu.push(
              {item:this.state.lineItem.item.value, qty:this.state.lineItem.qty.value}
            )
            updatedState.lineItem.item.value = '';
            updatedState.lineItem.qty.value = '';
            updatedState.counter = updatedState.counter + 1;
            updatedState.event.menu.push({});
            this.setState(updatedState);
            console.log('state: ', this.state)
          }
        }
  
        handleForm = (evt) => {
          evt.preventDefault()
          // const EventObject = {eventTitle, location,startDate,startTime,endDate,endTime,item,maxQty}
          
          console.log(this.state.event)
        }

  render() { 
    return (  
      <div className='AdminCreateEvents'>
      <AdminHeader selected='Create Event' username={this.props.location.state.user_name} history={this.props.history}></AdminHeader>
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
                        <select form='eventForm' name='startTP' className='formLocation'>
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
                        <select form='eventForm' name='endTP' className='formLocation'>
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
                          {/* this code is for the add and image feature */}
                            {/* <div>
                              <button>
                              <img src={addImage} alt="Logo" className='image-size' />
                              </button>
                            </div> */}

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
                          <Link to={{
                              pathname: '/admin/preview-event',
                              state: {
                                date: this.state.event.startDate,
                                time: this.state.event.startTime + ' ' + this.state.event.startTP + ' - ' + this.state.event.endTime + ' ' + this.state.event.endTP,
                                name: this.state.event.name,
                                location: this.state.event.location,
                                menu:this.state.event.menu,
                                time_blocks: this.state.event.time_blocks,
                                user_name: this.props.location.state.user_name
                              } 
                          }} >
                            <button type='text'>Preview</button>
                           </Link>
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
