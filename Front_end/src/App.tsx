import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./compoents/page";
import Dashboard from "./admin/dashboard";
import MovieDetail from "./moviedetail/moviedetail";

import Area from "./admin/area/area";
import CreateArea from "./admin/area/addarea";
import UpdateArea from "./admin/area/updatearea";
import Category from "./admin/category movie/category";
import AddMovieCategory from "./admin/category movie/addmoviecategory";
import UpdateCategoryMovie from "./admin/category movie/updatecategorymovie";
import SeatType from "./admin/seat_type/seat_type";
import CreateSeatType from "./admin/seat_type/create_seat_type";
import UpdateSeatType from "./admin/seat_type/updateseattype";
import Seat from "./admin/seat/Seat";
import CreateSeat from "./admin/seat/CreatSeat";
import ShowTime from "./admin/showtime/showtime";
import CrateShowTime from "./admin/showtime/createshowtime";
import UserList from "./admin/user/UserList";
import CreateUser from "./admin/user/CreatUser";
import EditUser from "./admin/user/EditUser";
import Register from "./client/auth/register";
import Login from "./client/auth/login";
import Profile from "./client/profile/profile";
import { IRoom } from "./interface/room";
import { AddRoom, ListRoom } from "./service/room";
import { IArea } from "./interface/area";
import { ISeatType } from "./interface/seat_type";
import { ICategoryMovie } from "./interface/categorymovie";
import { IShowTime } from "./interface/shotime";
import { ISeat } from "./interface/seat";
import { AddArea, AreaUpdate } from "./service/area";
import { SeatsTypeAdd, SeatsTypeUpdate } from "./service/seat_type";
import {
  AddCategoryMovie,
  UpdateCategoryMovies,
} from "./service/categorymovie";
import { ShowTimeAdd } from "./service/showtime";
import Room from "./admin/room/Room";
import CreateRoom from "./admin/room/AddRoom";
import UpdateRoom from "./admin/room/UpdateRoom";


function App() {
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const [areas, setAreas] = useState<IArea[]>([]);
  const [seatTypes, setSeatTypes] = useState<ISeatType[]>([]);
  const [categoryMovies, setCategoryMovies] = useState<ICategoryMovie[]>([]);
  const [showTimes, setShowTimes] = useState<IShowTime[]>([]);
  const [seats, setSeats] = useState<ISeat[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const roomsData = await ListRoom();
      setRooms(roomsData);
    };
    fetchData();
  }, []);

  //ROOM
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
      const roomDta = await updateRoom(roomData, id);
      alert("Cập nhật thành công.");
      const newRooms = rooms.map((room) => (room.id === id ? roomDta : room));
      setRooms(newRooms);
      navigate("/room");
    } catch (error) {
      console.log(error);
    }
  };

  //AREA
  const addArea = async (areaData: IArea) => {
    try {
      const area = await AddArea(areaData);
      alert("Thêm khu vực thành công.");
      setAreas([...areas, area]);
      navigate("/admin/area");
    } catch (error) {
      console.log(error);
    }
  };

  const updateArea = async (area_id: number | string,areaData: IArea) => {
    try {
      const areaDta = await AreaUpdate(area_id,areaData );
      alert("Cập nhật thành công.");
      const newAreas = areas.map((area) => (area.area_id === area_id ? areaDta : area));
      setAreas(newAreas);
      navigate("/admin/area");
    } catch (error) {
      console.log(error);
    }
  };

  //SEAT TYPE
  const addSeatType = async (seatTypeData: ISeatType) => {
    try {
      const seatType = await SeatsTypeAdd(seatTypeData);
      alert("Thêm kiểu ghế thành công.");
      setSeatTypes([...seatTypes, seatType]);
      navigate("/admin/seat_type");
    } catch (error) {
      console.log(error);
    }
  };

  const updateSeatType = async (
    seatTypeData: ISeatType,
    id: number | string
  ) => {
    try {
      const updatedSeatType = await SeatsTypeUpdate(seatTypeData, id);
      alert("Cập nhật thành công.");
      const newSeatTypes = seatTypes.map((seatType) =>
        seatType.id === id ? updatedSeatType : seatType
      );
      setSeatTypes(newSeatTypes);
      navigate("/admin/seat_type");
    } catch (error) {
      console.log(error);
    }
  };

  // category
  const addCategoryMovie = async (categoryMovie: ICategoryMovie) => {
    try {
      const movieType = await AddCategoryMovie(categoryMovie);
      alert("Thêm danh mục thành công.");
      setCategoryMovies([...categoryMovies, movieType]);
      navigate("/admin/category");
    } catch (error) {
      console.log(error);
    }
  };

  const updateCategoryMovie = async (
    id: number | string,
    categoryMovie: ICategoryMovie
  ) => {
    try {
      const updatedCategoryMovie = await UpdateCategoryMovies(
        categoryMovie,
        id
      );
      alert("Cập nhật thành công.");
      const newCategoryMovies = categoryMovies.map((categoryMovie) =>
        categoryMovie.id === id ? updatedCategoryMovie : categoryMovie
      );
      setCategoryMovies(newCategoryMovies);
      navigate("/admin/category");
    } catch (error) {
      console.log(error);
    }
  };

  const addShowTime = async (showTimeData: IShowTime) => {
    try {
      const showTime = await ShowTimeAdd(showTimeData);
      alert("Thêm xuất chiếu phim thành công.");
      setShowTimes([...showTimes, showTime]);
      navigate("/admin/showtime");
    } catch (error) {
      console.log(error);
    }
  };

  const addSeat = async (seatData: ISeat) => {
    try {
      const seat = await SeatAdd(seatData);
      alert("Thêm ghế phim thành công.");
      setSeats([...seats, seat]);
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
        <Route
          path="/admin/dashboard"
          element={<Dashboard></Dashboard>}
        ></Route>

        {/* chi tiet phim */}
        <Route
          path="/moviedetail"
          element={<MovieDetail></MovieDetail>}
        ></Route>

        {/* phong */}
        <Route path="/room" element={<Room rooms={rooms}></Room>}></Route>
        <Route
          path="/admin/room/createroom"
          element={<CreateRoom onAdd={addRoom}></CreateRoom>}
        ></Route>
        <Route
          path="/admin/room/edit/:id"
          element={<UpdateRoom onUpdate={updateRoom}></UpdateRoom>}
        ></Route>

        {/* Khu vuc */}
        <Route path="/admin/area" element={<Area areas = {areas}></Area>}></Route>
        <Route
          path="/admin/area/createarea"
          element={<CreateArea addArea={addArea}></CreateArea>}
        ></Route>
        <Route
          path="/admin/area/edit/:id"
          element={<UpdateArea updateArea={updateArea}></UpdateArea>}
        ></Route>

        {/* the loai - danh muc phim */}
        <Route path="/admin/category" element={<Category></Category>}></Route>
        <Route
          path="/admin/createmovie"
          element={
            <AddMovieCategory
              addCreateMovie={addCategoryMovie}
            ></AddMovieCategory>
          }
        ></Route>
        <Route
          path="/admin/createmovie/edit/:id"
          element={
            <UpdateCategoryMovie
              updateCategoryMovies={updateCategoryMovie}
            ></UpdateCategoryMovie>
          }
        ></Route>

        {/* Kieu ghe */}
        <Route path="/admin/seat_type" element={<SeatType></SeatType>}></Route>
        <Route
          path="/admin/create_type_seat"
          element={<CreateSeatType addSeatType={addSeatType}></CreateSeatType>}
        ></Route>
        <Route
          path="/admin/seat_type/edit/:id"
          element={
            <UpdateSeatType updateSeatType={updateSeatType}></UpdateSeatType>
          }
        ></Route>

        {/* ghe */}
        <Route path="/admin/seat" element={<Seat></Seat>}></Route>
        <Route
          path="/admin/creatseat"
          element={<CreateSeat addSeats={addSeat}></CreateSeat>}
        ></Route>

        {/* gio chieu */}
        <Route path="/admin/showtime" element={<ShowTime></ShowTime>}></Route>
        <Route
          path="/admin/showtime/createshowtime"
          element={<CrateShowTime addShowTime={addShowTime}></CrateShowTime>}
        ></Route>

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
