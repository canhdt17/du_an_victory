import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IUser } from "../../interface/User";

const EditUser: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    if (id) {
      const fetchedUser: IUser = {
        id: parseInt(id, 10),
        fullname: "John Doe",
        email: "johndoe@example.com",
        role: "User",
        username: "",
        phone: "",
        gender: "",
        status: "Active",
        email_verified_at: "",
        password: ""
      };
      setUser(fetchedUser);
    } else {
      console.error("ID người dùng bị thiếu hoặc không hợp lệ");
    }
  }, [id]);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Cập nhật người dùng:", user);
    navigate("/admin/user");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-4">
        <h2 className="mb-4 text-center">Chỉnh Sửa Người Dùng</h2>
        {user && (
          <form onSubmit={handleUpdate}>
            <div className="mb-3">
              <label className="form-label fw-bold">Tên:</label>
              <input
                type="text"
                className="form-control"
                value={user.fullname}
                onChange={(e) =>
                  setUser((prev) =>
                    prev ? { ...prev, fullname: e.target.value } : null
                  )
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Email:</label>
              <input
                type="email"
                className="form-control"
                value={user.email}
                onChange={(e) =>
                  setUser((prev) =>
                    prev ? { ...prev, email: e.target.value } : null
                  )
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Vai Trò:</label>
              <select
                className="form-select"
                value={user.role}
                onChange={(e) =>
                  setUser((prev) =>
                    prev ? { ...prev, role: e.target.value } : null
                  )
                }
              >
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Trạng Thái:</label>
              <select
                className="form-select"
                value={user.status}
                onChange={(e) =>
                  setUser((prev) =>
                    prev ? { ...prev, status: e.target.value } : null
                  )
                }
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <button type="submit" className="btn btn-success w-100">
              Cập Nhật
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EditUser;
