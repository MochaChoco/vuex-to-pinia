import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

export const fetchUserById = (userId) => {
  return axios.get(`${BASE_URL}/api/users/${userId}`)
}

export const fetchUserDetailById = (userId) => {
  return axios.get(`${BASE_URL}/api/users/detail?userId=${userId}`)
}
