/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../service/authService";
import "../css/client.css"
const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Mật khẩu không khớp");
      return;
    }

    try {
      const response = await authService.register(
        formData.username,
        formData.email,
        formData.password
      );
      if (response) {
        navigate("/login");
      }
    } catch (error) {
      setErrorMessage("Đã xảy ra lỗi khi đăng ký");
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Đăng Ký Tài Khoản</h2>
        <form onSubmit={handleSubmit}>
          {/* Tên người dùng */}
          <div className="form-group">
            <label htmlFor="username">Tên Người Dùng</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Nhập tên người dùng"
              required
            />
          </div>
          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Nhập địa chỉ email"
              required
            />
          </div>
          {/* Mật khẩu */}
          <div className="form-group">
            <label htmlFor="password">Mật Khẩu</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Nhập mật khẩu"
              required
            />
          </div>
          {/* Xác nhận mật khẩu */}
          <div className="form-group">
            <label htmlFor="confirmPassword">Xác Nhận Mật Khẩu</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Nhập lại mật khẩu"
              required
            />
          </div>

          {/* Hiển thị lỗi nếu có */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button type="submit" className="btn btn-primary">
            Đăng Ký
          </button>
        </form>
        {/* Đăng nhập */}
        <div className="text-center">
          <p>
            Bạn đã có tài khoản? <a href="/login">Đăng Nhập</a>
          </p>
        </div>
        {/* Đăng ký bằng mạng xã hội */}
        <div className="social-buttons">
          <a href="#" className="btn facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="btn google">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="btn twitter">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
