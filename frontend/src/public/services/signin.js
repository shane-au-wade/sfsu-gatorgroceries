import axios from 'axios'

const verifyStudent = (student) => {
  const request =  axios.post('student/verify-student', student)
  return request.then(response => response.data)
}

export default {verifyStudent}
