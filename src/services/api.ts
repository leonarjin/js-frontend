import axios from 'axios'

const api = axios.create({
    baseURL: "https://js-backend-iota.vercel.app"
});
 
export default api;