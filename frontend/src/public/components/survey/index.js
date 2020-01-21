import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'
import logo from '../../images/logo.png'
import './survey.css'
import surveyServices from '../../services/survey'

const Survey = (props) => {

  let initPageLoad = true;

  const handleSumbit = () => {
    
    if(!initPageLoad)
    {
      console.log('the google survery is complete: redirect');
      surveyServices.submitSurvey(props.location.state.student).then(() => {
        props.history.push('/events', [props.location.state.student]);
      }).catch(err => {
        console.error('Error in submitSurvey: ', err);
      }) 
    }
    else
    {
      console.log('the google form is loaded')
      initPageLoad = false;
    }
  }

  return (

    <div className='survey'>
    <div className='header'>
    <img src={logo} alt='logo' className='main-logo'></img>
    </div>
      <h3 className='text-centered padding'>Survey</h3> 
      <div className='centered-container'>
        <iframe onLoad={handleSumbit} src="https://docs.google.com/forms/d/e/1FAIpQLSeAf5PZuu7FvM86ls7f4OFA3KkuGPnWGdjwdc7jyaL_4TbfsA/viewform?embedded=true" className='googleForm' frameborder="0" marginheight="0" marginwidth="0" >Loading…</iframe>
      </div>
    </div>
  )
}

export default withRouter(Survey)