import React from 'react'
import {withRouter} from 'react-router-dom'
import logo from '../../images/logo.png'
import './style/survey.css'
import surveyServices from '../../services/survey'

const Survey = (props) => {

  let initPageLoad = true;

  const handleSubmit = () => {
    
    console.log('survey props', props)
    if(!initPageLoad)
    {
      console.log('the google survery is complete: redirect');
      surveyServices.submitSurvey(props.location.state[0]).then(() => {
        props.history.push('/events', [props.location.state[0]]);
        //props.history.push('/completed-order')
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

  const redirect = () =>{
    props.history.push('/events', [props.location.state[0]]);
  }

  return (
    <div className='survey'>
    <div className='header'>
    <img src={logo} alt='logo' className='main-logo'></img>
    </div>
      <h3 className='text-centered padding'>Survey</h3> 
      <div className='centered-container'>
        {/* current gg survey */}
        <iframe title='googleForm' onLoad={handleSubmit} src="https://docs.google.com/forms/d/e/1FAIpQLSc_v2IvZOpeOyFcqoQO2UyiFXqPUMsVooCu6vIp7tSfrW-5Bw/viewform?embedded=true" className='googleForm' frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        {/* Shane Wade UX experience survey */}
        {/* <iframe title='googleForm' onLoad={handleSumbit} src="https://docs.google.com/forms/d/e/1FAIpQLScDFJjB-FvpaxaqkbVxH2dOPyuCacaY8lUWXdH1BSAx1nSdGg/viewform?embedded=true" className='googleForm' frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
      </div>

       {/* 
       This is a super sneaky hidden div button to bypass the survey.
       That way, we do not need to dilute the gator groceries survey.
       */}
      <div style={{width:'30px', height: '30px'}}onClick={redirect}></div>
    </div>
  )
}

export default withRouter(Survey)