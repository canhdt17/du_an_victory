import React, { useEffect, useState } from "react";
import Header from "../../compoents/header";
import Footer from "../../compoents/footer";
import { IUser } from "../../interface/User";

const UserProfile = () => {
  const [user, setUser] = useState<IUser>();
  const fetchUser = async () => {
    const token = localStorage.getItem("token"); // Lấy token từ localStorage
  
    if (!token) {
      console.error("Không tìm thấy token");
      return null;
    }
  
    try {
      const response = await fetch("http://127.0.0.1:8000/api/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Gửi token qua header Authorization
        },
      });
  
      if (response.ok) {
        const user = await response.json();
        return user; // Trả về thông tin người dùng
      } else {
        console.error("Lỗi khi lấy thông tin người dùng");
        return null;
      }
    } catch (error) {
      console.error("Lỗi kết nối tới server:", error);
      return null;
    }
  };
  
  useEffect(() => {
    const loadUser = async () => {
      const fetchedUser = await fetchUser(); // Gọi hàm fetchUser
      setUser(fetchedUser); // Cập nhật state
    };

    loadUser();
  }, []);

  if (!user) {
    return <p>Đang tải thông tin người dùng...</p>;
  }

  return (
   <>
   <Header></Header>
   
<div className="bg-[#070720] text-white min-h-screen flex items-center justify-center">
  <div className="w-full max-w-4xl p-6 bg-gray-800 rounded-lg">
  
  <div className="flex justify-center space-x-6 mb-6">
    <button className="px-4 py-2 text-sm font-medium bg-red-500 rounded-md">Tài khoản của tôi</button>
    <button className="px-4 py-2 text-sm font-medium bg-gray-700 rounded-md">Lịch sử mua vé</button>
    <button className="px-4 py-2 text-sm font-medium bg-gray-700 rounded-md">Lịch sử điểm thưởng</button>
  </div>

  <h2 className="text-center text-2xl font-semibold mb-8">Thông tin cá nhân</h2>
  
  <form className="grid grid-cols-2 gap-6">
 
    <div>
      <label htmlFor="ho" className="block mb-2 text-sm font-medium">Họ <span className="text-red-500">*</span></label>
      <input type="text" id="ho" className="w-full px-4 py-2 bg-gray-700 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none" defaultValue={user.fullname} />
    </div>
   
    <div>
      <label htmlFor="ten" className="block mb-2 text-sm font-medium">Tên <span className="text-red-500">*</span></label>
      <input type="text" id="ten" className="w-full px-4 py-2 bg-gray-700 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none" defaultValue={user.username} />
    </div>
   
    <div>
      <label htmlFor="sdt" className="block mb-2 text-sm font-medium">Số điện thoại <span className="text-red-500">*</span></label>
      <input type="text" id="sdt" className="w-full px-4 py-2 bg-gray-700 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none" defaultValue={user.phone} />
    </div>
  
    <div>
      <label htmlFor="diachi" className="block mb-2 text-sm font-medium">Giới Tính</label>
      <input type="text" id="diachi" className="w-full px-4 py-2 bg-gray-700 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none" placeholder={user.gender} />
    </div>
    
    <div>
      <label htmlFor="tendangnhap" className="block mb-2 text-sm font-medium">Tên đăng nhập</label>
      <input type="text" id="tendangnhap" className="w-full px-4 py-2 bg-gray-700 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none" defaultValue={user.username} disabled />
    </div>

    <div>
      <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
      <input type="email" id="email" className="w-full px-4 py-2 bg-gray-700 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none" defaultValue={user.email} disabled />
    </div>
  </form>
 
  {/* <div className="flex justify-end mt-6 space-x-4">
    <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-gray-500 rounded-md">Đổi mật khẩu</button>
    <button className="px-4 py-2 text-sm font-medium bg-red-500 rounded-md">Lưu thông tin</button>
  </div> */}
</div>
</div>
<Footer></Footer>

   </>
  );
};

export default UserProfile;
