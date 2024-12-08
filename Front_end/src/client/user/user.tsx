import React from 'react'
import Header from '../../compoents/header'
import Footer from '../../compoents/footer'

type Props = {}

const User = (props: Props) => {
  return (
    <div>
        <Header></Header>
        <div className='bg-[#070720] text-white min-h-screen flex items-center justify-center'>
        <div className="w-full max-w-4xl p-6 bg-gray-800 rounded-lg">
  {/* Tabs */}
  <div className="flex justify-center space-x-6 mb-6">
    <button className="px-4 py-2 text-sm font-medium bg-red-500 rounded-md">Tài khoản của tôi</button>
    <button className="px-4 py-2 text-sm font-medium bg-gray-700 rounded-md">Lịch sử mua vé</button>
    <button className="px-4 py-2 text-sm font-medium bg-gray-700 rounded-md">Lịch sử điểm thưởng</button>
  </div>
  {/* Title */}
  <h2 className="text-center text-2xl font-semibold mb-8">Thông tin cá nhân</h2>
  {/* Form */}
  <form className="grid grid-cols-2 gap-6">
    {/* Họ */}
    <div>
      <label htmlFor="ho" className="block mb-2 text-sm font-medium">Họ <span className="text-red-500">*</span></label>
      <input type="text" id="ho" className="w-full px-4 py-2 bg-gray-700 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none" defaultValue="Bùi" />
    </div>
    {/* Tên */}
    <div>
      <label htmlFor="ten" className="block mb-2 text-sm font-medium">Tên <span className="text-red-500">*</span></label>
      <input type="text" id="ten" className="w-full px-4 py-2 bg-gray-700 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none" defaultValue="Duy Trọng" />
    </div>
    {/* Số điện thoại */}
    <div>
      <label htmlFor="sdt" className="block mb-2 text-sm font-medium">Số điện thoại <span className="text-red-500">*</span></label>
      <input type="text" id="sdt" className="w-full px-4 py-2 bg-gray-700 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"  />
    </div>
    {/* Địa chỉ */}
    <div>
      <label htmlFor="diachi" className="block mb-2 text-sm font-medium">Địa chỉ</label>
      <input type="text" id="diachi" className="w-full px-4 py-2 bg-gray-700 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none" placeholder="Địa chỉ" />
    </div>
    {/* Tên đăng nhập */}
    <div>
      <label htmlFor="tendangnhap" className="block mb-2 text-sm font-medium">Tên đăng nhập</label>
      <input type="text" id="tendangnhap" className="w-full px-4 py-2 bg-gray-700 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none" defaultValue="Duy Trọng" disabled />
    </div>
    {/* Email */}
    <div>
      <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
      <input type="email" id="email" className="w-full px-4 py-2 bg-gray-700 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none" defaultValue="bdtrong2004@gmail.com" disabled />
    </div>
  </form>
</div>

    </div>
        <Footer></Footer>
    </div>
  )
}

export default User