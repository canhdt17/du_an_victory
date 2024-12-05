import React from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const token = localStorage.getItem("token");
  const avatar = localStorage.getItem("avatar");
  const navigate = useNavigate();

  if (!token) {
    // Nếu không có token, điều hướng về trang đăng nhập
    navigate("/");
    return null;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Chào mừng bạn đã đăng nhập!</p>
      <img
        src={avatar || "https://via.placeholder.com/100"}
        alt="Avatar"
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
      />
    </div>
  );
};

export default ProfilePage;
