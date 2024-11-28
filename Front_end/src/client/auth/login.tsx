/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../service/authService';

const Login: React.FC = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await authService.login(formData.username, formData.password);
            
            if (response.token) {
                navigate('/profile');
            } else {
                setErrorMessage('Đăng nhập thất bại, kiểm tra lại thông tin đăng nhập');
            }
        } catch (error: any) {
            setErrorMessage('Đã xảy ra lỗi khi đăng nhập');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Đăng Nhập</h2>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="form-group">
                        <label htmlFor="username">Tên Người Dùng</label>
                        <input 
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Nhập tên người dùng"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mật Khẩu</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Nhập mật khẩu"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn">Đăng Nhập</button>
                </form>
                <div className="text-center">
                    <p>Bạn chưa có tài khoản? <a href="/register">Đăng Ký</a></p>
                </div>
                <div className="social-buttons">
                    <a href="#" className="facebook"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="google"><i className="fab fa-google"></i></a>
                    <a href="#" className="twitter"><i className="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Login;
