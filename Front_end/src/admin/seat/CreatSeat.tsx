
import MenuDashboard from "../menudashboard";
import HeaderDashboard from "../headerdashboard";
import Logo from "../logo";
import { useEffect, useState } from "react";
import { ISeat } from "../../interface/seat"; 
import { useForm } from "react-hook-form";
import { ISeatType } from "../../interface/seat_type"; 
import { IRoom } from "../../interface/room"; 
import { ListSeatTypes } from "../../service/seat_type";
import { ListRoom } from "../../service/room";

type Props ={
  addSeats:(seatData:ISeat) => void,
}

const CreateSeat = ({addSeats}:Props) => {
const {register,handleSubmit,formState:{errors}} = useForm<ISeat>([]);
const onsubmit = (seatData:ISeat)=>{
  addSeats(seatData)
}
const [seattyes,setSeatTypes] = useState<ISeatType[]>([])
useEffect(()=>{
    (async()=>{
        const data = await ListSeatTypes()  
        setSeatTypes(data);
    })()
},[])
const [rooms,setRooms] = useState<IRoom[]>([])
useEffect(()=>{
      (async()=>{
        const data = await ListRoom()
        setRooms(data)
      })()
},[])
  return (
   <div>
     <div className="dashboards">
      <div>
        <Logo></Logo>
        <HeaderDashboard></HeaderDashboard>
        <div className="container-fluid">
          <div className="row">
            <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
              <div
                className="offcanvas-md offcanvas-end bg-body-tertiary"
                tabIndex={-1}
                id="sidebarMenu"
                aria-labelledby="sidebarMenuLabel"
              >
                <MenuDashboard></MenuDashboard>
              </div>
            </div>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Thêm Ghế</h1>
                <div className="btn-toolbar mb-2 mb-md-0"></div>
              </div>
              <form onSubmit={handleSubmit(onsubmit)}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Số Ghế:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                   {...register("seat_number")}
                  />
                  <div id="emailHelp" className="form-text">
                    {errors.seat_number && (
                      <div className="text-danger ">
                        {errors.seat_number.message}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Kiểu Ghế:
                  </label>

                  <select
                    className="form-control"
                    aria-label="Large select example"
                    {...register("seat_type_id")}
                  >
                  
                    {seattyes.map((seattye: ISeatType, i: number) => (
                      <option key={i + 1} value={seattye.setat_type_id}>
                        {seattye.seat_type_name}
                      </option>
                    ))}
                  </select>

                  {/* <div id="emailHelp" className="form-text">
                    {errors.seat_number && (
                      <div className="text-danger ">
                        {errors.seat_number.message}
                      </div>
                    )}
                  </div> */}
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Số Phòng:
                  </label>
                  <select
                    className="form-control"
                    aria-label="Large select example"
                    {...register("room_id")}
                  >
                    {rooms.map((room: IRoom, i: number) => (
                      <option key={i + 1} value={room.room_id}>
                        {room.room_name}
                      </option>
                    ))}
                  </select>
                
                  {/* <div id="emailHelp" className="form-text">
                    {errors.room_id && (
                      <div className="text-danger ">
                        {errors.room_id.message}
                      </div>
                    )}
                  </div> */}
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Trạng Thái Ghế:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    {...register("seat_status")}
                  />
                  <div id="emailHelp" className="form-text">
                    {errors.seat_status && (
                      <div className="text-danger ">
                        {errors.seat_status.message}
                      </div>
                    )}
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </main>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default CreateSeat;
