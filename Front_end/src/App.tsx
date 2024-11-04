import { Route, Routes, useNavigate } from "react-router-dom";

import HomePage from "./compoents/page";
import Dashboard from "./admin/dashboard";
import MovieDetail from "./moviedetail/moviedetail";
import Room from "./admin/room/room";
import { useEffect, useState } from "react";
import { AddRoom, ListRoom, RoomUpdate } from "./service/room";
import CreateRoom from "./admin/room/createroom";
import UpdateRoom from "./admin/room/updateroom";
import CreateArea from "./admin/area/createarea";
import { AddArea } from "./service/area";
import Area from "./admin/area/area";
import UpdateArea from "./admin/area/updatearea";
import CreateSeat from "./admin/seat/createseat";
import SeatType from "./admin/seat_type/seat_type";
import CreateSeatType from "./admin/seat_type/create_seat_type";
import { SeatsTypeAdd, SeatsTypeUpdate } from "./service/seat_type";
import UpdateSeatType from "./admin/seat_type/updateseattype";
import Category from "./admin/category movie/category";
import AddMovieCategory from "./admin/category movie/addmoviecategory";
import {
  AddCategoryMovie,
  UpdateCategoryMovies,
} from "./service/categorymovie";
import UpdateCategoryMovie from "./admin/category movie/updatecategorymovie";
import Seat from "./admin/seat/seat";
import ShowTime from "./admin/showtime/showtime";
import CrateShowTime from "./admin/showtime/createshowtime";
import { ShowTimeAdd } from "./service/showtime";
import { SeatAdd } from "./service/seat";
import UserList from "./admin/user/UserList";
import CreateUser from "./admin/user/CreatUser";
import EditUser from "./admin/user/EditUser";
import Login from "./client/auth/login";
import Register from "./client/auth/register";
import Profile from "./client/profile/profile";
import { IRoom } from "./interface/room";
import { IArea } from "./interface/area";
import { ISeatType } from "./interface/seat_type";
import { ICategoryMovie } from "./interface/categorymovie";
import { IShowTime } from "./interface/shotime";
import { ISeat } from "./interface/seat";

function App() {
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const [areas, setAreas] = useState<IArea[]>([]);
  const [settypes, setSetTypes] = useState<ISeatType[]>([]);
  const [categorymovies, setCategoryMovies] = useState<ICategoryMovie[]>([]);
  const [showtimes, setShowtimes] = useState<IShowTime[]>([]);
  const [seats, setSeat] = useState<ISeat[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const data = await ListRoom();
      setRooms(data);
    })();
  }, []);

  const addRoom = async (roomData: IRoom) => {
    try {
      const room = await AddRoom(roomData);
      alert("Thêm phòng thành công.");
      setRooms([...rooms, room]);
      navigate("/room");
    } catch (error) {
      console.log(error);
    }
  };
  const updateRoom = async (roomData: IRoom, id: number | string) => {
    try {
      const roomDta = await RoomUpdate(roomData, id);
      alert("Cập nhật thành công.");
      const newrooms = rooms.map((room) => (room.id == room ? roomDta : room));
      setRooms(newrooms);
      navigate("/room");
    } catch (error) {
      console.log(error);
    }
  };
  const areAdd = async (areaData: IArea) => {
    try {
      const area = await AddArea(areaData);
      alert("Thêm khu vực thành công.");
      setAreas([...areas, area]);
      navigate("/admin/area");
    } catch (error) {
      console.log(error);
    }
  };
  const updateArea = async (id: number | string, areaData: IArea) => {
    try {
      const areaDta = await RoomUpdate(areaData, id);
      alert("Cập nhật thành công.");
      const newareas = areas.map((area) => (area.id == area ? areaDta : area));
      setRooms(newareas);
      navigate("/admin/area");
    } catch (error) {
      console.log(error);
    }
  };
  const seatTypeAdd = async (seatTypeData: ISeatType) => {
    try {
      const seatType = await SeatsTypeAdd(seatTypeData);
      alert("Thêm kiểu ghế thành công.");
      setSetTypes([...seatType, seatType]);

      navigate("/admin/seat_type");
    } catch (error) {
      console.log(error);
    }
  };
  const seatTypeUpdate = async (
    _seatTypeData: ISeatType,
    id: number | string
  ) => {
    try {
      const seatTypeData = await SeatsTypeUpdate(_seatTypeData, id);
      alert("Cập nhật thành công.");
      const neweattype = settypes.map((settype) =>
        settype.id == settype ? seatTypeData : settype
      );
      setSetTypes(neweattype);
      navigate("/admin/seat_type");
    } catch (error) {
      console.log(error);
    }
  };
  const addCategoryMovie = async (categoryMovie: ICategoryMovie) => {
    try {
      const movieType = await AddCategoryMovie(categoryMovie);
      alert("Thêm danh mục thành công.");
      setCategoryMovies([...categorymovies, movieType]);

      navigate("/admin/category");
    } catch (error) {
      console.log(error);
    }
  };
  const updateMoviesCategory = async (
    id: number | string,
    categoryMovie: ICategoryMovie
  ) => {
    try {
      const movieDta = await UpdateCategoryMovies(categoryMovie, id);
      alert("Cập nhật thành công.");
      const newamovies = categorymovies.map((categorymovie) =>
        categorymovie.id == categorymovie ? categorymovie : movieDta
      );
      setCategoryMovies(newamovies);
      navigate("/admin/category");
    } catch (error) {
      console.log(error);
    }
  };
  const addShowTimes = async (showData: IShowTime) => {
    try {
      const showTime = await ShowTimeAdd(showData);
      alert("Thêm xuất chiếu phim thành công.");
      setShowtimes([...showtimes, showTime]);

      navigate("/admin/showtime");
    } catch (error) {
      console.log(error);
    }
  };
  const addSeats = async (seatData: ISeat) => {
    try {
      const seatDta = await SeatAdd(seatData);
      alert("Thêm ghế phim thành công.");
      setSeat([...seats, seatDta]);

      navigate("/admin/seat");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Routes>
        {/* trang chu admin - trang giao dien phim */}
        <Route path="/" element={<HomePage></HomePage>}></Route> 
        <Route path="/admin/dashboard"element={<Dashboard></Dashboard>}></Route>
        
        {/* chi tiet phim */}
        <Route path="/moviedetail"element={<MovieDetail></MovieDetail>}></Route>

        {/* phong */}
        <Route path="/room" element={<Room rooms={rooms}></Room>}></Route>
        <Route path="/admin/room/createroom"element={<CreateRoom onAdd={addRoom}></CreateRoom>}></Route>
        <Route path="/admin/room/edit/:id"element={<UpdateRoom onUpdate={updateRoom}></UpdateRoom>}></Route>
        
        {/* Khu vuc */}
        <Route path="/admin/area/createarea"element={<CreateArea addArea={areAdd}></CreateArea>}></Route>
        <Route path="/admin/area" element={<Area></Area>}></Route>
        <Route path="/admin/area/edit/:id"element={<UpdateArea updateArea={updateArea}></UpdateArea>}></Route>
        
        {/* the loai - danh muc phim */}
        <Route path="/admin/category" element={<Category></Category>}></Route>
        <Route path="/admin/createmovie"element={<AddMovieCategory addCreateMovie={addCategoryMovie}></AddMovieCategory>}></Route>
        <Route path="/admin/createmovie/edit/:id"element={<UpdateCategoryMovie updateCategoryMovies={updateMoviesCategory}></UpdateCategoryMovie>}></Route>
        
        {/* Kieu ghe */}
        <Route path="/admin/seat_type" element={<SeatType></SeatType>}></Route>
        <Route path="/admin/create_type_seat"element={<CreateSeatType addSeatType={seatTypeAdd}></CreateSeatType>}></Route>
        <Route path="/admin/seat_type/edit/:id"element={<UpdateSeatType updateSeatType={seatTypeUpdate}></UpdateSeatType>}></Route>
        
        {/* ghe */}
        <Route path="/admin/seat" element={<Seat></Seat>}></Route>
        <Route path="/admin/creatseat" element={<CreateSeat addSeats={addSeats}></CreateSeat>}></Route>
        
        {/* gio chieu */}
        <Route path="/admin/showtime" element={<ShowTime></ShowTime>}></Route>
        <Route path="/admin/showtime/createshowtime"element={<CrateShowTime addShowTime={addShowTimes}></CrateShowTime>}></Route>

        {/* admin / quan li nguoi dung */}
        <Route path="/admin/user" element={<UserList />} />
        <Route path="/admin/createuser" element={<CreateUser />} />
        <Route path="/admin/edituser/:id" element={<EditUser />} />

        {/* client */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
