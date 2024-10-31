import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ISeat } from '../../movie/seat'
import { SeatList } from '../../service/seat'

type Props = {}

const ListSeat = (props: Props) => {
    const [seats,setSeat] = useState<ISeat[]>([])
    useEffect(()=>{
        (async()=>{
            const data = await SeatList()
            setSeat(data)
        })()
    },[])
  return (
    <div>
    <div className="table-responsive small">
      <table className="table table-striped table-sm">
        <thead>
          <tr className="text-center">
            <th scope="col">STT</th>
            <th scope="col">Số Ghế</th>
            <th scope="col">Kiểu Ghế</th>
            <th scope="col">Trạng Thái</th>
            <th scope="col">Button</th>
          </tr>
        </thead>
        <tbody className="text-center">
           {seats.map((seat:ISeat,i:number)=>(
            <tr key={seat.seat_id}>
                <td>{i + 1}</td>
                <td>{seat.seat_number}</td>
                <td>{seat.seat_type_id}</td>
                <td>{seat.seat_status}</td>
                <td>
                  
                   
                   <NavLink to={`/admin/room/edit`}>
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

export default ListSeat