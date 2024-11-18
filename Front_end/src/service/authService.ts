import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000'; // Thay đổi URL nếu cần

// Đăng ký người dùng
const register = async (username: string, email: string, password: string) => {
    const response = await axios.post (`${API_URL}/register`, {
        username,
        email,
        password,
    });
    return response.data; // Trả về dữ liệu từ API
};

// Đăng nhập người dùng
const login = async (username: string, password: string) => {
    const response = await axios.post(`${API_URL}/login`, {
        username,
        password,
    });
    
    if (response.data.token) {
        // Lưu token vào localStorage nếu đăng nhập thành công
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data; // Trả về dữ liệu từ API
};

// Đăng xuất
const logout = () => {
    localStorage.removeItem('user'); // Xóa thông tin người dùng
};

const authService = {
    register,
    login,
    logout,
};

export default authService;
