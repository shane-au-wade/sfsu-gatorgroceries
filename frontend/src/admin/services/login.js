import axios from 'axios'

const login = (admin) => {
  const request =  axios.post('login', admin)
  return request.then(response => response.data)
}

export default {login}