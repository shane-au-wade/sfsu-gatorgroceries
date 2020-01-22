import axios from 'axios'

const searchOrder = (searchParams) => {
  const request =  axios.get(`/admin/search-order/${searchParams.eventID}/${searchParams.student_id}`, searchParams)
  return request.then(response => response.data)
}

export default {searchOrder}
