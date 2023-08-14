import axios from "axios";

axios.defaults.baseURL =  import.meta.env.VITE_APP_BASE_URL || 'http://localhost:3000/'
    // import.meta.env.VITE_APP_BASE_URL

axios.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axios;
