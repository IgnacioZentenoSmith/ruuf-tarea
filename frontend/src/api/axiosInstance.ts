import axios from "axios";
import { useUserStore } from '../store/UserStore'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

// axiosInstance.interceptors.request.use(
//   (config) => {
//     config.timeout = 7500;
//     const token = useUserStore().getToken;
//     if (token) config.headers.Authorization = `Bearer ${token}`;

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
