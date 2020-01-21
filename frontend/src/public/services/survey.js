import axios from 'axios'

const submitSurvey = (student) => {
  const request =  axios.post('student/submit-survey', student)
  return request.then(response => response.data)
}

export default {submitSurvey}