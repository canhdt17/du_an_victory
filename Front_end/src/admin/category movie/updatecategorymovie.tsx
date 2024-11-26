<<<<<<< HEAD
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { ICategoryMovie } from "../../interface/categorymovie";
import { CategoryMovieById } from "../../service/categorymovie";
import Logo from "../movie/logo";
import HeaderDashboard from "../movie/headerdashboard";
import MenuDashboard from "../movie/menudashboard";

=======
// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { useParams } from "react-router-dom";
// import Joi from "joi";
// import { joiResolver } from "@hookform/resolvers/joi";
// import { ICategoryMovie } from "../../interface/categorymovie";
// import { CategoryMovieById } from "../../service/categorymovie";
>>>>>>> origin/main

// type Props = {
//   updateCategoryMovies: (id: number | string, data: ICategoryMovie) => void;
// };

// const updateMovieSchema = Joi.object({
//   name_category: Joi.string().required().label("Category Name"),
// });

// const UpdateCategoryMovie: React.FC<Props> = ({ updateCategoryMovies }) => {
//   const { id } = useParams<{ id: string }>();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<ICategoryMovie>({
//     resolver: joiResolver(updateMovieSchema),
//   });
// <<<<<<< HEAD
 
//   const param = useParams()
//   useEffect(()=>{
//     (async()=>{
//       const data = await CategoryMovieById(param?.id as number|string)
//       reset({
//         name:data.name,
        
//       })
//     })()
//   },[])
//   const onsubumit = (categoryMovie: ICategoryMovie) => {
//    updateCategoryMovies(categoryMovie,param?.id as number|string);
   
// =======

<<<<<<< HEAD
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const data = await CategoryMovieById(id!); 
        reset(data); // Reset form
      } catch (error: any) {
        setFetchError("Không thể lấy dữ liệu danh mục.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchCategory();
  }, [id, reset]);
  

  const onSubmit = async (data: ICategoryMovie) => {
    console.log("Submitting Data:", data);
    try {
      setLoading(true);
      await updateCategoryMovies(id!, data);
      alert("Danh sách khu vực đã được cập nhật thành công!");
    } catch (error) {
      setFetchError("Cập nhật khu vực thất bại. Vui lòng thử lại.");
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
                  <h1 className="h2">Cập Nhật Danh Mục</h1>
                </div>
                {loading ? (
                  <p>Đang tải dữ liệu...</p>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {fetchError && <p className="text-danger">{fetchError}</p>}
                    <div className="mb-3">
                      <label htmlFor="categoryName" className="form-label">
                        Tên Danh Mục Phim:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="categoryName"
                        {...register("name_category")}
                      />
                      {errors.name_category && (
                        <div className="text-danger">
                          {errors.name_category.message}
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
//   const [loading, setLoading] = useState(true);
//   const [fetchError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchCategory = async () => {
//       try {
//         const data = await CategoryMovieById(id!);
//         reset(dataz);
//       } catch (error: any) {
//         // fetchError("Failed to fetch category data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCategory();
//   }, [id, reset]);

//   const onSubmit = (data: ICategoryMovie) => {
//     updateCategoryMovies(id!, data);
// >>>>>>> 53d9ae682cb6f773ce4a6a20b2b0d440a3952b64
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {loading && <p>Loading...</p>}
//       {fetchError && <p>{fetchError}</p>}
//       <div className="mb-3">
//         <label htmlFor="categoryName" className="form-label">
//           Tên Danh Mục Phim:
//         </label>
//         <input
//           type="text"
//           className="form-control"
//           id="categoryName"
//           {...register("name_category")}
//         />
//         {errors.name_category && (
//           <div className="text-danger">{errors.name_category.message}</div>
//         )}
//       </div>
//       <button type="submit" className="btn btn-primary">
//         Cập Nhật
//       </button>
//     </form>
//   );
// };
>>>>>>> origin/main

// export default UpdateCategoryMovie;
