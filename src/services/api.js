import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_APP_URL;

const api = axios.create({
  baseURL,
});

export default api;
