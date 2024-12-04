/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../css/client.css"
import { useForm } from "react-hook-form";

import axios from "axios";
import { IUser } from "../../interface/User";


const Login = () => {
const {register,handleSubmit} = useForm<IUser>()
const navigate = useNavigate()
const onSubmit = async(registerData:IUser)=>{
  try {
    const {data} = await axios.post(`http://127.0.0.1:8000/api/login`,registerData)
   alert("Đăng Nhập Thành Công.")
  
   localStorage.setItem('token', data)
  navigate('/user')
  } catch (error) {
    alert("Sai Email Hoặc Mật Khẩu");
    
    
  }
}

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Đăng Nhập</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

         
          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...register('email')}
             
              placeholder="Nhập địa chỉ email"
              required
            />
          </div>
          {/* Mật khẩu */}
          <div className="form-group">
            <label htmlFor="password">Mật Khẩu</label>
            <input
              type="password"
           
             {...register('password')}
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
            Bạn chưa có tài khoản? <a href="/register">Đăng Ký</a>
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

export default Login;
