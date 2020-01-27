import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './style/adminHeader.css';
import eventIcon from '../../icons/calendar_today-24px.svg';
import plusIcon from '../../icons/add_circle_outline-24px.svg';
import accountsIcon from '../../icons/people_outline-24px.svg';
import dataIcon from '../../icons/dashboard-24px.svg';
import gg_logo from '../../../public/images/logo.png';
import settingIcon from '../../icons/settings_applications-24px.svg';
import dropDownIcon from '../../icons/arrow_drop_down-24px.svg';
import headerServices from '../../services/header'

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

    handleLogOut = (event) => {
        event.preventDefault();
        headerServices.signOut().then(() => {
             console.log('signing out');
             this.props.history.push('/');
        }).catch(err => {
            console.log('error in sign out: ', err);
        })
    }

    render() { 
        return ( 
            <div className='adminHeader'>
                <div className='Banner'  >
                    <img src={gg_logo} className='logoResize' alt='GG Logo'></img>
                    <div className='bannerSpacer'></div>
                    <img src={dropDownIcon} alt='dropDownIcon'></img>
                    <img src={settingIcon} className='settingIcon' onClickCapture={this.settingsClick} alt='settingIcon'></img>
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
                            <button onClickCapture={this.handleLogOut}>
                                Sign Out
                            </button>
                        </p> 
                    </div>
                </div>
                
                <div className='quickTools'>
                    <div className='quickToolSpacer '></div>
                        <Link to={{
                            pathname: '/admin/events',
                            state: {user_name: this.state.username}
                            }} className='none'>
                            <div className={this.state.event} onClickCapture={this.eventClick}>
                                <img src={eventIcon} className='centered leftMargin' alt='eventIcon'></img>
                                <div className='quickToolName '>Events</div>  
                            </div>
                        </Link>
                    <div id={this.state.spacer_1} className='quickToolSeperator centered'>|</div>
                        <Link to={{
                            pathname: '/admin/create-event',
                            state: {user_name: this.state.username}
                            }} className='none'>
                            <div className={this.state.createEvent} onClickCapture={this.createEventClick}>
                                <img src={eventIcon} id='mobileFix_1' className='centered leftMargin' alt='eventIcon'></img>
                                <img src={plusIcon} id='mobileFix_2' className='plusResize' alt='plusIcon'></img>
                                <div id='createEventFix' className='quickToolName'>Create Event</div>
                            </div>
                        </Link>
                    <div id={this.state.spacer_2} className='quickToolSeperator centered'>|</div>
                        <Link to={{
                            pathname: '/admin/accounts',
                            state: {user_name: this.state.username}
                            }} className='none'>
                            <div className={this.state.accounts} onClickCapture={this.accountsClick}>
                                <img src={accountsIcon}   className='centered leftMargin' alt='accountsIcon'></img>
                                <div className='quickToolName'>Accounts</div>
                            </div>
                        </Link>
                    <div id={this.state.spacer_3} className='quickToolSeperator centered'>|</div>
                        <Link to={{
                            pathname: '/admin/data',
                            state: {user_name: this.state.username}
                            }} className='none'>
                            <div className={this.state.data} onClickCapture={this.dataClick}>
                                <img src={dataIcon} className='centered leftMargin' alt='dataIcon'></img>
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