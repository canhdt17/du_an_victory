import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; 




const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      });
      console.log(response)

      if(response.data.access_token){
        localStorage.setItem("token", response.data.access_token);
        console.log("Đăng nhập thành công:", response.data);
        navigate("/userprofile"); 
      }else{
        console.log("Đăng nhập thất bại")
      };

      return response.data;
    } catch (error) {
      console.error("Lỗi khi đăng nhập:", error);
      throw error;
    }
  };


  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); 

    try {
    
      const userData = await login(email, password);

   
      const token = localStorage.getItem("token");
      if (token) {
        //navigate("/"); 
      } else {
        console.error("Token không tồn tại.");
      }
    } catch (error) {
      console.error("Đăng nhập thất bại.");
    }
  };

  return (
    <div className="register-container">
    <div className="register-box">
      <h2>Đăng Nhập Tài Khoản</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
           
            placeholder="Nhập địa chỉ email"
            required
          />
        </div>
      
        <div className="form-group">
          <label htmlFor="password">Mật Khẩu</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
         
         
            placeholder="Nhập mật khẩu"
            required
          />
        </div>
       
       
      
        <button type="submit" className="btn btn-primary">
          Đăng Nhập
        </button>
      </form>
      {/* Đăng nhập */}
      <div className="text-center">
        <p>
          Bạn chưa có tài khoản?<NavLink to={`/register`}> <a href="/login">Đăng Ký</a></NavLink>
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

export default LoginPage;
