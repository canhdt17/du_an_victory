import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await getUsers(); 
        setUsers(data); 
        setLoading(false);
      } catch (err: any) {
        setError(err.message || "Đã xảy ra lỗi!");
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  if (loading) return <p>Đang tải danh sách người dùng...</p>;
  if (error) return <p>Lỗi: {error}</p>;

  return (
    <div>
      <h1>Danh sách người dùng</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên đầy đủ</th>
            <th>Tên đăng nhập</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Giới tính</th>
            <th>Vai trò</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.fullname}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.gender}</td>
              <td>{user.role.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
