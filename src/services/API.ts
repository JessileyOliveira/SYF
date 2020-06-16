import axios from 'axios';

const token = 'Your token here';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default api;
