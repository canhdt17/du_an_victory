<<<<<<< HEAD

// import { Route, Routes, useNavigate } from "react-router-dom"

// import HomePage from "./compoents/page"


// import Room from "./admin/room/room"
// import { useEffect, useState } from "react"
// import { IRoom } from "./movie/room"
// import { AddRoom, DeleteRoom, ListRoom, RoomUpdate } from "./service/room"
// import CreateRoom from "./admin/room/createroom"
// import UpdateRoom from "./admin/room/updateroom"
// import CreateArea from "./admin/area/createarea"
// import { IArea } from "./movie/area"
// import { AddArea, AreaDelete, AreaUpdate } from "./service/area"
// import Area from "./admin/area/area"
// import UpdateArea from "./admin/area/updatearea"
// import CreateSeat from "./admin/seat/createseat"
// import SeatType from "./admin/seat_type/seat_type"
// import CreateSeatType from "./admin/seat_type/create_seat_type"
// import { ISeatType } from "./movie/seat_type"
// import { SeatsTypeAdd, SeatsTypeDelete, SeatsTypeUpdate } from "./service/seat_type"
// import UpdateSeatType from "./admin/seat_type/updateseattype"
// import Category from "./admin/category movie/category"
// import AddMovieCategory from "./admin/category movie/addmoviecategory"
// import { ICategoryMovie } from "./movie/categorymovie"
// import { AddCategoryMovie, CategoryMovieDel, UpdateCategoryMovies } from "./service/categorymovie"
// import UpdateCategoryMovie from "./admin/category movie/updatecategorymovie"
// import Seat from "./admin/seat/seat"
// import ShowTime from "./admin/showtime/showtime"
// import CrateShowTime from "./admin/showtime/createshowtime"
// import { IShowTime } from "./movie/shotime"
// import { ShowTimeAdd, ShowTimeDelete } from "./service/showtime"
// import { ISeat } from "./movie/seat"
import { SeatAdd, SeatDelete, SeatUpdate } from "./service/seat"
// import UpdateSeat from "./admin/seat/updateseat"
import Signup from "./client/siggnup"
import Signin from "./client/signin"
// import News from "./admin/news/news"
// import CreateNews from "./admin/news/createnews"
import { INews } from "./movie/news"
import { AddNews, DeleteNews, UpdateNews } from "./service/news"
// import UpdateNew from "./admin/news/updatenews"
import TinTuc from "./compoents/news"
import Promotion from "./compoents/khuyenmai"
import Details from "./compoents/details/details"


=======
/* eslint-disable @typescript-eslint/no-explicit-any */
>>>>>>> e163f975229a920b2de0146b3830c0ffc7c1ed48
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./compoents/page";
// import Dashboard from "./admin/dashboard";
// import MovieDetail from "./moviedetail/moviedetail";

<<<<<<< HEAD

// import Area from "./admin/area/area";
// import CreateArea from "./admin/area/addarea";
// import UpdateArea from "./admin/area/updatearea";
// import Category from "./admin/category movie/category";
// import AddMovieCategory from "./admin/category movie/addmoviecategory";
// import UpdateCategoryMovie from "./admin/category movie/updatecategorymovie";
// import SeatType from "./admin/seat_type/seat_type";
// import CreateSeatType from "./admin/seat_type/create_seat_type";
// import UpdateSeatType from "./admin/seat_type/updateseattype";
// import CreateSeat from "./admin/seat/CreatSeat";
// import ShowTime from "./admin/showtime/showtime";
// import CrateShowTime from "./admin/showtime/createshowtime";
// import UserList from "./admin/user/UserList";
// import CreateUser from "./admin/user/CreatUser";
// import EditUser from "./admin/user/EditUser";
=======
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
>>>>>>> e163f975229a920b2de0146b3830c0ffc7c1ed48
import Register from "./client/auth/register";
import Login from "./client/auth/login";
import Profile from "./client/profile/profile";
import { IRoom } from "./interface/room";
import { AddRoom, ListRoom } from "./service/room";
import { IArea } from "./movie/area";
// import { ISeatType } from "./interface/seat_type";
import { ICategoryMovie } from "./interface/categorymovie";
// import { IShowTime } from "./interface/shotime";
// import { ISeat } from "./interface/seat";
import { AddArea, AreaUpdate } from "./service/area";
import { SeatsTypeAdd, SeatsTypeUpdate } from "./service/seat_type";
import {
  AddCategoryMovie,
  UpdateCategoryMovies,
} from "./service/categorymovie";
<<<<<<< HEAD
import { ShowTimeAdd } from "./service/showtime";
import { ISeat } from "./movie/seat"
import { ISeatType } from "./movie/seat_type"
import { IShowTime } from "./movie/shotime"
import DetailNews from "./compoents/detail-news.tsx/detail-news"
import ShowTime from "./compoents/showtime/showtime"
// s


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
      try {
        const data = await ListRoom()
        setRooms(data)
      } catch (error) {
        console.log(error);
        
      }
      })()
},[])

// const addRoom = async(roomData:IRoom)=>{
//   try {
//     const room = await AddRoom(roomData)
//     alert("Thêm phòng thành công.")
//     setRooms([...rooms,room])
//     navigate("/room")
    
    
    
//   } catch (error) {
//     console.log(error);
    
//   }
// } 
// const updateRoom = async(roomData:IRoom,id:number|string)=>{
//   try {
//     const roomDta = await RoomUpdate(roomData,id)
//     alert("Cập nhật thành công.")
//       const newrooms = rooms.map(room => (room.id == room)?roomDta:room)
//       setRooms(newrooms)
//       navigate('/room')
//   } catch (error) {
//     console.log(error);
    
//   }
// }
// const delRoom = async(id:number|string)=>{
//   try {
//     const confirm = window.confirm("Bạn muốn xóa không?")
//     if(confirm){
//       const room = await DeleteRoom(id);
//       alert("Xóa Thành Công")
//       const newrooms = rooms.filter(room =>room.id !== id)
//       setRooms(newrooms)
//     }
//   } catch (error) {
//     console.log(error);
    
//   }
// }
// const areAdd = async(areaData:IArea)=>{
//   try {
//     const area = await AddArea(areaData)
//     alert("Thêm khu vực thành công.")
//     setAreas([...areas,area])
//     navigate("/admin/area") 
//   } catch (error) {
//     console.log(error);
    
//   }
// }
// const updateAreas = async(areaData:IArea,id:number|string)=>{
//   try {
//     const dataArea = await AreaUpdate(areaData,id)
//     alert("Cập nhật thành công.")
//       const newarea = areas.map(area => (area.id == area)?dataArea:area)
//       setAreas(newarea)
//       navigate('/admin/area')
//   } catch (error) {
//     console.log(error);
    
//   }
// }
// const areaDel = async(id:number|string)=>{
//   try {
//     const confirm = window.confirm("Bạn muốn xóa không?")
//     if(confirm){
//       const area = await AreaDelete(id);
//       alert("Xóa Thành Công")
//       const newareas = areas.filter(area =>area.id !== id)
//       setAreas(newareas)
//     }
//   } catch (error) {
//     console.log(error);
    
//   }
// }
// const seatTypeAdd = async(seatTypeData:ISeatType)=>{
//   try {
//     const seatType = await SeatsTypeAdd(seatTypeData)
//     alert("Thêm kiểu ghế thành công.")
//     setSetTypes([...seattyes,seatType])
    
//     navigate("/admin/seat_type")

    
//   } catch (error) {
//     console.log(error);
    
//   }
// }
// const seatTypeUpdate = async(seatType:ISeatType,id:number|string)=>{
//   try {
//     const seatTypeData = await SeatsTypeUpdate(seatType,id)
//     alert("Cập nhật thành công.")
//       const neweattype = settypes.map(settype => (settype.id == settype)?seatTypeData:settype)
//       setSetTypes(neweattype)
//       navigate('/admin/seat_type')
//   } catch (error) {
//     console.log(error);
    
//   }
// }
// const seatTypeDel = async(id:number|string)=>{
//   try {
//     const confirm = window.confirm("Bạn muốn xóa không?")
//     if(confirm){
//       const seattype = await SeatsTypeDelete(id);
//       alert("Xóa Thành Công")
//       const newseattype = seattyes.filter(seattype =>seattype.id !== id)
//       setSeatTypes(newseattype)
//     }
//   } catch (error) {
//     console.log(error);
    
//   }
// }
// const addCategoryMovie = async(categoryMovie:ICategoryMovie)=>{
//   try {
//     const movieType = await AddCategoryMovie(categoryMovie)
//     alert("Thêm danh mục thành công.")
//     setCategoryMovies([...categorymovies,movieType])
    
//     navigate("/admin/category")

    
//   } catch (error) {
//     console.log(error);
    
//   }
// }
// const updateMoviesCategory = async(id:number|string,categoryMovie:ICategoryMovie)=>{
//   try {
//     const category = await UpdateCategoryMovies(categoryMovie,id)
//     alert("Cập nhật thành công.")
//       const newcategory = categorymovies.map(categorymovie => (categorymovie.id == categorymovie)?categorymovie:category)
//       setCategoryMovies(newcategory)
//       navigate('/admin/category')
//   } catch (error) {
//     console.log(error);
    
//   }
// }
// const delCategoryMovie = async(id:number|string)=>{
//   try {
//     const confirm = window.confirm("Bạn muốn xóa không?")
//     if(confirm){
//       const category = await CategoryMovieDel(id);
//       alert("Xóa Thành Công")
//       const newcategorymovies = categorymovies.filter(category =>category.id !== id)
//       setCategoryMovies(newcategorymovies)
//     }
//   } catch (error) {
//     console.log(error);
    
//   }
// }
// const addShowTimes = async(showData:IShowTime)=>{
//   try {
//     const showtime = await ShowTimeAdd(showData)
//     alert("Thêm xuất chiếu phim thành công.")
//     setShowtimes([...showtimes,showtime])
    
//     navigate("/admin/showtime")
    

    
//   } catch (error) {
//     console.log(error);
    
//   }
// }
// const delShowTime = async(id:number|string)=>{
//   try {
//     const confirm = window.confirm("Bạn muốn xóa không?")
//     if(confirm){
//       const timeShow = await ShowTimeDelete(id);
//       alert("Xóa Thành Công")
//       const newtime = seats.filter(timeShow =>timeShow.id !== id)
//       setShowtimes(newtime)
//     }
//   } catch (error) {
//     console.log(error);
    
//   }
// }
// const addSeats = async(seatData:ISeat)=>{
//   try {
//     const seatDta = await SeatAdd(seatData)
//     alert("Thêm ghế phim thành công.")
//     setSeat([...seats,seatDta])
    
//     navigate("/admin/seat")

    
//   } catch (error) {
//     console.log(error);
    
//   }
// }
// const seatUpdate = async(id:number|string,seatData:ISeat)=>{
//   try {
//     const seatDta = await SeatUpdate(seatData,id)
//     alert("Cập nhật thành công.")
//       const newseats = seats.map(seat => (seat.id == seat)?seatDta:seat)
//       setSeat(newseats)
//       navigate('/admin/seat')
//   } catch (error) {
//     console.log(error);
    
//   }
// }
// const delSeat = async(id:number|string)=>{
//   try {
//     const confirm = window.confirm("Bạn muốn xóa không?")
//     if(confirm){
//       const seat = await SeatDelete(id);
//       alert("Xóa Thành Công")
//       const newseat = seats.filter(seat =>seat.id !== id)
//       setSeatTypes(newseat)
//     }
//   } catch (error) {
//     console.log(error);
    
//   }
// }
// const addNews = async(newsData:INews)=>{
//   try {
//     const newData = await AddNews(newsData)
//     alert("Thêm tin tức thành công.")
//     setNews([...news,newData])
    
//     navigate("/admin/tintuc")

    
//   } catch (error) {
//     console.log(error);
    
//   }
// }
// const newsDel = async(id:number|string)=>{
//   try {
//     const confirm = window.confirm("Bạn muốn xóa không?")
//     if(confirm){
//       const tintuc = await DeleteNews(id);
//       alert("Xóa Thành Công")
//       const newtintuc = news.filter(tintuc =>tintuc.id !== id)
//       setNews(newtintuc)
//     }
//   } catch (error) {
//     console.log(error);
    
//   }
// }
// const updateNews = async(id:number|string,newsData:INews)=>{
//   try {
//     const tinTuc = await UpdateNews(newsData,id)
//     alert("Cập nhật thành công.")
//       const newtintuc = news.map(tintuc => (tintuc.id == tintuc)?tinTuc:tintuc)
//       setNews(newtintuc)
//       navigate('/admin/tintuc')
//   } catch (error) {
//     console.log(error);
    
//   }
// }



//   useEffect(() => {
//     const fetchData = async () => {
//       const roomsData = await ListRoom();
//       setRooms(roomsData);
//     };
//     fetchData();
//   }, []);

//   //ROOM
//   const addRoom = async (roomData: IRoom) => {
//     try {
//       const room = await AddRoom(roomData);
//       alert("Thêm phòng thành công.");
//       setRooms([...rooms, room]);
//       navigate("/room");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const updateRoom = async (roomData: IRoom, id: number | string) => {
//     try {
//       const roomDta = await updateRoom(roomData, id);
//       alert("Cập nhật thành công.");
//       const newRooms = rooms.map((room) => (room.id === id ? roomDta : room));
//       setRooms(newRooms);
//       navigate("/room");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   //AREA
//   const addArea = async (areaData: IArea) => {
//     try {
//       const area = await AddArea(areaData);
//       alert("Thêm khu vực thành công.");
//       setAreas([...areas, area]);
//       navigate("/admin/area");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const updateArea = async (area_id: number | string,areaData: IArea) => {
//     try {
//       const areaDta = await AreaUpdate(area_id,areaData );
//       alert("Cập nhật thành công.");
//       const newAreas = areas.map((area) => (area.area_id === area_id ? areaDta : area));
//       setAreas(newAreas);
//       navigate("/admin/area");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   //SEAT TYPE
//   const addSeatType = async (seatTypeData: ISeatType) => {
//     try {
//       const seatType = await SeatsTypeAdd(seatTypeData);
//       alert("Thêm kiểu ghế thành công.");
//       setSeatTypes([...seatTypes, seatType]);
//       navigate("/admin/seat_type");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const updateSeatType = async (
//     seatTypeData: ISeatType,
//     id: number | string
//   ) => {
//     try {
//       const updatedSeatType = await SeatsTypeUpdate(seatTypeData, id);
//       alert("Cập nhật thành công.");
//       const newSeatTypes = seatTypes.map((seatType) =>
//         seatType.id === id ? updatedSeatType : seatType
//       );
//       setSeatTypes(newSeatTypes);
//       navigate("/admin/seat_type");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // category
//   const addCategoryMovie = async (categoryMovie: ICategoryMovie) => {
//     try {
//       const movieType = await AddCategoryMovie(categoryMovie);
//       alert("Thêm danh mục thành công.");
//       setCategoryMovies([...categoryMovies, movieType]);
//       navigate("/admin/category");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const updateCategoryMovie = async (
//     id: number | string,
//     categoryMovie: ICategoryMovie
//   ) => {
//     try {
//       const updatedCategoryMovie = await UpdateCategoryMovies(
//         categoryMovie,
//         id
//       );
//       alert("Cập nhật thành công.");
//       const newCategoryMovies = categoryMovies.map((categoryMovie) =>
//         categoryMovie.id === id ? updatedCategoryMovie : categoryMovie
//       );
//       setCategoryMovies(newCategoryMovies);
//       navigate("/admin/category");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const addShowTime = async (showTimeData: IShowTime) => {
//     try {
//       const showTime = await ShowTimeAdd(showTimeData);
//       alert("Thêm xuất chiếu phim thành công.");
//       setShowTimes([...showTimes, showTime]);
//       navigate("/admin/showtime");
//     } catch (error) {
//       console.log(error);
//     }
//   };


//   //SEAT
//   const addSeat = async (seatData: ISeat) => {
//     try {
//       const seat = await addSeat(seatData);
//       alert("Thêm ghế phim thành công.");
//       setSeats([...seats, seat]);
//       navigate("/admin/seat");
//     } catch (error) {
//       console.log(error);
//     }
//   };


  return (
    <>{/* trang chu admin - trang giao dien phim */}
      {/* <Routes>
        
=======
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
import EditMovie from "./admin/EditMovie";
import AddMovie from "./admin/Addmovie";
import UpdateShowtime from "./admin/showtime/updateshowtime";

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
>>>>>>> e163f975229a920b2de0146b3830c0ffc7c1ed48
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route
          path="/admin/dashboard"
          element={<Dashboard></Dashboard>}
<<<<<<< HEAD
        ></Route> */}
=======
        ></Route>
        <Route
          path="/admin/dashboard/addmovie"
          element={<AddMovie onAddMovie={addMovie}></AddMovie>}
        ></Route>
        <Route
          path="/admin/dashboard/editmovie/:id"
          element={<EditMovie onEditMovie={editMovie}></EditMovie>}
        ></Route>
>>>>>>> e163f975229a920b2de0146b3830c0ffc7c1ed48


    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      {/* <Route path="/admin/tintuc" element={<News delNews={newsDel}></News>}></Route>
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
      <Route path="/admin/showtime/createshowtime" element={<CrateShowTime addShowTime={addShowTimes}></CrateShowTime>}></Route> */}
      <Route path="/client/dangki" element={<Signup></Signup>}></Route>
      <Route path="/client/dangnhap" element={<Signin></Signin>}></Route>
      {/* <Route path="/admin/news/createnews" element={<CreateNews newsAdd={addNews}></CreateNews>}></Route>
      <Route path="/admin/news/updatenews/:id" element={<UpdateNew newsUpdate={updateNews}></UpdateNew>}></Route> */}
      <Route path="/news" element={<TinTuc></TinTuc>}></Route>
      <Route path="/detailnews/:id" element={<DetailNews></DetailNews>}></Route>
      
     </Routes>
     
     <Routes>
      {/* chi tiet phim*/}
        <Route path="/details/:id" element={<Details></Details>}></Route>
        <Route path="/showtimes" element={<ShowTime></ShowTime>}></Route>
        <Route path="/promotions" element={<Promotion></Promotion>}></Route>
        {/* phong */}
        {/* <Route path="/room" element={<Room rooms={rooms}></Room>}></Route>
        <Route
          path="/admin/room/createroom"
          element={<CreateRoom onAdd={addRoom}></CreateRoom>}
        ></Route>
        <Route
          path="/admin/room/edit/:id"
<<<<<<< HEAD
          element={<UpdateRoom onUpdate={updateRoom}></UpdateRoom>}
        ></Route> */}

        {/* Khu vuc */}
        {/* <Route path="/admin/area" element={<Area areas = {areas}></Area>}></Route>
=======
          element={<UpdateRoom updateRoom={updateRoom}></UpdateRoom>}
        ></Route>

        {/* Khu vuc */}
        <Route path="/admin/area" element={<Area areas={areas}></Area>}></Route>
>>>>>>> e163f975229a920b2de0146b3830c0ffc7c1ed48
        <Route
          path="/admin/area/createarea"
          element={<CreateArea addArea={addArea}></CreateArea>}
        ></Route>
        <Route
          path="/admin/area/edit/:id"
          element={<UpdateArea updateArea={updateArea}></UpdateArea>}
        ></Route> */}

        {/* the loai - danh muc phim */}
        {/* <Route path="/admin/category" element={<Category></Category>}></Route>
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
        ></Route> */}

        {/* Kieu ghe */}
        {/* <Route path="/admin/seat_type" element={<SeatType></SeatType>}></Route>
        <Route
          path="/admin/create_type_seat"
          element={<CreateSeatType addSeatType={addSeatType}></CreateSeatType>}
        ></Route>
        <Route
          path="/admin/seat_type/edit/:id"
          element={
            <UpdateSeatType updateSeatType={updateSeatType}></UpdateSeatType>
          }
        ></Route> */}

        {/* ghe */}
        {/* <Route path="/admin/seat" element={<Seat></Seat>}></Route>
        <Route
          path="/admin/creatseat"
<<<<<<< HEAD
          element={<CreateSeat addSeats={addSeat}></CreateSeat>}
        ></Route> */}
=======
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
>>>>>>> e163f975229a920b2de0146b3830c0ffc7c1ed48

        {/* gio chieu */}
        {/* <Route path="/admin/showtime" element={<ShowTime></ShowTime>}></Route>
        <Route
          path="/admin/showtime/createshowtime"
<<<<<<< HEAD
          element={<CrateShowTime addShowTime={addShowTime}></CrateShowTime>}
        ></Route> */}
=======
          element={<CrateShowTime addShowTime={addShowTime} />}
        />
        <Route
          path="/admin/showtime/edit/:id"
          element={<UpdateShowtime updateShowtimes={updateShowtime} />}
        />
>>>>>>> e163f975229a920b2de0146b3830c0ffc7c1ed48

        {/* admin / quan li nguoi dung */}
        {/* <Route path="/admin/user" element={<UserList />} />
        <Route path="/admin/createuser" element={<CreateUser />} />
        <Route path="/admin/edituser/:id" element={<EditUser />} /> */}

        {/* client */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
       
      </Routes>

    </>
  );

}

export default App;
