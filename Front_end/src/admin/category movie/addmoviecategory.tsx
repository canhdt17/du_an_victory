// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { ICategoryMovie } from '../../interface/categorymovie';
// import { joiResolver } from '@hookform/resolvers/joi';
// import Joi from 'joi';

// type Props = {
//   addCreateMovie: (category: ICategoryMovie) => void;
// };

// const createMovieSchema = Joi.object({
//   name_category: Joi.string().required().label('Category Name'),
// });

// const AddMovieCategory: React.FC<Props> = ({ addCreateMovie }) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<ICategoryMovie>({
//     resolver: joiResolver(createMovieSchema),
//   });

//   const onSubmit = (data: ICategoryMovie) => {
//     addCreateMovie(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div className="mb-3">
//         <label htmlFor="categoryName" className="form-label">
//           Tên Danh Mục:
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
//         Thêm
//       </button>
//     </form>
//   );
// };

// export default AddMovieCategory;
