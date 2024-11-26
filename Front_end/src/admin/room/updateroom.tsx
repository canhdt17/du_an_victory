<<<<<<< HEAD
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useParams } from "react-router-dom";
import { IRoom } from "../../interface/room";
// import { GetRoomById } from "../../service/room";
import { GetRoomById } from "../../service/room";


import { IArea } from "../../interface/area";
import { ListArea } from "../../service/area";
import Logo from "../movie/logo";
import HeaderDashboard from "../movie/headerdashboard";
import MenuDashboard from "../movie/menudashboard";

type Props = {
  updateRoom: (id: string | number, data: IRoom) => void;
};

const roomSchema = Joi.object({
  room_name: Joi.string().required().label("Room Name"),
  area_id: Joi.string().required().label("ID Area"),
  total_seat: Joi.number().required().label("Total Seat"),
});
=======
// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import Joi from "joi";
// import { joiResolver } from "@hookform/resolvers/joi";
// import { useNavigate, useParams } from "react-router-dom";
// import { IRoom } from "../../interface/room";
// <<<<<<< HEAD
// import { IArea } from "../../movie/area";
// import { GetRoomById } from "../../service/room";
// =======
// // import { GetRoomById } from "../../service/room";
// import { GetRoomById, UpdateRoom as updateRoomService } from "../../service/room";
// >>>>>>> e163f975229a920b2de0146b3830c0ffc7c1ed48

// import Logo from "../logo";
// import HeaderDashboard from "../headerdashboard";
// import MenuDashboard from "../menudashboard";

// type Props = {
//   updateRoom: (id: string | number, data: IRoom) => void;
// };
// const roomSchema = Joi.object({
//   room_name: Joi.string().required().label("Room Name"),
//   area_id: Joi.string().required().label("ID Area"),
//   total_seat: Joi.number().required().label("Total Seat"),
// });
>>>>>>> origin/main

// const UpdateRoom: React.FC<Props> = ({ updateRoom }) => {
//   const { id } = useParams<string>();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<IRoom>({
//     resolver: joiResolver(roomSchema),
//   });

<<<<<<< HEAD
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [areas, setAreas] = useState<IArea[]>([]);

  // Fetch areas
  useEffect(() => {
    (async () => {
      try {
        const data = await ListArea();
        setAreas(data || []);
      } catch (error) {
        setFetchError("Failed to fetch areas.");
      }
    })();
  }, []);

  // Fetch room data
  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const data = await GetRoomById(id!);
        reset(data);
      } catch (error: any) {
        setFetchError("Failed to fetch room data.");
      } finally {
        setLoading(false);
      }
    };

    fetchRoom();
  }, [id, reset]);

  // Handle form submission
  const onSubmit = (data: IRoom) => {
    updateRoom(id!, data);
  };

  return (
    <div>
      <div className="dashboards">
        <div>
          <Logo />
          <HeaderDashboard />
          <div className="container-fluid">
            <div className="row">
              <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
                <div
                  className="offcanvas-md offcanvas-end bg-body-tertiary"
                  tabIndex={-1}
                  id="sidebarMenu"
                  aria-labelledby="sidebarMenuLabel"
                >
                  <MenuDashboard />
                </div>
              </div>
              <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  <h1 className="h2">Cập nhật Phòng</h1>
                  <div className="btn-toolbar mb-2 mb-md-0"></div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {loading && <p>Loading...</p>}
                  {fetchError && <p className="text-danger">{fetchError}</p>}
=======
//   const [loading, setLoading] = useState(true);
//   const [fetchError] = useState<string | null>(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchRooms = async () => {
//       try {
//         const data = await GetRoomById(id!);
//         reset(data);
//       } catch (error: any) {
//         // setFetchError("Failed to fetch room data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRooms();
//   }, [id, reset]);

//   const onSubmit = async (data: IRoom) => {
//     try {
//       if (!id) return;
//       console.log(id);
//       const updatedRoom = await updateRoomService(id, data);
//       if (updatedRoom) {
//         console.log("Room updated successfully:", updatedRoom);
//         alert("Cập nhật phòng thành công!");
//         navigate("/room");
//       }
//     } catch (error) {
//       console.error("Failed to update room:", error);
//       alert("Cập nhật phòng thất bại!");
//     }
//   };
  
//   return (
//     <div>
//       <div className="dashboards">
//         <div>
//           <Logo></Logo>
//           <HeaderDashboard></HeaderDashboard>
//           <div className="container-fluid">
//             <div className="row">
//               <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
//                 <div
//                   className="offcanvas-md offcanvas-end bg-body-tertiary"
//                   tabIndex={-1}
//                   id="sidebarMenu"
//                   aria-labelledby="sidebarMenuLabel"
//                 >
//                   <MenuDashboard></MenuDashboard>
//                 </div>
//               </div>
//               <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
//                 <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
//                   <h1 className="h2">Cập nhật Phòng </h1>
//                   <div className="btn-toolbar mb-2 mb-md-0"></div>
//                 </div>
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                   {loading && <p>Loading...</p>}
//                   {fetchError && <p className="text-danger">{fetchError}</p>}
>>>>>>> origin/main

//                   <div className="mb-3">
//                     <label htmlFor="room_name" className="form-label">
//                       Tên Phòng:
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="room_name"
//                       {...register("room_name")}
//                     />
//                     {errors.room_name && (
//                       <div className="text-danger">
//                         {errors.room_name.message}
//                       </div>
//                     )}
//                   </div>

<<<<<<< HEAD
                  <div className="mb-3">
                    <label htmlFor="area_id" className="form-label">
                      Khu Vực:
                    </label>
                    <select
                      className="form-control"
                      aria-label="Large select example"
                      {...register("area_id")}
                    >
                      <option value="">Chọn Khu Vực</option>
                      {areas.map((area: IArea, i : number) => (
                        <option key={area.area_id} value={area.area_id}>
                          {area.area_name}
                        </option>
                      ))}
                    </select>
                    {errors.area_id && (
                      <div className="text-danger">
                        {errors.area_id.message}
                      </div>
                    )}
                  </div>
=======
//                   <div className="mb-3">
//                     <label htmlFor="area_id" className="form-label">
//                       ID Khu vực:
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="area_id"
//                       {...register("area_id")}
//                     />
//                     {errors.area_id && (
//                       <div className="text-danger">
//                         {errors.area_id.message}
//                       </div>
//                     )}
//                   </div>
>>>>>>> origin/main

//                   <div className="mb-3">
//                     <label htmlFor="total_seat" className="form-label">
//                       Số Ghế:
//                     </label>
//                     <input
//                       type="number"
//                       className="form-control"
//                       id="total_seat"
//                       {...register("total_seat")}
//                     />
//                     {errors.total_seat && (
//                       <div className="text-danger">
//                         {errors.total_seat.message}
//                       </div>
//                     )}
//                   </div>

//                   <button type="submit" className="btn btn-primary">
//                     Cập nhật
//                   </button>
//                 </form>
//               </main>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdateRoom;
