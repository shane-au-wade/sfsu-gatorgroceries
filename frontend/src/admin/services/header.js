import axios from 'axios'

const signOut = () => {
  const request =  axios.post('/admin/logout')
  return request.then(response => response.data)
}

export default {signOut}