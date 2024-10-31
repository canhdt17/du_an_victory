import React from "react";
import { IRoom } from "../../movie/room";
import { NavLink } from "react-router-dom";

type Props = {
  rooms: IRoom[];
};

const ListRoom = ({ rooms }: Props) => {
  return (
    <div>
      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr className="text-center">
              <th scope="col">STT</th>
              <th scope="col">Room Name</th>
              <th scope="col">Area </th>
              <th scope="col">Total Seat</th>
              <th scope="col">Button</th>
            </tr>
          </thead>
          <tbody className="text-center">
             { Array.isArray(rooms) && rooms.map((room: IRoom, i: number) => (
                <tr key={room.room_id}>
                  <td>{i + 1}</td>
                  <td>{room.room_name}</td>
                  <td>{room.area_id}</td>
                  <td>{room.total_seat}</td>
                  <td>
                    
                     
                     <NavLink to={`/admin/room/edit/${room.id}`}>
                      <button
                        type="button"
                        className="btn btn-warning text-center "
                      >
                        Cập nhật
                      </button>
                     </NavLink>
                      
                      
                    
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListRoom;
