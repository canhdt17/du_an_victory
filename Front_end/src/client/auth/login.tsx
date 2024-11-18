/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
        <div className="container mt-5">
            <h2 className="text-center mb-4">Đăng Nhập</h2>
            {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}
            <form onSubmit={handleSubmit} autoComplete="off">
                <div className="form-group">
                    <label htmlFor="username">Tên Người Dùng</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        autoComplete="off"  
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mật Khẩu</label>
                    <input 
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        autoComplete="new-password" 
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-block mt-4">Đăng Nhập</button>
            </form>
            <div className="text-center mt-3">
                <p>Bạn chưa có tài khoản? <a href="/register">Đăng Ký</a></p>
            </div>
        </div>
    );
};

export default Login;
