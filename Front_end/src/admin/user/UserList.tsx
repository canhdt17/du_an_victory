import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { IUser } from "../../interface/User";

const UserList: React.FC = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user") 
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id: number) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa người dùng này?")) {
      setUsers((prevUsers) => prevUsers.filter((u) => u.id !== id));
      console.log(`Người dùng với ${id} đã được xóa .`);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid p-5 bg-light" style={{ minHeight: "100vh" }}>
      <div className="card shadow-lg p-4 bg-white">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="text-primary">Danh Sách Người Dùng</h1>
          <Link to="/admin/createuser">
            <button className="btn btn-lg btn-primary">Thêm Người Dùng</button>
          </Link>
        </div>

        <div className="table-responsive">
          <table className="table table-hover table-striped table-bordered align-middle">
            <thead className="table-dark text-center">
              <tr>
                <th>ID</th>
                <th>Họ và Tên</th>
                <th>Tên Người Dùng</th>
                <th>Email</th>
                <th>Xác Thực Email</th>
                <th>Số Điện Thoại</th>
                <th>Giới Tính</th>
                <th>Vai Trò</th>
                <th>Trạng Thái</th>
                <th>Hành Động</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u: IUser) => (
                <tr key={u.id} className="text-center">
                  <td>{u.id}</td>
                  <td>{u.fullname}</td>
                  <td>{u.username}</td>
                  <td>{u.email}</td>
                  <td>{u.email_verified_at}</td>
                  <td>{u.phone}</td>
                  <td>{u.gender}</td>
                  <td>{u.role}</td>
                  <td>{u.status}</td>
                  <td>
                    <Link to={`/admin/edituser/${u.id}`}>
                      <button className="btn btn-warning btn-sm me-2 px-4">
                        Sửa
                      </button>
                    </Link>
                    {user?.role === "Admin" && (
                      <button
                        className="btn btn-danger btn-sm px-4"
                        onClick={() => handleDelete(u.id)}
                      >
                        Xóa
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
