/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Alert, FormSelect } from "react-bootstrap";
import "./selectMovie.css";
import { ChangeEvent, useEffect, useState } from "react";
import { IBase, IRoom, ITime, IMovie } from "./interface/orderMovie";
import { useNavigate, useParams } from "react-router-dom";
import api from "../axios/config";
import { ISeat } from "../interface/seat";
import constants from "../utils/constants";

const SelectMovie = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // States
  const [movieDetail, setMovieDetail] = useState<IMovie | null>(null);
  const [bases, setBases] = useState<IBase[]>([]);
  const [selectedBase, setSelectedBase] = useState<IBase | null>(null);

  const [dates, setDates] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const [rooms, setRooms] = useState<IRoom[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<IRoom | null>(null);

  const [showNotifySelectRoom, setShowNotifySelectRoom] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch movie details
  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const { data } = await api.get<{ movie: IMovie }>(`movies/${id}`);
        console.log("Movie detail:", data.movie); // Kiểm tra log này
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

  const handleChangeBase = async (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedBaseId = event.target.value;
    const base = bases.find((e) => e.id.toString() === selectedBaseId);
    setSelectedBase(base || null);

    setSelectedDate(null);
    setSelectedRoom(null);
    setDates([]);
    setRooms([]);

    if (base) {
      try {
        // Gọi API lấy ngày chiếu
        const { data } = await api.get<{ showtime_date: string }[]>(
          `/getDateShowtime/${id}/bases/${id}/dates`
        );
        const formattedDates = data.map((item) => item.showtime_date);
        setDates(formattedDates || []);
      } catch (error) {
        console.error("Error fetching dates:", error);
        setDates([]);
      }
    }
  };

  const [times, setTimes] = useState<ITime[]>([]);
  const [selectedTime, setSelectedTime] = useState<ITime | null>(null);

  const handleChangeDate = async (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedDateValue = event.target.value;
    setSelectedDate(selectedDateValue || null);

    setSelectedTime(null);
    setSelectedRoom(null);
    setRooms([]);
    setTimes([]);

    if (selectedDateValue) {
      try {
        const { data } = await api.get<ITime[]>(
          `/getTimeShowtime/${id}/bases/${selectedBase?.id}/dates/${selectedDateValue}/times`
        );
        // console.log("Fetched times:", data);
        setTimes(data || []);
      } catch (error) {
        console.error("Error fetching times:", error);
        setTimes([]);
      }
    }
  };

  const [seats, setSeats] = useState<any[]>([]);
  const handleChangeTime = async (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedTimeId = event.target.value;
    const time = times.find((t) => t.start_time === selectedTimeId);
    setSelectedTime(time || null);

    if (!time) {
      console.error("Giờ chiếu không hợp lệ.");
      return;
    }
    setSeats([]);
    try {
      const { data } = await api.get<ISeat[]>(
        `/getSeatShowtime/${id}/bases/${selectedBase?.id}/dates/${selectedDate}/times/${selectedTimeId}/seats`
      );
      // console.log("Fetched seat data:", data);

      setSeats(data || []);
    } catch (error) {
      console.error("Error fetching seats:", error);
      setSeats([]);
    }
  };

  const [selectedSeats, setSelectedSeats] = useState<ISeat[]>([]);

  const handleSeatClick = (seat: ISeat) => {
    if (seat.seat_status === "Đã đặt") {
      console.error("Ghế đã được đặt, không thể chọn.");
      return;
    }

    setSelectedSeats((prevSeats) => {
      if (prevSeats.some((s) => s.seat_number === seat.seat_number)) {
        return prevSeats.filter((s) => s.seat_number !== seat.seat_number);
      }
      return [...prevSeats, seat];
    });
  };

  const handlePayment = () => {
    if (
      !selectedBase ||
      !selectedDate ||
      !selectedTime ||
      selectedSeats.length === 0
    ) {
      console.error("Vui lòng chọn đủ thông tin trước khi đặt vé.");
      return;
    }

    const paymentData = {
      base: selectedBase,
      date: selectedDate,
      time: selectedTime,
      movie: movieDetail,
      seats: selectedSeats,
    };

    // Lưu dữ liệu vào localStorage
    localStorage.setItem(constants.orderInfoKey, JSON.stringify(paymentData));

    // Chuyển sang trang thanh toán
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
            Thể loại: {movieDetail?.category?.name_category}
          </div>
          <div className="movie-duration">
            Định dạng: {movieDetail?.typemovie?.name_type}
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

        <div className="time-list w-64 mb-4">
          <label className="w-full font-semibold text-lg text-white">
            Chọn giờ chiếu:
          </label>
          <FormSelect
            defaultValue={undefined}
            value={selectedTime?.id?.toString() || undefined}
            className="text-black"
            onChange={handleChangeTime}
            disabled={!selectedDate || times.length === 0}
          >
            <option className="text-black" value={undefined}>
              Chọn giờ
            </option>
            {times.map((time, index) => (
              <option key={time.start_time || index} value={time.start_time}>
                {time.start_time}
              </option>
            ))}
          </FormSelect>
        </div>

        {/* Hiển thị ghế */}
        <div className="seat-selection-container max-w-[1200px] mx-auto">
          <div className="seat-selection-container max-w-[1200px] mx-auto">
            <div className="screen-area w-3/4 mx-auto bg-gray-700 text-white text-center py-3 mb-6">
              MÀN HÌNH
            </div>

            <div className="seat-grid grid grid-cols-16 gap-2 mt-2 max-w-[1000px] mx-auto">
              {seats.map((seat: ISeat, index: number) => (
                <div
                  key={index}
                  className={`seat-item p-1 text-center rounded text-xs 
                ${
                  seat.seat_status === "Đã đặt"
                    ? "bg-red-500 cursor-not-allowed"
                    : ""
                }
                ${
                  selectedSeats.some((s) => s.seat_number === seat.seat_number)
                    ? "bg-blue-500"
                    : "bg-green-500"
                }
                ${seat.seat_type_id === 1 ? "vip-seat" : "seat-normal"}`}
                  onClick={() => handleSeatClick(seat)}
                >
                  <span className="seat-number">{seat.seat_number}</span>
                </div>
              ))}
            </div>

            <div className="seat-legend flex justify-center gap-4 mt-4">
              <div className="seat-legend-item flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500"></div>
                <span className="text-sm">Ghế trống</span>
              </div>
              <div className="seat-legend-item flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500"></div>
                <span className="text-sm">Ghế đã đặt</span>
              </div>
              <div className="seat-legend-item flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500"></div>
                <span className="text-sm">Ghế đang chọn</span>
              </div>
              <div className="seat-legend-item flex items-center gap-2">
                <div className="w-4 h-4 bg-orange-500"></div>
                <span className="text-sm">Ghế VIP</span>
              </div>
            </div>
          </div>
        </div>
        {/* Chọn phòng
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
                rooms.find((room) => room.id?.toString() === e.target.value) ||
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
                {room.room_name}
              </option>
            ))}
          </FormSelect>
        </div> */}

        {/* Hiển thị thông báo */}
        {/* <Alert show={showNotifySelectRoom} key={"warning"} variant={"warning"}>
          Bạn chưa chọn phòng chiếu
        </Alert> */}

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
