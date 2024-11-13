/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import { IRoom } from "../../interface/room";
import { DeleteRoom } from "../../service/room";

type Props = {
  rooms: IRoom[];
  loading: boolean;
  error: string | null;
  onDelete: (id: number | string) => void;
};

const ListRooms: React.FC<Props> = ({ rooms, loading, error, onDelete }) => {
  const handleDelete = async (id: number | string) => {
    if (confirm("Bạn có chắc muốn xóa phòng này không?")) {
      await DeleteRoom(id);
      onDelete(id);
    }
  };

  return (
    <div>
      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr className="text-center">
              <th scope="col">STT</th>
              <th scope="col">Room Name</th>
              <th scope="col">Area</th>
              <th scope="col">Total Seat</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {rooms.map((room: IRoom, i: number) => (
              <tr key={room.id}>
                <td>{i + 1}</td>
                <td>{room.room_name}</td>
                <td>{room.area_id}</td>
                <td>{room.total_seat}</td>
                <td>
                  <NavLink to={`/admin/room/edit/${room.id}`}>
                    <button type="button" className="btn btn-warning">
                      Edit
                    </button>
                  </NavLink>
                  <button
                    type="button"
                    className="btn btn-danger ms-2"
                    onClick={() => handleDelete(room.id!)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListRooms;
