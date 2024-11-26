
// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { useParams } from "react-router-dom";
// import Joi from "joi";
// import { joiResolver } from "@hookform/resolvers/joi";
// import { ISeat } from "../../interface/seat";
// import { SeatByID } from "../../service/seat";
// import { fetchSeatTypes, fetchRooms } from "../../service/seat"; 

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

//       <button type="submit" className="btn btn-primary">
//         Cập Nhật Ghế
//       </button>
//     </form>
//   );
// };

// export default UpdateSeat;
