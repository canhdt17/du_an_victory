import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Signin = (props: Props) => {
  return (
    <div>
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-[550px]">
  <h2 className="text-2xl font-bold text-center mb-6">Đăng Nhập</h2>
  <form>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Email</label>
      <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="Nhập email của bạn" />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Mật khẩu</label>
      <input type="password" id="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="Nhập mật khẩu của bạn" />
    </div>
    <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 focus:outline-none">Đăng Nhập</button>
  </form>
  <p className="mt-4 text-center text-sm">Chưa có tài khoản?<NavLink to={`/client/dangki`}>Đăng ký ngay</NavLink> </p>
</div>

    </div>
  )
}

export default Signin