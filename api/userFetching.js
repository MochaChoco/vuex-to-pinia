import axios from 'axios'

const BASE_URL = 'https://test.com'

export const fetchUserById = (userId) => {
  return axios.get(`${BASE_URL}/users/${userId}`)
}

export const fetchUserDetailById = (userId) => {
  return axios.get(`${BASE_URL}/detail?userId=${userId}`)
}
