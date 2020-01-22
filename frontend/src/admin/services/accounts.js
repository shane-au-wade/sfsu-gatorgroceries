import axios from 'axios'

const getAdminUsers = () => {
  const request =  axios.get('get-admin-users')
  return request.then(response => response.data)
}

export default {getAdminUsers}