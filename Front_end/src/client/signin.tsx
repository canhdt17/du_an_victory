import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IUser } from '../movie/register'
import { useForm } from 'react-hook-form'
import axios from 'axios'

type Props = {}

const Signin = (props: Props) => {
  const {register,handleSubmit,formState:{errors}} = useForm<IUser>()
  const navigate = useNavigate()
  const onSubmit = async ( registerData:IUser)=>{
    try {
      const {data} = await axios.post('http://localhost:3000/login',registerData)
      alert("Đăng Nhập Thành Công.")
      sessionStorage.setItem('user',JSON.stringify(data))
      navigate("/")
    } catch (error) {
      alert('Sai tên đăng nhập hoặc mật khẩu.')
      
    }
  }
  return (
    <div>
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-[550px]">
  <h2 className="text-2xl font-bold text-center mb-6">Đăng Nhập</h2>
  <form onSubmit={handleSubmit(onSubmit)}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Email</label>
      <input type="email" id="email" {...register("email",{required:true,pattern:/^\S+@(\S+\.)+\S{2,6}$/})} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="Nhập email của bạn" />
      {(errors.email) && <span className='text-rose-900'>Sai Định Dạng Email</span>}
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Mật khẩu</label>
      <input type="password" id="password" {...register("password",{required:true,minLength:3})} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="Nhập mật khẩu của bạn" />
      {(errors.password) && <span className='text-rose-900'>Mật Khẩu Lớn Hơn 3 Kí Tự</span>}
    </div>
    <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 focus:outline-none">Đăng Nhập</button>
  </form>
  <p className="mt-4 text-center text-sm">Chưa có tài khoản?<NavLink to={`/client/dangki`}>Đăng ký ngay</NavLink> </p>
</div>

    </div>
  )
}

export default Signin