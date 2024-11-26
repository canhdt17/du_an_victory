<<<<<<< HEAD
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { IArea } from "../../interface/area";
import { AreaById } from "../../service/area";
import Logo from "../movie/logo";
import HeaderDashboard from "../movie/headerdashboard";
import MenuDashboard from "../movie/menudashboard";


type Props = {
  updateArea: (id: number | string, dataArea: IArea) => void;
};

const updateAreaSchema = Joi.object({
  area_name: Joi.string().required().label("Area Name"),
});

const UpdateArea: React.FC<Props> = ({ updateArea }) => {
  const { id } = useParams<{ id: string }>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IArea>({
    resolver: joiResolver(updateAreaSchema),
  });

  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArea = async () => {
      try {
        const data = await AreaById(id!); 
        reset(data);
        setFetchError(null);
      } catch (error: any) {
        setFetchError("Không thể lấy dữ liệu khu vực.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchArea();
  }, [id, reset]);

  const onSubmit = async (dataArea: IArea) => {
    console.log("Submitting dataArea:", dataArea);
    try {
      setLoading(true);
      await updateArea(id!, dataArea);
      alert("Khu vực đã được cập nhật thành công!");
    } catch (error) {
      setFetchError("Cập nhật khu vực thất bại. Vui lòng thử lại.");
      console.error("Error updating area:", error);
    } finally {
      setLoading(false);
    }
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
                  <h1 className="h2">Cập Nhật Khu Vực</h1>
                </div>
                {loading ? (
                  <p>Đang tải dữ liệu...</p>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {fetchError && <p className="text-danger">{fetchError}</p>}
                    <div className="mb-3">
                      <label htmlFor="area_name" className="form-label">
                        Tên Khu Vực:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="area_name"
                        {...register("area_name")}
                      />
                      {errors.area_name && (
                        <div className="text-danger">
                          {errors.area_name.message}
                        </div>
                      )}
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Cập Nhật
                    </button>
                  </form>
                )}
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
=======
// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useEffect, useState } from "react";
// import Logo from "../logo";
// import HeaderDashboard from "../headerdashboard";
// import MenuDashboard from "../menudashboard";
// import { useForm } from "react-hook-form";
// import Joi from "joi";
// import { joiResolver } from "@hookform/resolvers/joi";
// import { AreaById } from "../../service/area";
// import { useParams } from "react-router-dom";
// import { IArea } from "../../movie/area";

// type Props = {
//   updateArea: (area_id: number | string, data: IArea) => void;
// };
// const updateAreaScheama = Joi.object({
//   area_name: Joi.string().required().label("Area Name"),
// });
// const UpdateArea: React.FC<Props> = ({ updateArea }) => {
//   const { id } = useParams<string>();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<IArea>({
//     resolver: joiResolver(updateAreaScheama),
//   });

//   const [loading, setLoading] = useState(true);
//   const [fetchError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchArea = async () => {
//       try {
//         const data = await AreaById(id!);
//         reset(data);
//       } catch (error: any) {
//         // fetchError("Failed to fetch category data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchArea();
//   }, [id, reset]);

//   const onSubmit = (data: IArea) => {
//     console.log(id);

//     updateArea(id!, data);
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
//                   <h1 className="h2">Cập nhật Khu Vực</h1>
//                   <div className="btn-toolbar mb-2 mb-md-0"></div>
//                 </div>

//                 <form onSubmit={handleSubmit(onSubmit)}>
//                   {loading && <p>Loading...</p>}
//                   {fetchError && <p>{fetchError}</p>}
//                   <div className="mb-3">
//                     <label htmlFor="exampleInputEmail1" className="form-label">
//                       Tên Khu Vực:
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="exampleInputEmail1"
//                       {...register("area_name")}
//                     />
//                     <div id="emailHelp" className="form-text">
//                       {errors.area_name && (
//                         <div className="text-danger ">
//                           {errors.area_name.message}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                   <button type="submit" className="btn btn-primary">
//                     Submit
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
>>>>>>> origin/main

// export default UpdateArea;
