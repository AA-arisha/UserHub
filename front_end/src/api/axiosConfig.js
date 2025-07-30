import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true, // For cookies
});

// 🚧 Request Interceptor
api.interceptors.request.use(
  config => {
    // ✅ Get token from localStorage
    const token = localStorage.getItem('token');

    // ✅ Add Authorization header if token exists
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    console.log('Outgoing Request:', config);
    return config;
  },
  error => Promise.reject(error)
);

// 🧱 Response Interceptor
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export default api;
