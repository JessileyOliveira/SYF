import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDYzMDAwMTM3YzllYjYyMWYzYzJlZTNlODE2YmYxMCIsInN1YiI6IjVlZTY1NTNiYWZhMWIwMDAyMmMwMGYwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PeecqzoN8xtga4AIdwY81zAm4_loQ7bneXz8-fT93O8';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDYzMDAwMTM3YzllYjYyMWYzYzJlZTNlODE2YmYxMCIsInN1YiI6IjVlZTY1NTNiYWZhMWIwMDAyMmMwMGYwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PeecqzoN8xtga4AIdwY81zAm4_loQ7bneXz8-fT93O8`,
  },
});

export default api;
