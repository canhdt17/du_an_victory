// /* eslint-disable @typescript-eslint/no-unused-vars */
// import Joi from "joi";
// import { IShowTime } from "../../interface/shotime";
// import { useParams } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { joiResolver } from "@hookform/resolvers/joi";
// import { useEffect, useState } from "react";
// import { ShowTimeById } from "../../service/showtime";
// import Logo from "../logo";
// import HeaderDashboard from "../headerdashboard";
// import MenuDashboard from "../menudashboard";
// import { IRoom } from "../../interface/room";
// import { ListRoom } from "../../service/room";

// type Props = {
//   updateShowtimes: (id: number | string, data: IShowTime) => void;
// };

// const updateAreaSchema = Joi.object({
//   movie_id: Joi.string().required().label("Movie ID"),
//   room_id: Joi.string().required().label("Room ID"),
//   showtime_date: Joi.date().required().label("Showtime Date"),
//   start_time: Joi.string().required().label("Start Time"),
//   end_time: Joi.string().required().label("End Time"),
// });

// const UpdateShowtime: React.FC<Props> = ({ updateShowtimes }) => {
//   const { id } = useParams<{ id: string }>();
//   const [rooms, setRooms] = useState<IRoom[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [fetchError, setFetchError] = useState<string | null>(null);

//   useEffect(() => {
//     (async () => {
//       try {
//         const data = await ListRoom();
//         setRooms(data);
//       } catch (error) {
//         setFetchError("Failed to fetch rooms.");
//       }
//     })();
//   }, []);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<IShowTime>({
//     resolver: joiResolver(updateAreaSchema),
//   });

//   useEffect(() => {
//     const fetchShowtime = async () => {
//       if (id) {
//         try {
//           const data = await ShowTimeById(id);
//           reset(data); // Populate the form with fetched data
//         } catch (error) {
//           setFetchError("Failed to fetch showtime data.");
//         } finally {
//           setLoading(false);
//         }
//       }
//     };
//     fetchShowtime();
//   }, [id, reset]);

//   const onSubmit = (data: IShowTime) => {
//     if (!id) {
//       alert("ID không hợp lệ.");
//       return;
//     }

//     // Format showtime_date to "YYYY-MM-DD"
//     const formattedData = {
//       ...data,
//       showtime_date: new Date(data.showtime_date).toISOString().split("T")[0],
//     };

//     // Call the updateShowtimes function passed as a prop
//     updateShowtimes(id, formattedData);
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
//                 <h1 className="h2">Cập nhật Lịch Chiếu</h1>
//               </div>

//               <form onSubmit={handleSubmit(onSubmit)}>
//                 {loading && <p>Loading...</p>}
//                 {fetchError && <p className="text-danger">{fetchError}</p>}

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
//                 <div className="mb-3">
//                   <label className="form-label">Chọn Phòng:</label>
//                   <select
//                     className="form-control"
//                     {...register("room_id")}
//                     defaultValue=""
//                   >
//                     <option value="" disabled>
//                       Chọn phòng
//                     </option>
//                     {rooms.map((room) => (
//                       <option key={room.id} value={room.id}>
//                         {room.room_name}
//                       </option>
//                     ))}
//                   </select>
//                   {errors.room_id && (
//                     <div className="text-danger">{errors.room_id.message}</div>
//                   )}
//                 </div>

//                 {/* Date Picker */}
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

//                 {/* Time Picker for Start Time */}
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

//                 {/* Time Picker for End Time */}
//                 <div className="mb-3">
//                   <label className="form-label">Giờ Kết Thúc:</label>
//                   <input
//                     type="time"
//                     className="form-control"
//                     {...register("end_time")}
//                   />
//                   {errors.end_time && (
//                     <div className="text-danger">{errors.end_time.message}</div>
//                   )}
//                 </div>

//                 <button type="submit" className="btn btn-primary">
//                   Cập Nhật
//                 </button>
//               </form>
//             </main>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdateShowtime;
