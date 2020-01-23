import axios from 'axios'

const login = (user) => {
  const request =  axios.post('/admin/login', user)
  return request.then(response => response.data)
}

export default {login}