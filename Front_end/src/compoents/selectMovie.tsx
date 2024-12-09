/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Alert, FormSelect } from "react-bootstrap";
import "./selectMovie.css";
import {
  ChangeEvent,
  useEffect,
  useState,
} from "react";
import constants from "../utils/constants";
import {
  IBase,
  IRoom,
  ITime,
  IMovie,
} from "./interface/orderMovie";
import { useNavigate, useParams } from "react-router-dom";
import api from "../axios/config";

const SelectMovie = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // `id` này là ID của movie

  // States
  const [movieDetail, setMovieDetail] = useState<IMovie | null>(null);
  const [bases, setBases] = useState<IBase[]>([]);
  const [selectedBase, setSelectedBase] = useState<IBase | null>(null);

  const [dates, setDates] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const [rooms, setRooms] = useState<IRoom[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<IRoom | null>(null);

  const [showNotifySelectRoom, setShowNotifySelectRoom] = useState(false);

  // Fetch movie details
  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const { data } = await api.get<{ movie: IMovie }>(`movies/${id}`);
        setMovieDetail(data.movie);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    if (id) fetchMovieDetail();
  }, [id]);

  // Fetch bases
  useEffect(() => {
    const fetchBases = async () => {
      try {
        const { data } = await api.get<IBase[]>(`bases`);
        setBases(data || []);
      } catch (error) {
        console.error("Error fetching bases:", error);
        setBases([]);
      }
    };
    fetchBases();
  }, []);

  // Fetch dates when a base is selected
  const handleChangeBase = async (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedBaseId = event.target.value;
    const base = bases.find((e) => e.id.toString() === selectedBaseId);
    setSelectedBase(base || null);

    // Reset dates and rooms
    setSelectedDate(null);
    setSelectedRoom(null);
    setDates([]);
    setRooms([]);

    if (base) {
      try {
        const { data } = await api.get<string[]>(`bases/${base.id}/dates`);
        setDates(data || []);
      } catch (error) {
        console.error("Error fetching dates:", error);
        setDates([]);
      }
    }
  };

  // Fetch rooms when a date is selected
  const handleChangeDate = async (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedDateValue = event.target.value;
    setSelectedDate(selectedDateValue || null);

    // Reset rooms
    setSelectedRoom(null);
    setRooms([]);

    if (selectedDateValue) {
      try {
        const { data } = await api.get<IRoom[]>(
          `dates/${selectedDateValue}/rooms`
        );
        setRooms(data || []);
      } catch (error) {
        console.error("Error fetching rooms:", error);
        setRooms([]);
      }
    }
  };

  const handlePayment = () => {
    if (!selectedRoom) {
      setShowNotifySelectRoom(true);
      return;
    }
    const paymentData = {
      selectedBase,
      selectedDate,
      selectedRoom,
      movieDetail,
    };
    localStorage.setItem(constants.orderInfoKey, JSON.stringify(paymentData));
    navigate("/payment");
  };

  return (
    <div className="select-movie-container p-6 mt-14">
      <div
        className="movie-info flex gap-8 mb-10 p-14 relative"
        style={{
          backgroundImage: `url(${movieDetail?.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundPosition: "center center",
        }}
      >
        <div className="image w-80 h-auto flex-shrink-0 rounded-xl overflow-hidden z-[2]">
          <img src={movieDetail?.image} alt={movieDetail?.name_movie} />
        </div>
        <div className="movie-content flex flex-col gap-3 z-[2]">
          <div className="movie-name text-4xl font-semibold text-white mb-8">
            {movieDetail?.name_movie}
          </div>
          <div className="movie-duration">
            Thể loại: {movieDetail?.name_category}
          </div>
          <div className="movie-duration">
            Thời lượng: {movieDetail?.duration}
          </div>
          <div className="movie-national">Quốc gia: {movieDetail?.nation}</div>
          <div className="movie-director">
            Giám đốc: {movieDetail?.director}
          </div>
          <div className="movie-show">Ngày phát hành: {movieDetail?.show}</div>
          <div className="movie-description">
            Nội dung: {movieDetail?.content}
          </div>
        </div>
      </div>

      <div className="option-movie">
        <div className="booking-title uppercase text-5xl font-bold text-center mt-20 mb-20">
          Đặt vé
        </div>

        {/* Chọn cơ sở */}
        <div className="base-list w-64 mb-4">
          <label className="w-full font-semibold text-lg text-white">
            Chọn cơ sở:
          </label>
          <FormSelect
            defaultValue={undefined}
            value={selectedBase?.id}
            className="text-black"
            onChange={handleChangeBase}
          >
            <option className="text-black" value={undefined}>
              Chọn cơ sở
            </option>
            {bases.map((base) => (
              <option key={base.id} value={base.id}>
                {base.base_name}
              </option>
            ))}
          </FormSelect>
        </div>

        {/* Chọn ngày */}
        <div className="date-list w-64 mb-4">
          <label className="w-full font-semibold text-lg text-white">
            Chọn ngày:
          </label>
          <FormSelect
            defaultValue={undefined}
            value={selectedDate || undefined}
            className="text-black"
            onChange={handleChangeDate}
            disabled={!selectedBase}
          >
            <option className="text-black" value={undefined}>
              Chọn ngày
            </option>
            {dates.map((date, index) => (
              <option key={index} value={date}>
                {date}
              </option>
            ))}
          </FormSelect>
        </div>

        {/* Chọn phòng */}
        <div className="room-list w-64 mb-4">
          <label className="w-full font-semibold text-lg text-white">
            Chọn phòng chiếu:
          </label>
          <FormSelect
            defaultValue={undefined}
            value={selectedRoom?.id || undefined}
            className="text-black"
            onChange={(e) =>
              setSelectedRoom(
                rooms.find((room) => room.id.toString() === e.target.value) ||
                  null
              )
            }
            disabled={!selectedDate}
          >
            <option className="text-black" value={undefined}>
              Chọn phòng
            </option>
            {rooms.map((room) => (
              <option key={room.id} value={room.id}>
                {room.roomName}
              </option>
            ))}
          </FormSelect>
        </div>

        {/* Hiển thị thông báo */}
        <Alert show={showNotifySelectRoom} key={"warning"} variant={"warning"}>
          Bạn chưa chọn phòng chiếu
        </Alert>

        {/* Nút đặt vé */}
        <div className="text-center mt-10">
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-lg"
            onClick={handlePayment}
          >
            Đặt vé
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectMovie;
