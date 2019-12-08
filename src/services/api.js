import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    authorization: `Bearer ${localStorage.getItem('@kan/token')}`,
  },
});

export default api;
