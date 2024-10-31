import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IArea } from '../../movie/area'
import { ListArea } from '../../service/area'

type Props = {}

const ListAreas = (props: Props) => {
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
               <tr key={i+1}>
                  <td>{area.area_id}</td>
                  <td>{area.area_name}</td>
                 
                  <td>
                    
                     <NavLink to={`/admin/area/edit/${area.id}`}>
                       <button
                        type="button"
                        className="btn btn-warning text-center "
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