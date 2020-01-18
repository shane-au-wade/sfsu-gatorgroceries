import axios from 'axios'

const postEventData = (data) => {
  const request =  axios.post('admin/create-event', data)

  return request.then(response => response.data)
}

export default {getActiveEvents}
