import { Route, Routes, useNavigate } from "react-router-dom"

import HomePage from "./compoents/page"
import Dashboard from "./admin/dashboard"
import MovieDetail from "./moviedetail/moviedetail"
import Room from "./admin/room/room"
import { useEffect, useState } from "react"
import { IRoom } from "./movie/room"
import { AddRoom, ListRoom, RoomUpdate } from "./service/room"
import CreateRoom from "./admin/room/createroom"
import UpdateRoom from "./admin/room/updateroom"
import CreateArea from "./admin/area/createarea"
import { IArea } from "./movie/area"
import { AddArea, ListArea } from "./service/area"
import Area from "./admin/area/area"




function App() {
  const [rooms,setRooms] = useState<IRoom[]>([])
  const [areas,setAreas] = useState<IArea[]>([])
  const navigate= useNavigate()
useEffect(()=>{
      (async()=>{
        const data = await ListRoom()
        setRooms(data)
      })()
},[])

const addRoom = async(roomData:IRoom)=>{
  try {
    const room = await AddRoom(roomData)
    alert("Thêm phòng thành công.")
    setRooms([...rooms,room])
    navigate("/room")
    
    
    
  } catch (error) {
    console.log(error);
    
  }
} 
const updateRoom = async(roomData:IRoom,id:number|string)=>{
  try {
    const roomDta = await RoomUpdate(roomData,id)
    alert("Cập nhật thành công.")
      const newrooms = rooms.map(room => (room.id == room)?roomDta:room)
      setRooms(newrooms)
      navigate('/room')
  } catch (error) {
    console.log(error);
    
  }
}
const areAdd = async(areaData:IArea)=>{
  try {
    const area = await AddArea(areaData)
    alert("Thêm khu vực thành công.")
    setAreas([...areas,area])
    navigate("/room")
    
    
    
  } catch (error) {
    console.log(error);
    
  }
}
  return (
   
    <>

    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/admin/dashboard" element={<Dashboard></Dashboard>}></Route>
      <Route path="/moviedetail" element={<MovieDetail></MovieDetail>}></Route>
      <Route path="/room" element={<Room rooms={rooms}></Room>}></Route>
      <Route path="/admin/room/createroom" element={<CreateRoom onAdd={addRoom}></CreateRoom>}></Route>
      <Route path="/admin/area/createarea" element={<CreateArea addArea={areAdd}></CreateArea>}></Route>
      <Route path="/admin/room/edit/:id" element={<UpdateRoom onUpdate={updateRoom}></UpdateRoom>}></Route>
      <Route path="/admin/area" element={<Area></Area>}></Route>
     </Routes>

    </>
   
  ) 
}

export default App
