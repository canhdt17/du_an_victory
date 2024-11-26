<<<<<<< HEAD
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
=======
// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import MenuDashboard from "../menudashboard";
// import HeaderDashboard from "../headerdashboard";
// import Logo from "../logo";
// import { ICategoryMovie } from "../../interface/categorymovie";
// import { CategoryMovie, UpdateCategoryMovies} from "../../service/categorymovie";
// import ListCategoryMovie from "./listcartegorymovie";
>>>>>>> origin/main

import { ICategoryMovie } from "../../interface/categorymovie";
import {
  CategoryMovie,
  DeleteCategoryMovie,
  UpdateCategoryMovies,
} from "../../service/categorymovie";
import ListCategoryMovie from "./listcartegorymovie";
import Logo from "../movie/logo";
import HeaderDashboard from "../movie/headerdashboard";
import MenuDashboard from "../movie/menudashboard";

// type Props = {
//   movieDel:(id:number|string) => void
// }

// const Category = ({movieDel}: Props) => {


// const Category: React.FC = () => {
//   const [categories, setCategories] = useState<ICategoryMovie[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

<<<<<<< HEAD
  // fetch
  const fetchCategories = async () => {
    try {
      const data = await CategoryMovie();
      setCategories(data?.categories || []);
    } catch (error: any) {
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setLoading(false);
    }
  };

  //update
  const updateCategoryMovies = async (
    id: number | string,
    updatedCategory: ICategoryMovie
  ): Promise<void> => {
    try {
      const data = await UpdateCategoryMovies(id, updatedCategory);
      if (data?.categories) {
        setCategories(data.categories);
      }
      await fetchCategories();
      alert("Cập nhật danh mục phim thành công!");
    } catch (error: any) {
      alert("Cập nhật danh mục phim thất bại!");
      console.error("Update Category Error:", error?.message || error);
    }
  };

  // Hàm xóa
  const deleteCategoryMovie = async (id: number | string) => {
    try {
      const confirmDelete = window.confirm(
        "Bạn có chắc chắn muốn xóa danh mục này?"
      );
      if (!confirmDelete) return;

      await DeleteCategoryMovie(id);
      alert("Xóa danh mục phim thành công!");
      setCategories(categories.filter((category) => category.id !== id));
    } catch (error) {
      console.error("Xóa danh mục phim thất bại!");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <div className="dashboards">
        <Logo />
        <HeaderDashboard />
        <div className="container-fluid">
          <div className="row">
            <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
              <MenuDashboard />
            </div>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Danh Mục Phim</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                  <div className="btn-group me-2">
                    <NavLink to={`/admin/createmovie`}>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Thêm Danh Mục
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
              {loading && <p>Loading categories...</p>}
              {error && <p>Error fetching categories: {error}</p>}
              {!loading && !error && (
                <ListCategoryMovie
                  categories={categories}
                  loading={false}
                  error={null}
                  updateCategoryMovies={updateCategoryMovies}
                  deleteCategoryMovie={deleteCategoryMovie}
                />
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};
=======


//   // fetch
//   const fetchCategories = async () => {
//     try {
//       const data = await CategoryMovie();
//       setCategories(data?.categories || []);
//     } catch (error: any) {
//       setError(error.response ? error.response.data.message : error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

// //update
//   const updateCategoryMovies = async (id: number | string, updatedCategory: ICategoryMovie) => {
//     try {
//       const data =  await UpdateCategoryMovies(id, updatedCategory);
//       setCategories(data?.categories || []);
//       await fetchCategories();
//       alert("Cập nhật danh mục phim thành công!");
//     } catch (error: any) {
//       alert("Cập nhật danh mục phim thất bại!");
//       console.error(error);
//     }
//   };
//   // Hàm xóa
// const deleteCategoryMovie = async (id: number | string) => {
//   try {
//     const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa danh mục này?");
//     if (!confirmDelete) return;

//     await DeleteCategoryMovie(id);
//     alert("Xóa danh mục phim thành công!");
//     setCategories(categories.filter((category) => category.id !== id));
//   } catch (error) {
//     console.error("Xóa danh mục phim thất bại!");
//   }
// };
  
//   useEffect(() => {
//     fetchCategories();
//   }, []);


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
//                 <h1 className="h2">Danh Mục Phim</h1>
//                 <div className="btn-toolbar mb-2 mb-md-0">
//                   <div className="btn-group me-2">
//                     <NavLink to={`/admin/createmovie`}>
//                       <button
//                         type="button"
//                         className="btn btn-sm btn-outline-secondary"
//                       >
//                         Thêm Danh Mục
//                       </button>
//                     </NavLink>
//                   </div>
//                 </div>
//               </div>
//               {loading && <p>Loading categories...</p>}
//               {error && <p>Error fetching categories: {error}</p>}
//               {!loading && !error && (
//                 <ListCategoryMovie
//                 categories={categories}
//                 loading={false}
//                 error={null}
//                 updateCategoryMovies={updateCategoryMovies}
//                 deleteCategoryMovie={deleteCategoryMovie}
//               />
              
//               )}
//             </main>
//           </div>
//         </div>
>>>>>>> origin/main

//         <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
//           <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
//             <h1 className="h2">Danh Mục Phim</h1>
//             <div className="btn-toolbar mb-2 mb-md-0">
//               <div className="btn-group me-2">
//                 <NavLink to={`/admin/createmovie`}>
//                   <button
//                     type="button"
//                     className="btn btn-sm btn-outline-secondary"
//                   >
//                    Thêm Danh Mục
//                   </button>
//                 </NavLink>
                
//               </div>
//               {/* <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1">
//          <svg className="bi"><use xlinkHref="#calendar3" /></svg>
//          Create
//        </button> */}
//             </div>
//           </div>
//                 <ListCategoryMovie movieDel={movieDel}></ListCategoryMovie>
//         </main>

//       </div>
//     </div>
//   );
// };
// }
// export default Category;
