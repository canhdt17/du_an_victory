import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ISeat } from "../../interface/seat";

type Props = {
  seats: ISeat[];
  loading: boolean;
  error: string | null;
  deleteSeat: (id: number | string) => void;
  updateSeat: (id: number | string, updateSeatTypes: ISeat) => void;
};

interface IBase {
  id: number;
  base_name: string;
}

interface IRoom {
  id: number;
  room_name: string;
  bases_id: number;~
}

const ListSeat: React.FC<Props> = ({ seats, loading, error, deleteSeat }) => {
  const [bases, setBases] = useState<IBase[]>([]);
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const [selectedBaseId, setSelectedBaseId] = useState<number | string>("");
  const [selectedRoomId, setSelectedRoomId] = useState<number | string>("");

  // Fetch cơ sở
  useEffect(() => {
    const fetchBases = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/bases");
        if (!response.ok) {
          throw new Error(`Failed to fetch bases: ${response.statusText}`);
        }
        const baseData = await response.json();
        setBases(baseData); // Giả sử API trả về một mảng cơ sở
      } catch (error) {
        console.error("Error fetching bases:", error);
      }
    };
    fetchBases();
  }, []);

  // Fetch phòng
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/rooms");
        if (!response.ok) {
          throw new Error(`Failed to fetch rooms: ${response.statusText}`);
        }
        const roomsData = await response.json();
        setRooms(roomsData.data); 
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };
    fetchRooms();
  }, []);

  // Lọc ghế dựa trên phòng được chọn
  const safeSeats = Array.isArray(seats?.data) ? seats.data : [];
  const filteredSeats = selectedRoomId
    ? safeSeats.filter((seat) => seat.room_id === parseInt(selectedRoomId as string, 10))
    : safeSeats;

  // Lọc phòng dựa trên cơ sở được chọn
  const filteredRooms = selectedBaseId
    ? rooms.filter((room) => room.bases_id === parseInt(selectedBaseId as string, 10))
    : rooms;

  const handleBaseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBaseId(e.target.value);
    setSelectedRoomId(""); // Reset phòng khi chọn cơ sở khác
  };

  const handleRoomChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRoomId(e.target.value);
  };

  // Chỉ hiển thị danh sách ghế khi đã chọn cả cơ sở và phòng
  const isFormValid = selectedBaseId && selectedRoomId;

  return (
    <div className="table-responsive small">
      {/* Dropdown chọn cơ sở và phòng */}
      <div className="d-flex mb-3">
        <div className="me-3">
          <label htmlFor="baseSelect" className="form-label">
            Chọn Cơ Sở:
          </label>
          <select
            id="baseSelect"
            className="form-select"
            onChange={handleBaseChange}
            value={selectedBaseId}
          >
            <option value="">Chọn cơ sở</option>
            {bases.map((base) => (
              <option key={base.id} value={base.id}>
                {base.base_name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="roomSelect" className="form-label">
            Chọn Phòng:
          </label>
          <select
            id="roomSelect"
            className="form-select"
            onChange={handleRoomChange}
            value={selectedRoomId}
            disabled={!selectedBaseId} 
          >
            <option value="">Chọn phòng</option>
            {filteredRooms.map((room) => (
              <option key={room.id} value={room.id}>
                {room.room_name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Bảng danh sách ghế với lớp table-wrapper */}
      {isFormValid && (
        <div className="table-wrapper">
          <table className="table table-striped table-sm">
            <thead>
              <tr className="text-center">
                <th scope="col">STT</th>
                <th scope="col">Số Ghế</th>
                <th scope="col">Loại Ghế</th>
                <th scope="col">Phòng</th>
                <th scope="col">Hành Động</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {loading && (
                <tr>
                  <td colSpan={5}>Đang tải...</td>
                </tr>
              )}
              {error && (
                <tr>
                  <td colSpan={5}>Error: {error}</td>
                </tr>
              )}
              {filteredSeats.length > 0 ? (
                filteredSeats.map((seat, index) => (
                  <tr key={seat.id}>
                    <td>{index + 1}</td>
                    <td>{seat.seat_number}</td>
                    <td>{seat.seatType ? seat.seatType.name : seat.seat_type_name}</td>
                    <td>{seat.room_id}</td>
                    <td>
                      <div className="action-buttons">
                        <NavLink to={`/admin/seat/edit/${seat.id}`}>
                          <button type="button" className="btn btn-warning me-2">
                            Cập nhật
                          </button>
                        </NavLink>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => deleteSeat(seat.id)}
                        >
                          Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5}>Không có dữ liệu</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ListSeat;

