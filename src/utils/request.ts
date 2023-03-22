import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost/api',
  timeout: 3000,
});

export default request;