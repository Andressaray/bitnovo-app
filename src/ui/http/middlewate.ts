import axios from 'axios';
import Config from 'react-native-config';

const axiosInstance = axios.create({
  baseURL: Config.API_URL,
  headers: {
    'X-Device-Id': Config.X_DEVICE_ID,
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default axiosInstance;
