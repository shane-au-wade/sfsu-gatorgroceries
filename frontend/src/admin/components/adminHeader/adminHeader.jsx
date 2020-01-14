import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import './adminHeader.css';
import eventIcon from '../../icons/calendar_today-24px.svg';
import plusIcon from '../../icons/add_circle_outline-24px.svg';
import accountsIcon from '../../icons/people_outline-24px.svg';
import dataIcon from '../../icons/dashboard-24px.svg';
import gg_logo from '../../../public/images/logo.png';
import settingIcon from '../../icons/settings_applications-24px.svg';
import dropDownIcon from '../../icons/arrow_drop_down-24px.svg';

class AdminHeader extends Component {
    
    constructor(props) {
        super(props);

        let initState = {
            event: '',
            createEvent: '',
            accounts: '',
            data: '',
            spacer_1: '',
            spacer_2: '',
            spacer_3: '',
            username: props.username,
            showSettings: 'settingsMenu hide'
        }

        switch(props.selected) {
            case 'Events':
                initState.event = 'selected';
                initState.spacer_1 = 'hidden';
                break;
            case 'Create Event':
                initState.createEvent = 'selected';
                initState.spacer_1 = 'hidden';
                initState.spacer_2 = 'hidden';
                break;
            case 'Accounts':
                initState.accounts = 'selected';
                initState.spacer_2 = 'hidden';
                initState.spacer_3 = 'hidden';
                break;
            case 'Data':
                initState.data = 'selected';
                initState.spacer_3 = 'hidden';
                break;
            default:
                initState.event = 'selected';
                initState.spacer_1 = 'hidden';
        }

        this.state = initState;
      }

    componentDidMount(){
        document.addEventListener("keydown", this.escClick, false);
    }

    settingsClick = () => {
        
        console.log('clicking on settings')
        if(this.state.showSettings === 'settingsMenu')
        {
            this.setState({
                showSettings: 'settingsMenu hide'
             })
        }
        else
        {
            this.setState({
                showSettings: 'settingsMenu'
             })
        }
    }

    escClick = () => {
        if(this.state.showSettings === 'settingsMenu')
        {
            this.setState({
                showSettings: 'settingsMenu hide'
             })
        }
    }

    handleHover = () => {
        console.log('hovering');
    }

    render() { 
        return ( 
            <div className='adminHeader'>
                <div className='Banner'  >
                    <img src={gg_logo} className='logoResize'></img>
                    <div className='bannerSpacer'></div>
                    <img src={dropDownIcon} ></img>
                    <img src={settingIcon} className='settingIcon' onClickCapture={this.settingsClick}></img>
                    <div className={this.state.showSettings}>
                        <h5 className='settingsOption topOption'>
                            signed in as
                        </h5>
                        <p className='settingsOption'>
                            {this.state.username}
                        </p>
                        <p className='settingsOption topOption'> 
                            <button>
                            Reset Password
                            </button>
                        </p>
                        <p className='settingsOption'>
                            <button>
                            Sign Out
                            </button>
                        </p> 
                    </div>
                </div>
                
                <div className='quickTools'>
                    <div className='quickToolSpacer '></div>
                        <Link to='/admin/events' className='none'>
                            <div className={this.state.event} onClickCapture={this.eventClick}>
                                <img src={eventIcon} className='centered leftMargin '></img>
                                <div className='quickToolName '>Events</div>  
                            </div>
                        </Link>
                    <div id={this.state.spacer_1} className='quickToolSeperator centered'>|</div>
                        <Link to='/admin/create-event' className='none'>
                            <div className={this.state.createEvent} onClickCapture={this.createEventClick}>
                                <img src={eventIcon} id='mobileFix_1' className='centered leftMargin'></img>
                                <img src={plusIcon} id='mobileFix_2' className='plusResize'></img>
                                <div id='createEventFix' className='quickToolName'>Create Event</div>
                            </div>
                        </Link>
                    <div id={this.state.spacer_2} className='quickToolSeperator centered'>|</div>
                        <Link to='/admin/accounts' className='none'>
                            <div className={this.state.accounts} onClickCapture={this.accountsClick}>
                                <img src={accountsIcon}   className='centered leftMargin'></img>
                                <div className='quickToolName'>Accounts</div>
                            </div>
                        </Link>
                    <div id={this.state.spacer_3} className='quickToolSeperator centered'>|</div>
                        <Link to='/admin/data' className='none'>
                            <div className={this.state.data} onClickCapture={this.dataClick}>
                                <img src={dataIcon} className='centered leftMargin'></img>
                                <div className='quickToolName'>Data</div>
                            </div>
                        </Link>
                    <div id='endSpacer'></div>
                </div>
                
            </div>
         );
    }
}
 
export default AdminHeader;