import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json'
  }
});

axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});

axiosClient.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data;
  }

  return response;
}, (error) => {
  // Handle errors
  throw error;
});

export const axiosAuthClient = axios.create({
  baseURL: process.env.REACT_APP_LOGIN_API,
  // baseURL: 'http://localhost:3001',
});

axiosAuthClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});

axiosAuthClient.interceptors.response.use((response) => {
  // if (response && response.data) {
  //   return response.data;
  // }
    if (response) {
    return response;
  }

  return response;
}, (error) => {
  // Handle errors
  throw error;
});
