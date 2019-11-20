import axios from 'axios';

const baseUrl = process.env.API_URL || 'https://kan-api.herokuapp.com/api';

const api = axios.create({
    baseURL: process.env.API_URL || 'https://kan-api.herokuapp.com/api',
});

export default api;
export { baseUrl };
