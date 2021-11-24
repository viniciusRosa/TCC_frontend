
import axios from 'axios'
import { parseCookies } from 'nookies';

const { 'teo.token' : token } = parseCookies()


const api = axios.create({
    baseURL: 'http://localhost:3100/api'
})

if (token) {
  api.defaults.headers['Authorization'] = `Bearer ${token}`;
}

export default api;
