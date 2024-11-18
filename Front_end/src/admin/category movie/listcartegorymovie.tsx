import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ICategoryMovie } from "../../interface/categorymovie";
import { CategoryMovie } from "../../service/categorymovie";

type Props = {

  movieDel:(id:number|string) => void
}

const ListCategoryMovie = ({movieDel}: Props) => {
    const [categorymovies,setCategoryMovies] = useState<ICategoryMovie[]>([])
    useEffect(()=>{
        (async()=>{
            const data = await CategoryMovie()
            setCategoryMovies(data)
        })()
    },[])


};





  return (
    <div className="table-responsive small">
      <table className="table table-striped table-sm">
        <thead>
          <tr className="text-center">
            <th scope="col">STT</th>
            <th scope="col">Tên Danh Mục</th>
            <th scope="col">Hành Động</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {loading && (
            <tr>
              <td colSpan={3}>Đang tải...</td>
            </tr>

          </thead>
          <tbody className="text-center">
             { Array.isArray(categorymovies) && categorymovies.map((categorymovie: ICategoryMovie, i: number) => (
                <tr key={categorymovie.id}>
                  <td>{i + 1}</td>
                  <td>{categorymovie.name}</td>
                  <td>
                    
                
                      <button
                        type="button"
                        className="btn btn-danger text-center " onClick={() => movieDel(categorymovie.id)}
                      >
                       Xóa
                      </button>
                    
                     <NavLink to={`/admin/createmovie/edit/${categorymovie.id}`}>
                      <button
                        type="button"
                        className="btn btn-warning text-center ml-3"
                      >
                        Cập nhật
                      </button>
                     </NavLink>
                      
                      
                    
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

          )}
          {error && (
            <tr>
              <td colSpan={3}>Error: {error}</td>
            </tr>
          )}
          {safeCategories.length > 0 ? (
            safeCategories.map((category, index) => (
              <tr key={category.id}>
                <td>{index + 1}</td>
                <td>{category.name_category}</td>
                <td>
                  <NavLink to={`/admin/createmovie/edit/${category.id}`}>
                    <button type="button" className="btn btn-warning me-2">
                      Cập nhật
                    </button>
                  </NavLink>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteCategoryMovie(category.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>Không có dữ liệu</td>
            </tr>
          )}
        </tbody>
      </table>

    </div>
  );
};

export default ListCategoryMovie;
