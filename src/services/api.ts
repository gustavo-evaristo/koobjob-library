import axios from 'axios'

// Link base para consumir a API
const api = axios.create({
  baseURL: 'https://koobjob-library.herokuapp.com'
})

export default api
