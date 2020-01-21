import axios from 'axios'

const createEvent = (event) => {
  const request =  axios.post('/admin/create-event', event)

  return request.then(response => response.data)
}

export default {createEvent}
