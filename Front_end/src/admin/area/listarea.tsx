import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IArea } from '../../movie/area'
import { ListArea } from '../../service/area'

type Props = {
  delArea:(id:number|string) => void
}

const ListAreas = ({delArea}: Props) => {
  const [areas,setAreas] = useState<IArea[]>([])
  useEffect(()=>{
    (async()=>{
      const data = await ListArea()
      setAreas(data)
    })()
  },[])
  return (
    <div>
      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr className="text-center">
              <th scope="col">STT</th>
              <th scope="col">Tên Khu Vực</th>
              <th scope="col">Button</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {areas.map((area:IArea,i:number)=>(
               <tr key={area.area_id}>

                  <td>{i+1}</td>
                  <td>{area.area_name}</td>
                 
                  <td>
                  
                       <button
                        type="button"
                        className="btn btn-danger text-center " onClick={()=> delArea(area.id)}
                      >
                        Xóa
                      </button>
                     
                     <NavLink to={`/admin/area/edit/${area.id}`}>
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
  )
}

export default ListAreas