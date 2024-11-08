import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ISeat } from '../../movie/seat'
import { SeatList } from '../../service/seat'

type Props = {
  seatDel:(id:number|string) => void
}

const ListSeat = ({seatDel}: Props) => {
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
            <th scope="col">Số Phòng</th>
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
                <td>{seat.room_id}</td>
                <td>{seat.seat_status}</td>
                <td>
                
                    <button
                      type="button"
                      className="btn btn-danger text-center " onClick={()=> seatDel(seat.id)}
                    >
                      Xóa
                    </button>
                  
                   
                   <NavLink to={`/admin/seat/edit/${seat.id}`}>
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

export default ListSeat