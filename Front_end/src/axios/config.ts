import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/', 
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 20000, // 5 giây
});

export default api;
