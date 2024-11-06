import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUser: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("User");
  const [status, setStatus] = useState("Active");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser = { name, email, role, status };
    console.log("Thêm người dùng:", newUser);
    navigate("/admin/user");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-4">
        <h2 className="mb-4 text-center">Thêm Người Dùng</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Tên:</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Nhập tên người dùng"
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Nhập email người dùng"
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Vai Trò:</label>
            <select
              className="form-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Trạng Thái:</label>
            <select
              className="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Thêm Người Dùng
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
