import axios from 'axios'

const createUser = (user) => {
  const request =  axios.post('create-user', user)
  return request.then(response => response.data)
}

export default {createUser}