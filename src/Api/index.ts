import axios from 'axios';

const url = import.meta.env.VITE_BACKEND_URL ?? 
"http://localhost:8080";


export const Api = axios.create({
    baseURL:url,
    headers: {
        'Content-Type': 'application/json'
    }
})