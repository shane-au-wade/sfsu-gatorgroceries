import axios from 'axios'

const getActiveEvents = () => {
  const request =  axios.get('get-active-events')
  return request.then(response => response.data)
}

export default {getActiveEvents}
