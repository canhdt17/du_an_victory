import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ICategoryMovie } from '../../movie/categorymovie'
import { CategoryMovie } from '../../service/categorymovie'

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
  return (
    <div>
         <div>
      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr className="text-center">
              <th scope="col">STT</th>
              <th scope="col">Tên Danh Mục</th>
              <th scope="col">Button</th>
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
    </div>
    </div>
  )
}

export default ListCategoryMovie