import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/', 
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 20000, // 20 giây
});

// Xử lý interceptor cho các yêu cầu
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');  
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;  
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Xử lý interceptor cho các phản hồi
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            console.error("Token không hợp lệ hoặc hết hạn.");
        } else if (error.response && error.response.status === 500) {
            console.error("Lỗi máy chủ.");
        } else {
            console.error("Lỗi không xác định: ", error.message);
        }
        return Promise.reject(error);
    }
);

export default api;
