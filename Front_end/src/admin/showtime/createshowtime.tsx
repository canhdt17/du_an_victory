<<<<<<< HEAD
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { IShowTime } from "../../interface/shotime";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { IRoom } from "../../interface/room";
import { ListRoom } from "../../service/room";
import Logo from "../movie/logo";
import HeaderDashboard from "../movie/headerdashboard";
import MenuDashboard from "../movie/menudashboard";
=======
>>>>>>> origin/main

// import React, { useEffect, useState } from "react";
// import Logo from "../logo";
// import HeaderDashboard from "../headerdashboard";
// import MenuDashboard from "../menudashboard";
// import { useForm } from "react-hook-form";
// import { IShowTime } from "../../interface/shotime";
// import Joi from "joi";
// import { joiResolver } from "@hookform/resolvers/joi";
// import { IRoom } from "../../interface/room";
// import { ListRoom } from "../../service/room";

// type Props = {
//   addShowTime: (showData: IShowTime) => void;
// };

// const showSchema = Joi.object({
//   movie_id: Joi.string().required().label("Movie ID"),
//   room_id: Joi.string().required().label("Room ID"),
//   showtime_date: Joi.date().required().label("Showtime Date"),
//   start_time: Joi.string().required().label("Start Time"),
//   end_time: Joi.string().required().label("End Time"),
// });

// const CreateShowTime: React.FC<Props> = ({ addShowTime }) => {
//   const [rooms, setRooms] = useState<IRoom[]>([]);

//   useEffect(() => {
//     (async () => {
//       const data = await ListRoom();
//       setRooms(data);
//     })();
//   }, []);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<IShowTime>({
//     resolver: joiResolver(showSchema),
//   });

//   const onSubmit = async (showData: IShowTime) => {
//     try {
//       // Chuyển đổi định dạng ngày
//       const formattedShowData = {
//         ...showData,
//         showtime_date: new Date(showData.showtime_date).toISOString().split("T")[0], // Format YYYY-MM-DD
//       };
//       await addShowTime(formattedShowData);
//       alert("Thêm lịch chiếu thành công!");
//     } catch (error: any) {
//       alert(`Lỗi: ${error.message || "Không thể thêm lịch chiếu"}`);
//     }
//   };
  
  
//   return (
//     <div>
//       <div className="dashboards">
//         <Logo />
//         <HeaderDashboard />
//         <div className="container-fluid">
//           <div className="row">
//             <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
//               <MenuDashboard />
//             </div>
//             <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
//               <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
//                 <h1 className="h2">Thêm Xuất Chiếu Phim</h1>
//               </div>

//               <form onSubmit={handleSubmit(onSubmit)}>
//                 {/* Movie ID Input */}
//                 <div className="mb-3">
//                   <label className="form-label">Movie ID:</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     {...register("movie_id")}
//                   />
//                   {errors.movie_id && (
//                     <div className="text-danger">{errors.movie_id.message}</div>
//                   )}
//                 </div>

//                 {/* Room Select */}
//                 <div className="form-group mb-3">
//                   <label>Chọn Phòng:</label>
//                   <select
//                     className="form-control"
//                     {...register("room_id")}
//                     defaultValue=""
//                   >
//                     <option value="" disabled>
//                       Chọn phòng
//                     </option>
//                     {rooms.map((room: IRoom) => (
//                       <option key={room.id} value={room.id}>
//                         {room.room_name}
//                       </option>
//                     ))}
//                   </select>
//                   {errors.room_id && (
//                     <div className="text-danger">{errors.room_id.message}</div>
//                   )}
//                 </div>

//                 {/* Showtime Date */}
//                 <div className="mb-3">
//                   <label className="form-label">Ngày Chiếu:</label>
//                   <input
//                     type="date"
//                     className="form-control"
//                     {...register("showtime_date")}
//                   />
//                   {errors.showtime_date && (
//                     <div className="text-danger">
//                       {errors.showtime_date.message}
//                     </div>
//                   )}
//                 </div>

//                 {/* Start Time */}
//                 <div className="mb-3">
//                   <label className="form-label">Giờ Bắt Đầu:</label>
//                   <input
//                     type="time"
//                     className="form-control"
//                     {...register("start_time")}
//                   />
//                   {errors.start_time && (
//                     <div className="text-danger">
//                       {errors.start_time.message}
//                     </div>
//                   )}
//                 </div>

//                 {/* End Time */}
//                 <div className="mb-3">
//                   <label className="form-label">Giờ Kết Thúc:</label>
//                   <input
//                     type="time"
//                     className="form-control"
//                     {...register("end_time")}
//                   />
//                   {errors.end_time && (
//                     <div className="text-danger">
//                       {errors.end_time.message}
//                     </div>
//                   )}
//                 </div>

//                 <button type="submit" className="btn btn-primary">
//                   Thêm Lịch Chiếu
//                 </button>
//               </form>
//             </main>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateShowTime;
// >>>>>>> e163f975229a920b2de0146b3830c0ffc7c1ed48
