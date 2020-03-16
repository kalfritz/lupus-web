import axios from 'axios';

// const baseURL = 'http://localhost:3333';
const baseURL = 'http://167.71.178.18';

const api = axios.create({
  baseURL,
});

export default api;
