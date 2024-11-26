// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { useParams } from "react-router-dom";
// import Joi from "joi";
// import { joiResolver } from "@hookform/resolvers/joi";
// import { ICategoryMovie } from "../../interface/categorymovie";
// import { CategoryMovieById } from "../../service/categorymovie";

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

// export default UpdateCategoryMovie;
