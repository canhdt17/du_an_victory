import React from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { IUser } from '../movie/register'
import axios from 'axios'


const Signup = () => {
  const {register,handleSubmit,formState:{errors}} = useForm<IUser>()
  const navigate = useNavigate()
  const onSubmit = async ( registerData:IUser)=>{
    try {
      const {data} = await axios.post('http://localhost:3000/register',registerData)
      alert("Đăng Kí Thành Công.")
      navigate("/client/dangnhap")
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
   <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-[550px]">
  <h2 className="text-2xl font-bold text-center mb-6">Đăng Ký</h2>
  <form onSubmit={handleSubmit(onSubmit)}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Tên Người Dùng</label>
      <input type="text" id="username" {...register("name")} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="Nhập tên người dùng" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
      <input type="email" id="email"  {...register("email",{required:true,pattern:/^\S+@(\S+\.)+\S{2,6}$/})} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="Nhập email của bạn" />
      {(errors.email) && <span className='text-rose-900'>Sai Định Dạng Email</span>}
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Mật khẩu</label>
      <input type="password" id="password"  {...register("password",{required:true,minLength:3})} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="Nhập mật khẩu của bạn" />
      {(errors.password) && <span className='text-rose-900'>Mật Khẩu Lớn Hơn 3 Kí Tự</span>}
    </div>
    <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 focus:outline-none">Đăng Ký</button>
  </form>
  <p className="mt-4 text-center text-sm">Đã có tài khoản? <NavLink to={`/client/dangnhap`}>Đăng nhập</NavLink></p>
</div>


  )
}

export default Signup