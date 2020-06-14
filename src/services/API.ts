import axios from 'axios';

const token = 'your themoviedb token';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default api;
