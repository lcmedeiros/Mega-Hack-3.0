import axios from 'axios';
import token from '../mocks/auth';

const api = axios.create({baseURL: 'https://hacka3-backend.herokuapp.com/' });
api.defaults.headers.common['Authorization'] = 'Bearer' + token;

export default api;