import React from 'react'
import {Paper, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PublicLogoHeader from '../../shared/components/publicLogoHeader'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    textAlign: 'center'
  },
  SurveyWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  googleFormWrapper: {
    
    width: '90%',
    maxWidth: '600px',
    height:'5300px',
    paddingTop: '10px',
    background: 'rgb(247, 247, 247)', 
    margin: '0 auto',
    marginTop: '10px',
    marginBottom: "30px",
    ['@media screen and (max-width:500px)']: {
        height: '6200px'
    },
    ['@media screen and (max-width:360px)']: {
        
        height: '6350px'
    },
    ['@media screen and (max-width:320px)']: {
        width: '98%',
        height: '6450px'
    },

  },
  googleFormFit: {
    width:'90%', 
    height:'5300px',
    ['@media screen and (max-width:500px)']: {
        height: '6200px'
    },
    ['@media screen and (max-width:360px)']: {
        width: '98%',
        height: '6350px'
    },
    ['@media screen and (max-width:320px)']: {
        width: '100%',
        height: '6450px'
    },
  }
  
}));

const PublicSurvey = (props) => {
  const classes = useStyles();

  let initPageLoad = true;

  const handleSubmit = () => {
    
    console.log('survey props', props)
    if(!initPageLoad)
    {
    //   console.log('the google survery is complete: redirect');
    //   surveyServices.submitSurvey(props.location.state[0]).then(() => {
    //     props.history.push('/events', [props.location.state[0]]);
    //     //props.history.push('/completed-order')
    //   }).catch(err => {
    //     console.error('Error in submitSurvey: ', err);
    //   }) 
    }
    else
    {
      console.log('the google form is loaded')
      initPageLoad = false;
    }
  }

  /**
   * This redirect is used to bypass the survey because we 
   * do not want to dilute the survey even when in production
   */
  const redirect = () =>{
    //props.history.push('/events', [props.location.state[0]]);
    console.log('Survey Skipped')
  }

  return (
    <div className={classes.root}>
      <PublicLogoHeader />
      <Paper className={classes.SurveyWrapper} elevation={0}> 
          {/* <Typography variant='h4'>Survey</Typography> */}
          <Paper className={classes.googleFormWrapper} elevation={2}>
            {/* current gg survey */}
            <iframe title='googleForm'className={classes.googleFormFit} onLoad={handleSubmit} src="https://docs.google.com/forms/d/e/1FAIpQLSc_v2IvZOpeOyFcqoQO2UyiFXqPUMsVooCu6vIp7tSfrW-5Bw/viewform?embedded=true" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
            {/* Shane Wade UX experience survey */}
            {/* <iframe title='googleForm' onLoad={handleSumbit} src="https://docs.google.com/forms/d/e/1FAIpQLScDFJjB-FvpaxaqkbVxH2dOPyuCacaY8lUWXdH1BSAx1nSdGg/viewform?embedded=true" className='googleForm' frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
          </Paper>
          <div style={{width:'30px', height: '30px', color:'white'}}onClick={redirect}>.</div>
      </Paper> 
    </div>
  )
}

export default PublicSurvey  