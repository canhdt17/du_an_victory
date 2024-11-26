<<<<<<< HEAD
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { ISeat } from "../../interface/seat";
import { SeatByID } from "../../service/seat";
import Logo from "../movie/logo";
import HeaderDashboard from "../movie/headerdashboard";
import MenuDashboard from "../movie/menudashboard";


type Props = {
  updateSeats: (id: number | string, data: ISeat) => void;
  seat_types: { id: number; name: string }[];
  rooms: { id: number; name: string }[];
};
=======

// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { useParams } from "react-router-dom";
// import Joi from "joi";
// import { joiResolver } from "@hookform/resolvers/joi";
// import { ISeat } from "../../interface/seat";
// import { SeatByID } from "../../service/seat";
// import { fetchSeatTypes, fetchRooms } from "../../service/seat"; 
>>>>>>> origin/main

// type Props = {
//   updateSeats: (id: number | string, data: ISeat) => void;
//   seat_types: { id: number; name: string }[]; 
//   rooms: { id: number; name: string }[]; 
// }

// const updateSeatSchema = Joi.object({
//   seat_number: Joi.string().required().label("Seat Number"),
//   seat_type_id: Joi.number().required().label("Seat Type"),
//   room_id: Joi.number().required().label("Room"),
// });

<<<<<<< HEAD
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [seatTypes, setSeatTypes] = useState<
    { id: number; seat_type_name: string }[]
  >([]);
  const [rooms, setRooms] = useState<{ id: number; room_name: string }[]>([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const seatTypesResponse = await fetch(
        "http://127.0.0.1:8000/api/seatTypes"
      );
      if (!seatTypesResponse.ok) {
        throw new Error(
          `Failed to fetch seat types: ${seatTypesResponse.statusText}`
        );
      }
      const seatTypesData = await seatTypesResponse.json();
      // console.log("Seat Types Data:", seatTypesData);
      setSeatTypes(seatTypesData || []);

      // Fetch rooms
      const roomsResponse = await fetch("http://127.0.0.1:8000/api/rooms");
      if (!roomsResponse.ok) {
        throw new Error(`Failed to fetch rooms: ${roomsResponse.statusText}`);
      }
      const roomsData = await roomsResponse.json();
      // console.log("Rooms Data:", roomsData);
      setRooms(roomsData || []);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };
=======
// const UpdateSeat: React.FC<Props> = ({ updateSeats }) => {
//   const { id } = useParams<{ id: string }>();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<ISeat>({
//     resolver: joiResolver(updateSeatSchema),
//   });

//   const [loading, setLoading] = useState(true);
//   const [fetchError, setFetchError] = useState<string | null>(null);
//   const [seatTypes, setSeatTypes] = useState<{ id: number; name: string }[]>([]);
//   const [rooms, setRooms] = useState<{ id: number; name: string }[]>([]);
>>>>>>> origin/main

//   const fetchData = async () => {
//     try {
//       const [seatTypesData, roomsData] = await Promise.all([
//         fetchSeatTypes(),
//         fetchRooms(),
//       ]);
//       setSeatTypes(seatTypesData.seat_types || []);
//       setRooms(roomsData.rooms || []);
//     } catch (error) {
//       console.error("Failed to fetch data:", error);
//     }
//   };

//   // Fetch dữ liệu ghế dựa trên ID
//   useEffect(() => {
//     const fetchSeat = async () => {
//       try {
//         await fetchData();
//         const data = await SeatByID(id!);
//         reset(data);
//       } catch (error: any) {
//         setFetchError("Failed to fetch seat data.");
//       } finally {
//         setLoading(false);
//       }
//     };

<<<<<<< HEAD
  const onSubmit = async (data: ISeat) => {
    console.log("Submitting Data:", data);
    try {
      setLoading(true);
      await updateSeats(id!, data);
      alert("Ghế đã được cập nhật thành công!");
    } catch (error) {
      console.error("lỗi cập nhật ghế:", error);
      setFetchError("Cập nhật ghế thất bại. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="dashboards">
        <div>
          <Logo></Logo>
          <HeaderDashboard></HeaderDashboard>
          <div className="container-fluid">
            <div className="row">
              <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
                <div
                  className="offcanvas-md offcanvas-end bg-body-tertiary"
                  tabIndex={-1}
                  id="sidebarMenu"
                  aria-labelledby="sidebarMenuLabel"
                >
                  <MenuDashboard></MenuDashboard>
                </div>
              </div>
              <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  <h1 className="h2">UPDATE SEAT</h1>
                  <div className="btn-toolbar mb-2 mb-md-0"></div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {loading && <p>Loading...</p>}
                  {fetchError && <p>{fetchError}</p>}

                  <div className="mb-3">
                    <label htmlFor="seatName" className="form-label">
                      Số Ghế:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="seatName"
                      {...register("seat_number")}
                    />
                    {errors.seat_number && (
                      <div className="text-danger">
                        {errors.seat_number.message}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="seatType" className="form-label">
                      Loại Ghế:
                    </label>
                    <select
                      id="seatType"
                      className="form-select"
                      {...register("seat_type_id")}
                    >
                      <option value="">Chọn loại ghế</option>
                      {seatTypes.length > 0 ? (
                        seatTypes.map((type) => (
                          <option key={type.id} value={type.id}>
                            {type.seat_type_name}
                          </option>
                        ))
                      ) : (
                        <option disabled>Không có loại ghế</option>
                      )}
                    </select>
                    {errors.seat_type_id && (
                      <div className="text-danger">
                        {errors.seat_type_id.message}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="room" className="form-label">
                      Phòng:
                    </label>
                    <select
                      id="room"
                      className="form-select"
                      {...register("room_id")}
                    >
                      <option value="">Chọn phòng</option>
                      {rooms.length > 0 ? (
                        rooms.map((room) => (
                          <option key={room.id} value={room.id}>
                            {room.room_name}
                          </option>
                        ))
                      ) : (
                        <option disabled>Không có phòng</option>
                      )}
                    </select>
                    {errors.room_id && (
                      <div className="text-danger">
                        {errors.room_id.message}
                      </div>
                    )}
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Cập Nhật Ghế
                  </button>
                </form>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
=======
//     fetchSeat();
//   }, [id, reset]);

//   const onSubmit = (data: ISeat) => {
//     updateSeats(id!, data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {loading && <p>Loading...</p>}
//       {fetchError && <p>{fetchError}</p>}

//       <div className="mb-3">
//         <label htmlFor="seatName" className="form-label">
//           Tên Ghế:
//         </label>
//         <input
//           type="text"
//           className="form-control"
//           id="seatName"
//           {...register("seat_number")}
//         />
//         {errors.seat_number && (
//           <div className="text-danger">{errors.seat_number.message}</div>
//         )}
//       </div>

//       <div className="mb-3">
//         <label htmlFor="seatType" className="form-label">
//           Loại Ghế:
//         </label>
//         <select
//           id="seatType"
//           className="form-select"
//           {...register("seat_type_id")}
//         >
//           <option value="">Chọn loại ghế</option>
//           {seatTypes.map((type) => (
//             <option key={type.id} value={type.id}>
//               {type.name}
//             </option>
//           ))}
//         </select>
//         {errors.seat_type_id && (
//           <div className="text-danger">{errors.seat_type_id.message}</div>
//         )}
//       </div>

//       <div className="mb-3">
//         <label htmlFor="room" className="form-label">
//           Phòng:
//         </label>
//         <select
//           id="room"
//           className="form-select"
//           {...register("room_id")}
//         >
//           <option value="">Chọn phòng</option>
//           {rooms.map((room) => (
//             <option key={room.id} value={room.id}>
//               {room.name}
//             </option>
//           ))}
//         </select>
//         {errors.room_id && (
//           <div className="text-danger">{errors.room_id.message}</div>
//         )}
//       </div>
>>>>>>> origin/main

//       <button type="submit" className="btn btn-primary">
//         Cập Nhật Ghế
//       </button>
//     </form>
//   );
// };

// export default UpdateSeat;
