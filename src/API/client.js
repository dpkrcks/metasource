import axios from "axios";
axios.defaults.headers.common['ngrok-skip-browser-warning'] = 'skip-browser-warning';


const client = axios.create({
  baseURL: 'https://webapi.metasourcesolutions.com/',
  headers: {
    "Content-Type": "application/json"
  }
});

// client.interceptors.request.use(
//   function (config) {
//     // Modify headers to include access-token
//     config.headers['Authorization'] = `Bearer ${store.getState().user.user.token}`;
//     return config;
//   },
//   function (error) {
//     // Handle request errors
//     return Promise.reject(error);
//   }
// );

const apiConstants = {
  CATEGORIES: 'categories?input=',
  STATE: 'state?input=',
  DETAILS:'details?pageNumber='
};


export { client, apiConstants }