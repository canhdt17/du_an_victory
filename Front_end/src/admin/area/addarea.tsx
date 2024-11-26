<<<<<<< HEAD

import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { IArea } from "../../interface/area";
import Logo from "../movie/logo";
import HeaderDashboard from "../movie/headerdashboard";
import MenuDashboard from "../movie/menudashboard";
=======
// import Logo from "../logo";
// import HeaderDashboard from "../headerdashboard";
// import MenuDashboard from "../menudashboard";
// import { useForm } from "react-hook-form";
// import Joi from "joi";
// import { joiResolver } from "@hookform/resolvers/joi";
// import { IArea } from "../../movie/area";
>>>>>>> origin/main

// type Props = {
//   addArea: (area: IArea) => void;
// };
// const areaScheama = Joi.object({
//   area_name: Joi.string().required().label("Area Name"),
// });
// const AddArea: React.FC<Props> = ({ addArea }) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<IArea>({
//     resolver: joiResolver(areaScheama),
//   });

//   const onsubumit = (areaData: IArea) => {
//     addArea(areaData);
//   };
//   return (
//    <div>
//   <div classname="dashboards">
//     <div>
//       <logo />
//       <headerdashboard />
//       <div classname="container-fluid">
//         <div classname="row">
//           <div classname="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
//             <div classname="offcanvas-md offcanvas-end bg-body-tertiary" tabIndex="{-1}" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
//               <menudashboard />
//             </div>
//           </div>
//           <main classname="col-md-9 ms-sm-auto col-lg-10 px-md-4">
//             <div classname="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
//               <h1 classname="h2">Thêm Khu Vực</h1>
//               <div classname="btn-toolbar mb-2 mb-md-0" />
//             </div>
//             <form onsubmit="{handleSubmit(onsubumit)}">
//               <div classname="mb-3">
//                 <label htmlfor="exampleInputEmail1" classname="form-label">
//                   Tên Khu Vực:
//                 </label>
//                 <input type="text" classname="form-control" id="exampleInputEmail1" {...register("area_name")} />
//                 {'{'}errors.area_name &amp;&amp; (
//                 <div classname="text-danger ">
//                   {'{'}errors.area_name.message{'}'}
//                 </div>
//                 ){'}'}
//               </div>
//               <button type="submit" classname="btn btn-primary">
//                 Submit
//               </button>
//             </form>
//           </main>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

//   );
// };

// export default AddArea;
