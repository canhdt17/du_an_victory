import { Route, Routes, useNavigate } from "react-router-dom"

import HomePage from "./compoents/page"


import Room from "./admin/room/room"
import { useEffect, useState } from "react"
import { IRoom } from "./movie/room"
import { AddRoom, DeleteRoom, ListRoom, RoomUpdate } from "./service/room"
import CreateRoom from "./admin/room/createroom"
import UpdateRoom from "./admin/room/updateroom"
import CreateArea from "./admin/area/createarea"
import { IArea } from "./movie/area"
import { AddArea, AreaDelete, AreaUpdate } from "./service/area"
import Area from "./admin/area/area"
import UpdateArea from "./admin/area/updatearea"
import CreateSeat from "./admin/seat/createseat"
import SeatType from "./admin/seat_type/seat_type"
import CreateSeatType from "./admin/seat_type/create_seat_type"
import { ISeatType } from "./movie/seat_type"
import { SeatsTypeAdd, SeatsTypeDelete, SeatsTypeUpdate } from "./service/seat_type"
import UpdateSeatType from "./admin/seat_type/updateseattype"
import Category from "./admin/category movie/category"
import AddMovieCategory from "./admin/category movie/addmoviecategory"
import { ICategoryMovie } from "./movie/categorymovie"
import { AddCategoryMovie, CategoryMovieDel, UpdateCategoryMovies } from "./service/categorymovie"
import UpdateCategoryMovie from "./admin/category movie/updatecategorymovie"
import Seat from "./admin/seat/seat"
import ShowTime from "./admin/showtime/showtime"
import CrateShowTime from "./admin/showtime/createshowtime"
import { IShowTime } from "./movie/shotime"
import { ShowTimeAdd, ShowTimeDelete } from "./service/showtime"
import { ISeat } from "./movie/seat"
import { SeatAdd, SeatDelete, SeatUpdate } from "./service/seat"
import UpdateSeat from "./admin/seat/updateseat"
import Signup from "./client/siggnup"
import Signin from "./client/signin"
import News from "./admin/news/news"
import CreateNews from "./admin/news/createnews"
import { INews } from "./movie/news"
import { AddNews, DeleteNews, UpdateNews } from "./service/news"
import UpdateNew from "./admin/news/updatenews"
import TinTuc from "./compoents/news"
import Promotion from "./compoents/khuyenmai"
import Details from "./compoents/details/details"





function App() {
  const [rooms,setRooms] = useState<IRoom[]>([])
  const [areas,setAreas] = useState<IArea[]>([])
  const [settypes,setSetTypes] = useState<ISeatType[]>([])
  const [categorymovies,setCategoryMovies] = useState<ICategoryMovie[]>([])
  const [showtimes,setShowtimes] = useState<IShowTime[]>([])
  const [seats,setSeat] = useState<ISeat[]>([])
  const [seattyes,setSeatTypes] = useState<ISeatType[]>([])
  const [news,setNews] = useState<INews[]>([])
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
const delRoom = async(id:number|string)=>{
  try {
    const confirm = window.confirm("Bạn muốn xóa không?")
    if(confirm){
      const room = await DeleteRoom(id);
      alert("Xóa Thành Công")
      const newrooms = rooms.filter(room =>room.id !== id)
      setRooms(newrooms)
    }
  } catch (error) {
    console.log(error);
    
  }
}
const areAdd = async(areaData:IArea)=>{
  try {
    const area = await AddArea(areaData)
    alert("Thêm khu vực thành công.")
    setAreas([...areas,area])
    navigate("/admin/area") 
  } catch (error) {
    console.log(error);
    
  }
}
const updateAreas = async(areaData:IArea,id:number|string)=>{
  try {
    const dataArea = await AreaUpdate(areaData,id)
    alert("Cập nhật thành công.")
      const newarea = areas.map(area => (area.id == area)?dataArea:area)
      setAreas(newarea)
      navigate('/admin/area')
  } catch (error) {
    console.log(error);
    
  }
}
const areaDel = async(id:number|string)=>{
  try {
    const confirm = window.confirm("Bạn muốn xóa không?")
    if(confirm){
      const area = await AreaDelete(id);
      alert("Xóa Thành Công")
      const newareas = areas.filter(area =>area.id !== id)
      setAreas(newareas)
    }
  } catch (error) {
    console.log(error);
    
  }
}
const seatTypeAdd = async(seatTypeData:ISeatType)=>{
  try {
    const seatType = await SeatsTypeAdd(seatTypeData)
    alert("Thêm kiểu ghế thành công.")
    setSetTypes([...seattyes,seatType])
    
    navigate("/admin/seat_type")

    
  } catch (error) {
    console.log(error);
    
  }
}
const seatTypeUpdate = async(seatType:ISeatType,id:number|string)=>{
  try {
    const seatTypeData = await SeatsTypeUpdate(seatType,id)
    alert("Cập nhật thành công.")
      const neweattype = settypes.map(settype => (settype.id == settype)?seatTypeData:settype)
      setSetTypes(neweattype)
      navigate('/admin/seat_type')
  } catch (error) {
    console.log(error);
    
  }
}
const seatTypeDel = async(id:number|string)=>{
  try {
    const confirm = window.confirm("Bạn muốn xóa không?")
    if(confirm){
      const seattype = await SeatsTypeDelete(id);
      alert("Xóa Thành Công")
      const newseattype = seattyes.filter(seattype =>seattype.id !== id)
      setSeatTypes(newseattype)
    }
  } catch (error) {
    console.log(error);
    
  }
}
const addCategoryMovie = async(categoryMovie:ICategoryMovie)=>{
  try {
    const movieType = await AddCategoryMovie(categoryMovie)
    alert("Thêm danh mục thành công.")
    setCategoryMovies([...categorymovies,movieType])
    
    navigate("/admin/category")

    
  } catch (error) {
    console.log(error);
    
  }
}
const updateMoviesCategory = async(id:number|string,categoryMovie:ICategoryMovie)=>{
  try {
    const category = await UpdateCategoryMovies(categoryMovie,id)
    alert("Cập nhật thành công.")
      const newcategory = categorymovies.map(categorymovie => (categorymovie.id == categorymovie)?categorymovie:category)
      setCategoryMovies(newcategory)
      navigate('/admin/category')
  } catch (error) {
    console.log(error);
    
  }
}
const delCategoryMovie = async(id:number|string)=>{
  try {
    const confirm = window.confirm("Bạn muốn xóa không?")
    if(confirm){
      const category = await CategoryMovieDel(id);
      alert("Xóa Thành Công")
      const newcategorymovies = categorymovies.filter(category =>category.id !== id)
      setCategoryMovies(newcategorymovies)
    }
  } catch (error) {
    console.log(error);
    
  }
}
const addShowTimes = async(showData:IShowTime)=>{
  try {
    const showtime = await ShowTimeAdd(showData)
    alert("Thêm xuất chiếu phim thành công.")
    setShowtimes([...showtimes,showtime])
    
    navigate("/admin/showtime")
    

    
  } catch (error) {
    console.log(error);
    
  }
}
const delShowTime = async(id:number|string)=>{
  try {
    const confirm = window.confirm("Bạn muốn xóa không?")
    if(confirm){
      const timeShow = await ShowTimeDelete(id);
      alert("Xóa Thành Công")
      const newtime = seats.filter(timeShow =>timeShow.id !== id)
      setShowtimes(newtime)
    }
  } catch (error) {
    console.log(error);
    
  }
}
const addSeats = async(seatData:ISeat)=>{
  try {
    const seatDta = await SeatAdd(seatData)
    alert("Thêm ghế phim thành công.")
    setSeat([...seats,seatDta])
    
    navigate("/admin/seat")

    
  } catch (error) {
    console.log(error);
    
  }
}
const seatUpdate = async(id:number|string,seatData:ISeat)=>{
  try {
    const seatDta = await SeatUpdate(seatData,id)
    alert("Cập nhật thành công.")
      const newseats = seats.map(seat => (seat.id == seat)?seatDta:seat)
      setSeat(newseats)
      navigate('/admin/seat')
  } catch (error) {
    console.log(error);
    
  }
}
const delSeat = async(id:number|string)=>{
  try {
    const confirm = window.confirm("Bạn muốn xóa không?")
    if(confirm){
      const seat = await SeatDelete(id);
      alert("Xóa Thành Công")
      const newseat = seats.filter(seat =>seat.id !== id)
      setSeatTypes(newseat)
    }
  } catch (error) {
    console.log(error);
    
  }
}
const addNews = async(newsData:INews)=>{
  try {
    const newData = await AddNews(newsData)
    alert("Thêm tin tức thành công.")
    setNews([...news,newData])
    
    navigate("/admin/tintuc")

    
  } catch (error) {
    console.log(error);
    
  }
}
const newsDel = async(id:number|string)=>{
  try {
    const confirm = window.confirm("Bạn muốn xóa không?")
    if(confirm){
      const tintuc = await DeleteNews(id);
      alert("Xóa Thành Công")
      const newtintuc = news.filter(tintuc =>tintuc.id !== id)
      setNews(newtintuc)
    }
  } catch (error) {
    console.log(error);
    
  }
}
const updateNews = async(id:number|string,newsData:INews)=>{
  try {
    const tinTuc = await UpdateNews(newsData,id)
    alert("Cập nhật thành công.")
      const newtintuc = news.map(tintuc => (tintuc.id == tintuc)?tinTuc:tintuc)
      setNews(newtintuc)
      navigate('/admin/tintuc')
  } catch (error) {
    console.log(error);
    
  }
}
  return (
   
    <>

    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/admin/tintuc" element={<News delNews={newsDel}></News>}></Route>
      <Route path="/room" element={<Room rooms={rooms} onDel={delRoom}></Room>}></Route>
      <Route path="/admin/room/createroom" element={<CreateRoom onAdd={addRoom}></CreateRoom>}></Route>
      <Route path="/admin/area/createarea" element={<CreateArea addArea={areAdd}></CreateArea>}></Route>
      <Route path="/admin/room/edit/:id" element={<UpdateRoom onUpdate={updateRoom}></UpdateRoom>}></Route>
      <Route path="/admin/area" element={<Area delArea={areaDel}></Area>}></Route>
      <Route path="/admin/area/edit/:id" element={<UpdateArea updateArea={updateAreas}></UpdateArea>}></Route>
      <Route path="/admin/category" element={<Category movieDel={delCategoryMovie}></Category>}></Route>
      <Route path="/admin/creatseat" element={<CreateSeat addSeats={addSeats}></CreateSeat>}></Route>
      <Route path="/admin/seat/edit/:id" element={<UpdateSeat updateSeat={seatUpdate}></UpdateSeat>}> </Route>
      <Route path="/admin/seat_type" element={<SeatType typeDel={seatTypeDel}></SeatType>}></Route>
      <Route path="/admin/create_type_seat" element={<CreateSeatType addSeatType={seatTypeAdd}></CreateSeatType>}></Route>
      <Route path="/admin/seat_type/edit/:id" element={<UpdateSeatType updateSeatType={seatTypeUpdate}></UpdateSeatType>}></Route>
      <Route path="/admin/createmovie" element={<AddMovieCategory addCreateMovie={addCategoryMovie}></AddMovieCategory>}></Route>
      <Route path="/admin/createmovie/edit/:id" element={<UpdateCategoryMovie updateCategoryMovies={updateMoviesCategory}></UpdateCategoryMovie>}></Route>
      <Route path="/admin/seat" element={<Seat seatDel={delSeat}></Seat>}></Route>
      <Route path="/admin/showtime" element={<ShowTime showDel={delShowTime}></ShowTime>}></Route>
      <Route path="/admin/showtime/createshowtime" element={<CrateShowTime addShowTime={addShowTimes}></CrateShowTime>}></Route>
      <Route path="/client/dangki" element={<Signup></Signup>}></Route>
      <Route path="/client/dangnhap" element={<Signin></Signin>}></Route>
      <Route path="/admin/news/createnews" element={<CreateNews newsAdd={addNews}></CreateNews>}></Route>
      <Route path="/admin/news/updatenews/:id" element={<UpdateNew newsUpdate={updateNews}></UpdateNew>}></Route>
      <Route path="/tintuc" element={<TinTuc></TinTuc>}></Route>
      <Route path="/client/khuyenmai" element={<Promotion></Promotion>}></Route>
      <Route path="/client/details/:id" element={<Details></Details>}></Route>
     </Routes>
     
    </>
   
  ) 
}

export default App
