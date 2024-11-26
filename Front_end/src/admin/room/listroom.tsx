
// import React from "react";
// import { NavLink } from "react-router-dom";
// import { IRoom } from "../../interface/room";

// type Props = {
//   rooms: IRoom[];
//   loading: boolean;
//   error: string | null;
//   updateRooms: (id: number | string, updateRoom: IRoom) => void;
//   deleteRooms: (id: number | string) => void;
// };

<<<<<<< HEAD
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
          {loading && (
              <tr>
                <td colSpan={3}>Đang tải...</td>
              </tr>
            )}
            {error && (
              <tr>
                <td colSpan={3}>Lỗi: {error}</td>
              </tr>
            )}
            {rooms.length > 0 ? (
            rooms.map((room,index) => (
              <tr key={room.id}>
                <td>{index + 1}</td>
                <td>{room.room_name}</td>
                <td>{room.area_id}</td>
                <td>{room.total_seat}</td>
                <td>
                <div className="action-buttons">
                  <NavLink to={`/admin/room/edit/${room.id}`}>
                    <button type="button" className="btn btn-warning">
                      Edit
                    </button>
                  </NavLink>
                  <button
                    type="button"
                    className="btn btn-danger ms-2"
                    onClick={() => deleteRooms(room.id!)}
                  >
                    Delete
                  </button>
                  </div>
                </td>
              </tr>
            ))
          ): (
              <tr>
                <td colSpan={3}>Không có dữ liệu</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
=======
// const ListRooms: React.FC<Props> = ({ rooms, loading, error, deleteRooms }) => {
>>>>>>> origin/main

//   return (
//     <div>
//       <div className="table-responsive small">
//         <table className="table table-striped table-sm">
//           <thead>
//             <tr className="text-center">
//               <th scope="col">STT</th>
//               <th scope="col">Room Name</th>
//               <th scope="col">Area</th>
//               <th scope="col">Total Seat</th>
//               <th scope="col">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="text-center">
//           {loading && (
//               <tr>
//                 <td colSpan={3}>Đang tải...</td>
//               </tr>
//             )}
//             {error && (
//               <tr>
//                 <td colSpan={3}>Lỗi: {error}</td>
//               </tr>
//             )}
//             {rooms.length > 0 ? (
//             rooms.map((room,index) => (
//               <tr key={room.id}>
//                 <td>{index + 1}</td>
//                 <td>{room.room_name}</td>
//                 <td>{room.area_id}</td>
//                 <td>{room.total_seat}</td>
//                 <td>
//                   <NavLink to={`/admin/room/edit/${room.id}`}>
//                     <button type="button" className="btn btn-warning">
//                       Edit
//                     </button>
//                   </NavLink>
//                   <button
//                     type="button"
//                     className="btn btn-danger ms-2"
//                     onClick={() => deleteRooms(room.id!)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ): (
//               <tr>
//                 <td colSpan={3}>Không có dữ liệu</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };
