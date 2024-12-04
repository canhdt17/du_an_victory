/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Alert, FormSelect } from "react-bootstrap";
import "./selectMovie.css";
import {
  ChangeEvent,
  // JSXElementConstructor,
  // Key,
  // ReactElement,
  // ReactNode,
  // ReactPortal,
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
  const { id } = useParams();

  const [movieDetail, setMovieDetail] = useState<IMovie | null>(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const { data } = await api.get<{ movie: IMovie }>(`movies/${id}`);
        console.log("Fetched movie details:", data.movie);
        setMovieDetail(data.movie);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
  
    if (id) {
      fetchMovieDetail();
    }
  }, [id]);
  

  const [selectedBase, setSelectedBase] = useState<IBase | null>(null);
  const [selectedCimena, setSelectedCimena] = useState<ICimena | null>(null);
  const [selectedTime, setSelectedTime] = useState<ITime | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<IRoom | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<ISeat[]>([]);
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

  const [bases, setBases] = useState<IBase | null>(null);
  useEffect(() => {
    const fetchBase = async () => {
      try {
        const { data } = await api.get<{ base: IBase[] }>(`bases/${id}`);
        setBases(data.base);
      } catch (error) {
        console.error("Error fetching base details:", error);
      }
    };
    fetchBase();
  }, [id]);

  const [cimenas, setCimenas] = useState<ICimena[]>([
    {
      id: 1,
      areaId: 1,
      name: "Hai Bà Trưng",
      address: "Hai Bà Trưng, Hà Nội",
    },
    {
      id: 2,
      areaId: 1,
      name: "Nam Từ Liêm",
      address: "Nam Từ Liêm, Hà Nội",
    },
    {
      id: 3,
      areaId: 1,
      name: "Hoàn Kiếm",
      address: "Hoàn Kiếm, Hà Nội",
    },
  ]);

  const [seats, setSeats] = useState<ISeat[]>([]);
  useEffect(() => {
    const fetchSeatTypes = async () => {
      try {
        const { data } = await api.get<{ seattype: ISeatType[] }>(
          `types/${id}`
        );
        setSeatTypes(data.seattype);
      } catch (error) {
        console.error("Error fetching seat type details:", error);
      }
    };
    fetchSeatTypes();
  }, [id]);

  const [seatTypes, setSeatTypes] = useState<ISeatType | null>([]);
  useEffect(() => {
    const fetchSeatTypes = async () => {
      try {
        const { data } = await api.get<{ seattype: ISeatType }>(`types/${id}`);
        // return data.seattype;
        setBases(data.seattype);
      } catch (error) {
        console.error("Error fetching seattype details:", error);
      }
    };

    fetchSeatTypes();
  }, []);

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let total = selectedSeats.reduce((sum, seat) => {
      return sum + Number(seat.seatType.seatPrice);
    }, 0);
    setTotalPrice(total);
  }, [selectedSeats]); // Cập nhật lại tổng mỗi khi selectedSeats thay đổi

  const [showNotifySelectSeat, setShowNotifySelectSeat] = useState(false);

  useEffect(() => {
    let total = 0;
    total = selectedSeats.reduce((arr, next) => {
      total += Number(next.seatType.seatPrice);
      return total;
    }, 0);
    setTotalPrice(total);
  }, [selectedSeats]);

  useEffect(() => {
    if (showNotifySelectSeat) {
      setTimeout(() => {
        setShowNotifySelectSeat(false);
      }, 5000);
    }
  }, [showNotifySelectSeat]);

  const handleChangeBase = (event: ChangeEvent<HTMLSelectElement>) => {
    const base = bases?.find(
      (e: { id: { toString: () => any } }) =>
        e.id.toString() === event.target.value
    );
    setSelectedBase(base ? base : null);
  };

  const handleToggleSelectCimena = (cimena: ICimena) => {
    setSelectedCimena(cimena);
  };

  const handleSelectTime = (time: ITime) => {
    setSelectedTime(time);
  };

  const handleSelectedSeat = (seat: ISeat) => {
    if (seat.status) return; // Nếu ghế đã bị chọn hoặc đã bị đặt thì không chọn được
    const isSelected = selectedSeats.some(
      (selected) => selected.id === seat.id
    );

    let newSelectedSeats = [...selectedSeats]; // Tránh sửa trực tiếp state
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
    if (!selectedSeats || selectedSeats?.length === 0) {
      setShowNotifySelectSeat(true);
      return;
    }
    const paymentData = {
      selectedSeats: selectedSeats,
      selectedCimena: selectedCimena,
      selectedRoom: selectedRoom,
      movieDetail: movieDetail,
      totalPrice: totalPrice,
    };
    localStorage.setItem(constants.orderInfoKey, JSON.stringify(paymentData));
    navigate("/payment");
  };

  return (
    <div className="select-movie-container p-6 mt-14">
      <div
        className={`movie-info flex gap-8 mb-10 p-14 relative`}
        style={{
          backgroundImage: `url(${movieDetail.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundPosition: "center center",
        }}
      >
        <div className="image w-80 h-auto flex-shrink-0 rounded-xl overflow-hidden z-[2]">
          <img src={movieDetail.image} alt={movieDetail.name_movie} />
        </div>
        <div className="movie-content flex flex-col gap-3 z-[2]">
          <div className="movie-name text-4xl font-semibold text-white mb-8">
            {movieDetail.name_movie}
          </div>
          <div className="movie-duration">
            Thể loại: {movieDetail.name_category}
          </div>
          <div className="movie-duration">
            Định dạng: {movieDetail.name_type}
          </div>
          <div className="movie-duration">
            Thời lượng: {movieDetail.duration}
          </div>
          <div className="movie-national">Quốc gia: {movieDetail.nation}</div>
          <div className="movie-director">Giám đốc: {movieDetail.director}</div>
          <div className="movie-show">Ngày phát hành: {movieDetail.show}</div>
          <div className="movie-description">
            Nội dung: {movieDetail.content}
          </div>
          <div className="movie-trailler flex items-center gap-10">
            <div className="label">Trailler: </div>
            <a
              className="!text-blue-600 underline"
              href={movieDetail.link_trailler}
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
                {e.name}
              </option>
            ))}
          </FormSelect>
        </div>
        {selectedBase && (
          <div className="cimena-list mt-4 w-1/5 min-w-64">
            <label className="w-full font-semibold text-lg text-white">
              Chọn rạp:
            </label>
            {cimenas?.map((e) => {
              return (
                <div
                  className={`cimena-item p-3 rounded-xl mb-3 bg-[#313332] cursor-pointer hover:bg-[#3e403f] ${
                    selectedCimena?.id === e.id ? "bg-[#878a88]" : ""
                  }`}
                  key={e.id}
                  onClick={() => {
                    handleToggleSelectCimena(e);
                  }}
                >
                  <div className="cimena-name text-2xl mb-2">{e.name}</div>
                  <div className="cimena-address">Địa chỉ: {e.address}</div>
                </div>
              );
            })}
          </div>
        )}
        {selectedCimena && (
          <div className="movie-time flex items-center gap-4 mt-6">
            {times?.map((e) => {
              return (
                <div
                  className={`time border border-slate-600 p-2 rounded-xl w-max text-center font-bold hover:bg-slate-500 cursor-pointer ${
                    selectedTime?.id === e.id ? "bg-slate-400" : ""
                  }`}
                  key={e.id}
                  onClick={() => {
                    handleSelectTime(e);
                  }}
                >
                  {e.showTimeDate} {e.startTime}
                </div>
              );
            })}
          </div>
        )}
        {selectedTime && (
          <div className="movie-room p-4 bg-[#293a47] my-8 mx-auto w-1/2 rounded-3xl">
            <div className="room-name text-3xl text-center my-8">Tên phòng</div>

            <div className="seats-base grid grid-cols-12 gap-2 w-fit mx-auto">
              {seats?.map((e) => {
                return (
                  <div
                    className={`seat-item w-8 h-8 flex justify-center items-center rounded-lg ${
                      !e.status ? "cursor-pointer hover:bg-slate-300" : ""
                    } ${getStyleSeat(e)}`}
                    onClick={() => {
                      handleSelectedSeat(e);
                    }}
                  >
                    {e.status ? "X" : e.seatInfo.seatNumber}
                  </div>
                );
              })}
            </div>
            <div className="seat-types flex justify-center items-center gap-8 mt-16">
              <div className="seat-type flex justify-center items-center gap-2">
                <div
                  className={`seat-type-icon w-8 h-8 flex justify-center items-center rounded-lg bg-red-600`}
                >
                  X
                </div>
                <div className="name">Ghế đã đặt</div>
              </div>
              <div className="seat-type flex justify-center items-center gap-2">
                <div
                  className={`seat-type-icon w-8 h-8 flex justify-center items-center rounded-lg bg-blue-600`}
                ></div>
                <div className="name">Ghế bạn chọn</div>
              </div>

              {seatTypes?.map((e) => {
                return (
                  <div
                    className="seat-type flex justify-center items-center gap-2"
                    key={e.id}
                  >
                    <div
                      className={`seat-type-icon w-8 h-8 flex justify-center items-center rounded-lg ${
                        e.id === 1
                          ? "bg-slate-500"
                          : e.id === 2
                          ? "bg-orange-400"
                          : "bg-pink-700"
                      }`}
                    ></div>
                    <div className="name">{e.seatTypeName}</div>
                  </div>
                );
              })}
            </div>
            <div className="selected-seat mt-8">
              <div className="selected-seat__name">
                Ghế đã chọn:{" "}
                {selectedSeats.map((e) => e.seatInfo.seatNumber).join(", ")}
              </div>
              <div className="total-price">Tổng tiền: {totalPrice}đ</div>
            </div>
            <div className="payment mt-8 mx-auto flex justify-end ">
              <button
                className="bg-red-600"
                onClick={() => {
                  handlePayment();
                }}
              >
                Thanh toán
              </button>
            </div>
          </div>
        )}
      </div>
      <Alert show={showNotifySelectSeat} key={"warning"} variant={"warning"}>
        Bạn chưa chọn ghế
      </Alert>
      {/* <div className="back-list mt-6"><button className="bg-slate-500">Quay lại</button></div> */}
    </div>
  );
};

export default SelectMovie;
