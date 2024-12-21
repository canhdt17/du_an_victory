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
  const [errorMessage, setErrorMessage] = useState("");

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

  // Sửa lại phần lấy ngày chiếu:
  const handleChangeBase = async (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedBaseId = event.target.value;
    const base = bases.find((e) => e.id.toString() === selectedBaseId);
    setSelectedBase(base || null);
    setSelectedDate(null);
    setSelectedRoom(null);
    setDates([]);  // Reset dates
    setRooms([]);  // Reset rooms

    if (base) {
      try {
        const { data } = await api.get<{ showtime_date: string }[]>(
          `/getDateShowtime/${id}/bases/${base.id}/dates`
        );
        if (data && Array.isArray(data)) {
          const formattedDates = data.map((item) => item.showtime_date);
          setDates(formattedDates);  // Set dates correctly
        } else {
          console.error("Dữ liệu ngày chiếu không hợp lệ:", data);
          setDates([]);  // Reset dates if data is invalid
        }
      } catch (error) {
        console.error("Lỗi khi lấy ngày chiếu:", error);
        setDates([]);  // Reset dates on error
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
        setTimes(data || []);
      } catch (error) {
        console.error("Error fetching times:", error);
        setTimes([]);
      }
    }
  };

  const [seats, setSeats] = useState<ISeat[]>([]);
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
      const { data } = await api.get<any>(
        `/getSeatShowtime/${id}/bases/${selectedBase?.id}/dates/${selectedDate}/times/${selectedTimeId}/seats`
      );
      if (data && Array.isArray(data.data)) {
        setSeats(data.data);
      } else {
        console.error("Seats data is not in the expected format:", data);
        setSeats([]);
      }
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
    localStorage.setItem(constants.orderInfoKey, JSON.stringify(paymentData));
    navigate("/payment");
  };

  return (
    <div className="select-movie-container p-6 mt-14">
      <div
        className="movie-info flex gap-8 mb-10 p-14 relative"
        style={{
          backgroundImage: movieDetail?.image ? `url(${movieDetail?.image})` : "",
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
            Định dạng: {movieDetail?.type?.name_type}
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


      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div className="booking-title uppercase text-5xl font-bold text-center mt-20 mb-20">
        Đặt vé
      </div>

      <div className="option-movie">
        {/* <div className="booking-title uppercase text-5xl font-bold text-center mt-20 mb-20">
          Đặt vé
        </div> */}
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

        {/* Chọn ngày chiếu */}
        <div className="date-list w-64 mb-4">
          <label className="w-full font-semibold text-lg text-white">
            Chọn ngày:
          </label>
          <FormSelect
            defaultValue={undefined}
            value={selectedDate}
            className="text-black"
            onChange={handleChangeDate}
          >
            <option className="text-black" value={undefined}>
              Chọn ngày
            </option>
            {dates.map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </FormSelect>
        </div>

        {/* Chọn giờ chiếu */}
        <div className="time-list w-64 mb-4">
          <label className="w-full font-semibold text-lg text-white">
            Chọn giờ:
          </label>
          <FormSelect
            defaultValue={undefined}
            value={selectedTime?.start_time}
            className="text-black"
            onChange={handleChangeTime}
          >
            <option className="text-black" value={undefined}>
              Chọn giờ
            </option>
            {times.map((time) => (
              <option key={time.start_time} value={time.start_time}>
                {time.start_time}
              </option>
            ))}
          </FormSelect>
        </div>

        {/* Chọn ghế */}

        <div className="seat-selection mb-4">
          {/* <label className="w-full font-semibold text-lg text-white">
              Chọn ghế:
            </label> */}
          <div className="seat-grid">
            {seats.map((seat) => (
              <div
                key={seat.id}
                className={`seat-item ${seat.seat_status === "Đã đặt"
                  ? "seat-disabled"
                  : "seat-available"
                  }`}
                onClick={() => handleSeatClick(seat)}
              >
                {seat.seat_number}
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* thanh toán  */}
      <div className="w-full text-center">
        <button
          className="btn-submit text-2xl bg-yellow-500 py-4 px-6 rounded-lg mt-5"
          onClick={handlePayment}
        >
          Thanh toán
        </button>
      </div>
    </div>
  );
};

export default SelectMovie;
