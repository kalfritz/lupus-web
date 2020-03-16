import axios from 'axios';

// const baseURL = 'http://localhost:3333';
const baseURL = 'https://167.71.178.18';

const api = axios.create({
  baseURL,
});

export default api;
