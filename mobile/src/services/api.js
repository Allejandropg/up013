import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.30:3333',
});
// const api = axios.create({
//   baseURL: 'http://10.0.3.2:3333', // Genymotion
//   // baseURL: 'http://192.168.0.2x:3333',// via usb
// });

export default api;
