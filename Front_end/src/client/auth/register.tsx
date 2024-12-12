/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../css/client.css"
import { useForm } from "react-hook-form";

import axios from "axios";

import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { toast } from "react-toastify";
interface IUser {
  username: string;
  fullname: string;
  email: string;
  password: string;
  gender: string;
  phone: string;
}

const Register = () => {
const {register,handleSubmit,formState:{errors}} = useForm<IUser>()
const navigate = useNavigate()
const onSubmit = async (registerData:IUser)=>{
  try {
    const {data} = await axios.post(`http://127.0.0.1:8000/api/register`,registerData);
    toast.success("Đăng ký thành công!");
    navigate('/login')
  } catch (error) {
    console.log(error);
    toast.error("Đăng ký không thành công!");
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
              {...register("username", { required: true })}
              placeholder="Nhập tên đăng nhập..."
            />
            {errors.username && (
              <p className="error-message">Tên đăng nhập không được để trống!</p>
            )}
        </div>
     
        <div className="form-group">
            <label htmlFor="fullname">Họ và tên:</label>
            <input
              type="text"
              {...register("fullname", { required: true })}
              placeholder="Nhập họ và tên..."
            />
            {errors.fullname && (
              <p className="error-message">Họ và tên không được để trống!</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Nhập email..."
            />
            {errors.email && (
              <p className="error-message">Email không được để trống!</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Mật Khẩu:</label>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Nhập mật khẩu..."
            />
            {errors.password && (
              <p className="error-message">Mật khẩu không được để trống!</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="gender">Giới Tính:</label>
            <input
              type="text"
              {...register("gender", { required: true })}
              placeholder="Nhập giới tính..."
            />
            {errors.gender && (
              <p className="error-message">Giới tính không được để trống!</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Số Điện Thoại:</label>
            <input
              type="text"
              {...register("phone", { required: true })}
              placeholder="Nhập số điện thoại..."
            />
            {errors.phone && (
              <p className="error-message">
                Số điện thoại không được để trống!
              </p>
            )}
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
