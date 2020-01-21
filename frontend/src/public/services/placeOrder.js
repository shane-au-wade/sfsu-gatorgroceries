import axios from 'axios'

const placeOrder = (order) => {
  const request =  axios.post('student/place-order', order)
  return request.then(response => response.data)
}


export default {placeOrder}
