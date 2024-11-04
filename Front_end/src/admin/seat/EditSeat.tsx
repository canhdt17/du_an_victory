import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditSeat: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [seatNumber, setSeatNumber] = useState("");
  const [seatType, setSeatType] = useState("VIP");
  const [room, setRoom] = useState("");
  const [status, setStatus] = useState("Trống");
  const navigate = useNavigate();

  useEffect(() => {
    // Giả lập lấy thông tin ghế từ API
    // Ở đây bạn sẽ gọi API để lấy chi tiết ghế dựa vào `id`
    setSeatNumber("A1");
    setSeatType("VIP");
    setRoom("Phòng 1");
    setStatus("Trống");
  }, [id]);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ id, seatNumber, seatType, room, status });
    // Xử lý cập nhật ghế vào database
    navigate("/admin/seat"); // Quay lại trang danh sách ghế sau khi cập nhật thành công
  };

  return (
    <div className="container mt-5">
      <h2>Chỉnh Sửa Ghế</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Số Ghế:</label>
          <input
            type="text"
            className="form-control"
            value={seatNumber}
            onChange={(e) => setSeatNumber(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Kiểu Ghế:</label>
          <select
            className="form-select"
            value={seatType}
            onChange={(e) => setSeatType(e.target.value)}
          >
            <option value="VIP">VIP</option>
            <option value="Thường">Thường</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Phòng:</label>
          <input
            type="text"
            className="form-control"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Trạng Thái:</label>
          <input
            type="text"
            className="form-control"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Cập Nhật Ghế
        </button>
      </form>
    </div>
  );
};

export default EditSeat;
