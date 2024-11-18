// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useEffect, useState } from "react";
// import HeaderDashboard from "../headerdashboard";
// import MenuDashboard from "../menudashboard";
// import Logo from "../logo";
// import { IRoom } from "../../interface/room";
// import { NavLink } from "react-router-dom";
// import { ListRoom } from "../../service/room";
// import ListRooms from "./listroom";

// <<<<<<< HEAD
// type Props = {
//   rooms: IRoom[];
//   onDel:(id:number|string) =>void
// };

// const Room = ({ rooms,onDel }: Props) => {
//   return (
//     <div>
//         <div className="dashboards">
//       <div>
//         <Logo></Logo>
//         <HeaderDashboard></HeaderDashboard>
//         <div className="container-fluid">
//           <div className="row">
//             <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
//               <div
//                 className="offcanvas-md offcanvas-end bg-body-tertiary"
//                 tabIndex={-1}
//                 id="sidebarMenu"
//                 aria-labelledby="sidebarMenuLabel"
//               >
//                 <MenuDashboard></MenuDashboard>
//               </div>
//             </div>
//             <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
//               <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
//                 <h1 className="h2">Danh Sách Phòng</h1>
//                 <div className="btn-toolbar mb-2 mb-md-0">
//                   <div className="btn-group me-2">
//                     <NavLink to={`/admin/room/createroom`}>
//                       <button
//                         type="button"
//                         className="btn btn-sm btn-outline-secondary"
//                       >
//                         Thêm Phòng
//                       </button>
//                     </NavLink>
//                     {/* <NavLink to={`/admin/area/createarea`}>
//                       <button
//                         type="button"
//                         className="btn btn-sm btn-outline-secondary"
//                       >
//                         Create Area
//                       </button>
//                     </NavLink> */}
//                   </div>
//                   {/* <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1">
//              <svg className="bi"><use xlinkHref="#calendar3" /></svg>
//              Create
//            </button> */}
//                 </div>
//               </div>
             
//               <ListRoom rooms={rooms} onDel={onDel}></ListRoom>
//             </main>
// =======

// const Room = () => {
//   const [rooms, setRooms] = useState<IRoom[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchRooms = async () => {
//       try {
//         const data = await ListRoom();
//         setRooms(data);
//         setLoading(false);
//       } catch (error: any) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };
//     fetchRooms();
//   }, []);

//   const handleDeleteRoom = (id: number | string) => {
//     setRooms(rooms.filter((room) => room.id !== id));
//   };

//   return (
//     <div className="dashboards">
//       <Logo />
//       <HeaderDashboard />
//       <div className="container-fluid">
//         <div className="row">
//           <div className="sidebar col-md-3 col-lg-2 p-0">
//             <MenuDashboard />
// >>>>>>> 53d9ae682cb6f773ce4a6a20b2b0d440a3952b64
//           </div>
//           <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
//             <div className="d-flex justify-content-between align-items-center pt-3 pb-2 mb-3 border-bottom">
//               <h1 className="h2">Danh Sách Phòng</h1>
//               <NavLink to="/admin/room/createroom">
//                 <button className="btn btn-sm btn-outline-secondary">
//                   Thêm Phòng
//                 </button>
//               </NavLink>
//             </div>
//             <ListRooms
//               rooms={rooms}
//               loading={loading}
//               error={error}
//               onDelete={handleDeleteRoom}
//             />
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Room;
