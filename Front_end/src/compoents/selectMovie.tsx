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
  ICimena,
  IMovie,
  IRoom,
  ISeat,
  ITime,
} from "./interface/orderMovie";
import { useNavigate, useParams } from "react-router-dom";
import { ISeatType } from "../interface/seat_type";
import api from "../axios/config";

const SelectMovie = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // `id` này là ID của movie

  const [movieDetail, setMovieDetail] = useState<IMovie | null>(null);
  const [bases, setBases] = useState<IBase[] | null>(null);
  const [selectedBase, setSelectedBase] = useState<IBase | null>(null);
  const [selectedCimena, setSelectedCimena] = useState<ICimena | null>(null);
  const [selectedTime, setSelectedTime] = useState<ITime | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<IRoom | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<ISeat[]>([]);
  const [seatTypes, setSeatTypes] = useState<ISeatType[]>([]);
  const [seats, setSeats] = useState<ISeat[]>([]);
  const [times, setTimes] = useState<ITime[]>([
    {
      id: 1,
      showTimeDate: "20-10-2024",
      startTime: "22:00",
      endTime: "24:00",
    },
    {
      id: 2,
      showTimeDate: "20-10-2024",
      startTime: "21:00",
      endTime: "23:00",
    },
    {
      id: 3,
      showTimeDate: "20-10-2024",
      startTime: "19:00",
      endTime: "21:00",
    },
  ]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showNotifySelectSeat, setShowNotifySelectSeat] = useState(false);

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

    if (id) {
      fetchMovieDetail();
    }
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

  // Fetch seat types
  useEffect(() => {
    const fetchSeatTypes = async () => {
      try {
        const { data } = await api.get<{ seattype: ISeatType[] }>(`types`);
        setSeatTypes(data.seattype);
      } catch (error) {
        console.error("Error fetching seat types:", error);
      }
    };

    fetchSeatTypes();
  }, []);

  // Calculate total price
  useEffect(() => {
    const total = selectedSeats.reduce((sum, seat) => {
      return sum + Number(seat.seatType.seatPrice);
    }, 0);
    setTotalPrice(total);
  }, [selectedSeats]);

  // Notify select seat
  useEffect(() => {
    if (showNotifySelectSeat) {
      setTimeout(() => {
        setShowNotifySelectSeat(false);
      }, 5000);
    }
  }, [showNotifySelectSeat]);

  const handleChangeBase = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedBaseId = event.target.value;
    const base = bases?.find((e) => e.id.toString() === selectedBaseId);
    setSelectedBase(base || null);
  };

  const handleSelectedSeat = (seat: ISeat) => {
    if (seat.status) return;
    const isSelected = selectedSeats.some(
      (selected) => selected.id === seat.id
    );

    let newSelectedSeats = [...selectedSeats];
    if (isSelected) {
      newSelectedSeats = newSelectedSeats.filter(
        (selected) => selected.id !== seat.id
      );
    } else {
      newSelectedSeats.push(seat);
    }

    setSelectedSeats(newSelectedSeats);
  };

  const getStyleSeat = (seat: ISeat) => {
    if (seat.status) {
      return "bg-red-600";
    }
    if (selectedSeats.map((selected) => selected.id).includes(seat.id)) {
      return "bg-blue-600";
    }
    if (seat.seatType.id === 1) {
      return "bg-slate-500";
    }
    if (seat.seatType.id === 2) {
      return "bg-orange-400";
    }
    return "bg-pink-700";
  };

  const handlePayment = () => {
    if (!selectedSeats || selectedSeats.length === 0) {
      setShowNotifySelectSeat(true);
      return;
    }
    const paymentData = {
      selectedSeats,
      selectedCimena,
      selectedRoom,
      movieDetail,
      totalPrice,
    };
    localStorage.setItem(constants.orderInfoKey, JSON.stringify(paymentData));
    navigate("/payment");
  };

  return (
    <div className="select-movie-container p-6 mt-14">
      <div
        className={`movie-info flex gap-8 mb-10 p-14 relative`}
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
          <div className="movie-trailler flex items-center gap-10">
            <div className="label">Trailler: </div>
            <a
              className="!text-blue-600 underline"
              href={movieDetail?.link_trailler}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-red-500">Xem trailler</button>
            </a>
          </div>
        </div>
      </div>

      <div className="option-movie">
        <div className="booking-title uppercase text-5xl font-bold text-center mt-20 mb-20">
          Đặt vé
        </div>
        <div className="base-list w-64">
          <label className="w-full font-semibold text-lg text-white">
            Chọn cơ sở:
          </label>
          <FormSelect
            defaultValue={undefined}
            value={selectedBase?.id}
            className="text-black"
            onChange={(event) => handleChangeBase(event)}
          >
            <option className="text-black" key={undefined} value={undefined}>
              Chọn cơ sở
            </option>
            {bases?.map((e) => (
              <option key={e.id} value={e.id}>
                {e.base_name}
              </option>
            ))}
          </FormSelect>
        </div>
      </div>

      <Alert show={showNotifySelectSeat} key={"warning"} variant={"warning"}>
        Bạn chưa chọn ghế
      </Alert>
    </div>
  );
};

export default SelectMovie;
