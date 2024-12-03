/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../css/client.css"
import { useForm } from "react-hook-form";

import axios from "axios";
import { IUser } from "../../interface/User";


const Register = () => {
const {register,handleSubmit} = useForm<IUser>()
const navigate = useNavigate()
const onSubmit = async(registerData:IUser)=>{
  try {
    const {data} = await axios.post(`http://127.0.0.1:8000/api/register`,registerData)
   alert("Đăng Ký Thành Công.")
   
    
  navigate('/login')
  } catch (error) {
    console.log(error);
    
    
  }
}

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Đăng Ký Tài Khoản</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Tên người dùng */}
          <div className="form-group">
            <label htmlFor="username">Tên Người Dùng</label>
            <input
              type="text"
              
            {...register('username')}
              placeholder="Nhập tên người dùng"
              required
            />
          </div>
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
         
         
         <div className="form-group">
            <label htmlFor="fullname">Họ Và Tên:</label>
            <input
              type="text"
              
            {...register('fullname')}
              placeholder="Nhập họ và tên đầy đủ"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Số Điện Thoại</label>
            <input
              type="text"
              
            {...register('phone')}
              placeholder="Nhập số điện thoại"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Giới Tính:</label>
            <input
              type="text"
              
            {...register('gender')}
              placeholder="Nhập giới tính"
              required
            />
          </div>
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
