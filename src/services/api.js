import axios from 'axios';

// const baseURL = 'http://localhost:3333';
const baseURL = 'https://luppusapi.xyz';

const api = axios.create({
  baseURL,
});

export default api;
