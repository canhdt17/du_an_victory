import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ISeatType } from '../../movie/seat_type'
import { ListSeatTypes } from '../../service/seat_type'

type Props = {}

const ListSeatType = (props: Props) => {
    const [seattyes,setSeatTypes] = useState<ISeatType[]>([])
    useEffect(()=>{
        (async()=>{
            const data = await ListSeatTypes()
            setSeatTypes(data);
        })()
    },[])
  return (
    
    <div>
      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr className="text-center">
              <th scope="col">STT</th>
              <th scope="col">Kiểu Ghế</th>
              <th scope="col">Giá Tiền</th>
              <th scope="col">Button</th>
            </tr>
          </thead>
          <tbody className="text-center">
                {seattyes.map((seattype:ISeatType,i:number)=>(
                      <tr key={seattype.setat_type_id}>
                  <td>{i + 1}</td>
                  <td>{seattype.seat_type_name}</td>
                  <td>{seattype.seat_price}</td>
                  
                  <td>
                    
                     
                        <NavLink to={`/admin/seat_type/edit/${seattype.id}`}>
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

export default ListSeatType