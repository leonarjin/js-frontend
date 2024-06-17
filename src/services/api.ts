import axios from 'axios';

const api = axios.create({
  baseURL: window.location.hostname === 'localhost'
    ? 'http://localhost:5432'  // URL do servidor backend local
    : 'https://js-backend-iota.vercel.app'  // URL do servidor backend no Vercel
});

export default api;
