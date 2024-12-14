/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../css/client.css"
import { useForm } from "react-hook-form";

import axios from "axios";
import { IUser } from "../../interface/User";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
const registerScheama = Joi.object({
  fulname:Joi.string().required().min(5),
  username:Joi.string().required().min(1),
  email:Joi.string().required(),
  password:Joi.string().required().min(3),
  gender:Joi.string().required().min(1),
  phone:Joi.string().required().min(9)
})

const Register = () => {
const {register,handleSubmit,formState:{errors}} = useForm<IUser>({
  resolver:joiResolver(registerScheama)
})
const navigate = useNavigate()
const onSubmit = async (registerData:IUser)=>{
  try {
    const {data} = await axios.post(`http://127.0.0.1:8000/api/register`,registerData);
    alert("Đăng Ký Thành Công");
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
        <div className="form-group">
          <label htmlFor="username">Tên Đăng Nhập:</label>
          <input
            type="text"
           {...register('username')}
           
            placeholder="Nhập tên..."
            
          />
        </div>
        {errors.username && (
              <div className="text-red-600 ">
                {errors.username.message}
              </div>
            )}
        <div className="form-group">
          <label htmlFor="fullname">Họ:</label>
          <input
            type="text"
           {...register('fullname')}
           
            placeholder="Nhập họ..."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Nhập Email:</label>
          <input
            type="text"
           {...register('email')}
           
            placeholder="Nhập email..."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Nhập Mật Khẩu:</label>
          <input
            type="password"
           {...register('password')}
           
            placeholder="Nhập mật khẩu..."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Giới Tính:</label>
          <input
            type="text"
           {...register('gender')}
           
            placeholder="Nhập giới tính..."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Nhập Số Điện Thoại:</label>
          <input
            type="text"
           {...register('phone')}
           
            placeholder="Nhập số điện thoại..."
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Đăng Ký
        </button>
      </form>
        <div className="text-center">
          <p>
            Bạn đã có tài khoản? <a href="/login">Đăng Nhập</a>
          </p>
        </div>

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
