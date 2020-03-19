import axios from 'axios';

const baseURL = 'https://luppusapi.xyz';

const api = axios.create({
  baseURL,
});

export default api;
