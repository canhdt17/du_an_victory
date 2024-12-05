/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./compoents/page";


import Area from "./admin/area/area";
import CreateArea from "./admin/area/addarea";
import UpdateArea from "./admin/area/updatearea";
import Category from "./admin/category movie/category";
import AddMovieCategory from "./admin/category movie/addmoviecategory";
import UpdateCategoryMovie from "./admin/category movie/updatecategorymovie";
import SeatType from "./admin/seat_type/SeatTypes";
import CreateSeatType from "./admin/seat_type/AddSeatTypes";
import UpdateSeatType from "./admin/seat_type/UpdateSeatTypes";
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
import { ShowTimeAdd, ShowTimeUpdate } from "./service/showtime";
import Room from "./admin/room/room";
import CreateRoom from "./admin/room/AddRoom";
import UpdateRoom from "./admin/room/updateroom";
import { SeatAdd, SeatUpdate } from "./service/seat";
import AddSeat from "./admin/seat/AddSeat";
import UpdateSeat from "./admin/seat/UpdateSeat";
import Seat from "./admin/seat/seat";
import { IMovie } from "./interface/movie";
import { MovieAdd, MovieUpdate } from "./service/movie";

import UpdateShowtime from "./admin/showtime/updateshowtime";
import Dashboard from "./admin/movie/dashboard";
import AddMovie from "./admin/movie/Addmovie";
import EditMovie from "./admin/movie/EditMovie";

import DetailNews from "./compoents/detail-news/news";
import News from "./compoents/detail-news/news";
import Promotions from "./compoents/promotions/promotions";
import DetailPromotions from "./compoents/promotions/detail-promotions";

import Product from "./compoents/product";
import SelectMovie from "./compoents/selectMovie";
import Payment from "./compoents/payment";
import User from "./client/user/user";
import Showtimes from "./compoents/showtimes/showtimes";
import ShowtimesId from "./compoents/showtimes/showtimesid";
import MovieDetail from "./compoents/moviedetail/moviedetail";
import LoginPage from "./client/auth/login";



function App() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const [areas, setAreas] = useState<IArea[]>([]);
  const [seatTypes, setSeatTypes] = useState<ISeatType[]>([]);
  const [categoryMovies, setCategoryMovies] = useState<ICategoryMovie[]>([]);
  const [showTimes, setShowTimes] = useState<IShowTime[]>([]);
  const [seats, setSeats] = useState<ISeat[]>([]);
  const navigate = useNavigate();

  //Danh muc phim
  const addMovie = async (movieData: IMovie) => {
    try {
      const movie = await MovieAdd(movieData);
      alert("Thêm phim thành công.");
      setMovies([...movies, movie]);
      navigate("/admin/dashboard");
    } catch (error) {
      console.log(error);
      alert("Lỗi khi thêm phim.");
    }
  };

  const editMovie = async (id: number | string, movieData: IMovie) => {
    try {
      const movieDta = await MovieUpdate(id, movieData);
      alert("Cập nhật thành công.");
      const newMovies = movies.map((movie) =>
        movie.id == id ? movieDta : movie
      );
      setMovies(newMovies);
      navigate("/admin/dashboard");
    } catch (error) {
      console.log(error);
      alert("Lỗi khi cập nhật phim.");
    }
  };

  //ROOM
  useEffect(() => {
    const fetchData = async () => {
      const roomsData = await ListRoom();
      setRooms(roomsData);
    };
    fetchData();
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

  const updateRoom = async (id: number | string, roomData: IRoom) => {
    try {
      const roomDta = await UpdateRoom(id, roomData);
      alert("Cập nhật thành công.");
      const newRooms = rooms.map((room) => (room.id === id ? roomDta : room));
      setRooms(newRooms);
      navigate("/room");
    } catch (error) {
      console.log(error);
    }
  };

  //AREA - KHU VỰC ( DONE )
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

  const updateArea = async (area_id: number | string, areaData: IArea) => {
    try {
      const areaDta = await AreaUpdate(area_id, areaData);
      alert("Cập nhật thành công.");
      const newAreas = areas.map((area) =>
        area.area_id === area_id ? areaDta : area
      );
      setAreas(newAreas);
      navigate("/admin/area");
    } catch (error) {
      console.log(error);
    }
  };

  //SEAT TYPE - KIỂU GHẾ ()
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

  // CATEGORY - DANH MỤC ( DONE )
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
        categoryMovie.cate_id === id ? updatedCategoryMovie : categoryMovie
      );
      setCategoryMovies(newCategoryMovies);
      navigate("/admin/category");
    } catch (error) {
      console.log(error);
    }
  };

  // SHOWTIME
  const addShowTime = async (showTimeData: IShowTime) => {
    try {
      const showTime = await ShowTimeAdd(showTimeData);
      alert("Thêm xuất chiếu phim thành công.");
      setShowTimes([...showTimes, showTime]);
      navigate("/admin/showtime");
    } catch (error: any) {
      console.error(error);
      alert(`Lỗi khi thêm xuất chiếu phim: ${error.message}`);
    }
  };

  const updateShowtime = async (
    showtimeDta: IShowTime,
    id: number | string
  ) => {
    try {
      const updatedShowtime = await ShowTimeUpdate(showtimeDta, id);
      alert("Cập nhật xuất chiếu phim thành công.");
      const newShowtimes = showTimes.map((showtime) =>
        showtime.id === id ? updatedShowtime : showtime
      );
      setShowTimes(newShowtimes);
      navigate("/admin/showtime");
    } catch (error: any) {
      console.error(error);
      alert(`Lỗi khi cập nhật xuất chiếu phim: ${error.message}`);
    }
  };

  //SEAT - GHẾ ( )
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
  const updateSeat = async (seatData: ISeat, id: number | string) => {
    try {
      const updatedSeat = await SeatUpdate(seatData, id);
      alert("Cập nhật ghế thành công.");
      const newSeats = seats.map((seat) =>
        seat.id === id ? updatedSeat : seat
      );
      setSeats(newSeats);
      navigate("/admin/seat");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Routes>
        {/* trang chu admin - trang giao dien phim - phim  */}
        <Route path="/" element={<HomePage><Product></Product></HomePage>}></Route>
        <Route path="/select-movie" element={<HomePage><SelectMovie></SelectMovie></HomePage>}></Route>
        <Route path="/payment" element={<HomePage><Payment></Payment></HomePage>}></Route>
        <Route
          path="/admin/dashboard"
          element={<Dashboard></Dashboard>}
        ></Route>
        <Route
          path="/admin/dashboard/addmovie"
          element={<AddMovie onAddMovie={addMovie}></AddMovie>}
        ></Route>
        <Route
          path="/admin/dashboard/edit/:id"
          element={<EditMovie onEditMovie={editMovie}></EditMovie>}
        ></Route>

        {/* chi tiet phim */}
        <Route
          path="/moviedetail"
          element={<MovieDetail></MovieDetail>}
        ></Route>

        {/* phong */}
        <Route path="/room" element={<Room></Room>}></Route>
        <Route
          path="/admin/room/createroom"
          element={<CreateRoom onAdd={addRoom}></CreateRoom>}
        ></Route>
        <Route
          path="/admin/room/edit/:id"
          element={<UpdateRoom updateRoom={updateRoom}></UpdateRoom>}
        ></Route>

        {/* Khu vuc */}
        <Route path="/admin/area" element={<Area></Area>}></Route>
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
          element={<CreateSeatType addSeatTypes={addSeatType}></CreateSeatType>}
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
          element={
            <AddSeat
              addCreateSeat={addSeat}
              seat_types={[]}
              rooms={[]}
            ></AddSeat>
          }
        ></Route>
        <Route
          path="/admin/seat/edit/:id"
          element={
            <UpdateSeat
              updateSeats={updateSeat}
              seat_types={[]}
              rooms={[]}
            ></UpdateSeat>
          }
        ></Route>

        {/* gio chieu */}
        <Route path="/admin/showtime" element={<ShowTime></ShowTime>}></Route>
        <Route
          path="/admin/showtime/createshowtime"
          element={<CrateShowTime addShowTime={addShowTime} />}
        />
        <Route
          path="/admin/showtime/edit/:id"
          element={<UpdateShowtime updateShowtimes={updateShowtime} />}
        />

        {/* admin / quan li nguoi dung */}
        <Route path="/admin/user" element={<UserList />} />
        <Route path="/admin/createuser" element={<CreateUser />} />
        <Route path="/admin/edituser/:id" element={<EditUser />} />

        {/* client */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/news" element={<News></News>}></Route>
        <Route path="/news/:id" element={<DetailNews></DetailNews>}></Route>
        <Route path="/promotions" element={<Promotions></Promotions>}></Route>
        <Route path="/promotions/:id" element={<DetailPromotions></DetailPromotions>}></Route>
        <Route path="/user" element={<User></User>}></Route>
        <Route path="/showtimes" element={<Showtimes></Showtimes>}></Route>
        <Route path="/showtimes/:id" element={<Showtimes></Showtimes>}></Route>
        <Route path="/movie-detail/:id" element={<MovieDetail></MovieDetail>}></Route>
      </Routes>
    </>
  );
}

export default App;
