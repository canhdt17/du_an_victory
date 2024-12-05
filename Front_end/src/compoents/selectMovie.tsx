import { Alert, FormSelect } from "react-bootstrap";
import "./selectMovie.css";
import { useEffect, useState } from "react";
import anh from "../assets/anhphim.jpg";
import constants from "../utils/constants";
import {
  IArea,
  ICimena,
  IMovie,
  IRoom,
  ISeat,
  ITime,
} from "./interface/orderMovie";
import { useNavigate } from "react-router-dom";
import { ISeatType } from "../interface/seat_type";

const SelectMovie = () => {

  const navigate = useNavigate()
  const [movieDetail, setMovieDetailt] = useState<IMovie>({
    id: 1,
    name_movie: "NGÀY XƯA CÓ MỘT CHUYỆN TÌNH",
    image: anh,
    type_id: 1,
    duration: "135 phút",
    nation: "Viet Nam",
    director: "Trịnh Đình Lê Minh",
    performer: "",
    show: "2024-10-31",
    content:
      "Ngày Xưa Có Một Chuyện Tình xoay quanh câu chuyện tình bạn, tình yêu giữa hai chàng trai và một cô gái từ thuở ấu thơ cho đến khi trưởng thành, phải đối mặt với những thử thách của số phận. Trải dài trong 4 giai đoạn từ năm 1987 - 2000, ba người bạn cùng tuổi - Vinh, Miền, Phúc đã cùng yêu, cùng bỡ ngỡ bước vào đời, va vấp và vượt qua.",
    link_trailler: "https://youtu.be/IcpKkCzvcU4?si=gtrJxkEn-1FJCEzg",
    category_id: 5,
    name_type: "3D",
    name_category: "Hành động",
  });
  const [selectedArea, setSelectedArea] = useState<IArea | null>(null);
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
  const [areas, setAreas] = useState<IArea[]>([
    {
      id: 1,
      name: "Hà Nội",
    },
    {
      id: 2,
      name: "TP Hồ Chí Minh",
    },
    {
      id: 3,
      name: "Đà Nẵng",
    },
  ]);
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
  const [seats, setSeats] = useState<ISeat[]>([
    {
      id: 1,
      showtimeId: 1,
      seatId: 1,
      seatInfo: {
        id: 1,
        seatNumber: 1,
        seatTypeId: 1,
        roomId: 1,
      },
      seatType: {
        id: 1,
        seatTypeName: "Normal",
        seatPrice: "150000",
      },
      status: true,
    },
    {
      id: 2,
      showtimeId: 1,
      seatId: 2,
      seatInfo: {
        id: 2,
        seatNumber: 2,
        seatTypeId: 2,
        roomId: 1,
      },
      seatType: {
        id: 2,
        seatTypeName: "Vip",
        seatPrice: "200000",
      },
      status: true,
    },
    {
      id: 3,
      showtimeId: 1,
      seatId: 3,
      seatInfo: {
        id: 3,
        seatNumber: 3,
        seatTypeId: 1,
        roomId: 1,
      },
      seatType: {
        id: 1,
        seatTypeName: "Normal",
        seatPrice: "150000",
      },
      status: false,
    },
    {
      id: 4,
      showtimeId: 1,
      seatId: 4,
      seatInfo: {
        id: 3,
        seatNumber: 4,
        seatTypeId: 2,
        roomId: 1,
      },
      seatType: {
        id: 2,
        seatTypeName: "Vip",
        seatPrice: "200000",
      },
      status: false,
    },
    {
      id: 5,
      showtimeId: 1,
      seatId: 5,
      seatInfo: {
        id: 3,
        seatNumber: 5,
        seatTypeId: 3,
        roomId: 1,
      },
      seatType: {
        id: 3,
        seatTypeName: "Doi",
        seatPrice: "300000",
      },
      status: false,
    },
    {
      id: 5,
      showtimeId: 1,
      seatId: 5,
      seatInfo: {
        id: 3,
        seatNumber: 5,
        seatTypeId: 3,
        roomId: 1,
      },
      seatType: {
        id: 3,
        seatTypeName: "Doi",
        seatPrice: "300000",
      },
      status: false,
    },
    {
      id: 5,
      showtimeId: 1,
      seatId: 5,
      seatInfo: {
        id: 3,
        seatNumber: 5,
        seatTypeId: 3,
        roomId: 1,
      },
      seatType: {
        id: 3,
        seatTypeName: "Doi",
        seatPrice: "300000",
      },
      status: false,
    },
    {
      id: 5,
      showtimeId: 1,
      seatId: 5,
      seatInfo: {
        id: 3,
        seatNumber: 5,
        seatTypeId: 3,
        roomId: 1,
      },
      seatType: {
        id: 3,
        seatTypeName: "Doi",
        seatPrice: "300000",
      },
      status: false,
    },
    {
      id: 5,
      showtimeId: 1,
      seatId: 5,
      seatInfo: {
        id: 3,
        seatNumber: 5,
        seatTypeId: 3,
        roomId: 1,
      },
      seatType: {
        id: 3,
        seatTypeName: "Doi",
        seatPrice: "300000",
      },
      status: false,
    },
    {
      id: 5,
      showtimeId: 1,
      seatId: 5,
      seatInfo: {
        id: 3,
        seatNumber: 5,
        seatTypeId: 3,
        roomId: 1,
      },
      seatType: {
        id: 3,
        seatTypeName: "Doi",
        seatPrice: "300000",
      },
      status: false,
    },
    {
      id: 5,
      showtimeId: 1,
      seatId: 5,
      seatInfo: {
        id: 3,
        seatNumber: 5,
        seatTypeId: 3,
        roomId: 1,
      },
      seatType: {
        id: 3,
        seatTypeName: "Doi",
        seatPrice: "300000",
      },
      status: false,
    },
    {
      id: 5,
      showtimeId: 1,
      seatId: 5,
      seatInfo: {
        id: 3,
        seatNumber: 5,
        seatTypeId: 3,
        roomId: 1,
      },
      seatType: {
        id: 3,
        seatTypeName: "Doi",
        seatPrice: "300000",
      },
      status: false,
    },
    {
      id: 5,
      showtimeId: 1,
      seatId: 5,
      seatInfo: {
        id: 3,
        seatNumber: 5,
        seatTypeId: 3,
        roomId: 1,
      },
      seatType: {
        id: 3,
        seatTypeName: "Doi",
        seatPrice: "300000",
      },
      status: false,
    },
    {
      id: 5,
      showtimeId: 1,
      seatId: 5,
      seatInfo: {
        id: 3,
        seatNumber: 5,
        seatTypeId: 3,
        roomId: 1,
      },
      seatType: {
        id: 3,
        seatTypeName: "Doi",
        seatPrice: "300000",
      },
      status: false,
    },
    {
      id: 5,
      showtimeId: 1,
      seatId: 5,
      seatInfo: {
        id: 3,
        seatNumber: 5,
        seatTypeId: 3,
        roomId: 1,
      },
      seatType: {
        id: 3,
        seatTypeName: "Doi",
        seatPrice: "300000",
      },
      status: false,
    },
    {
      id: 5,
      showtimeId: 1,
      seatId: 5,
      seatInfo: {
        id: 3,
        seatNumber: 5,
        seatTypeId: 3,
        roomId: 1,
      },
      seatType: {
        id: 3,
        seatTypeName: "Doi",
        seatPrice: "300000",
      },
      status: false,
    },
    {
      id: 5,
      showtimeId: 1,
      seatId: 5,
      seatInfo: {
        id: 3,
        seatNumber: 5,
        seatTypeId: 3,
        roomId: 1,
      },
      seatType: {
        id: 3,
        seatTypeName: "Doi",
        seatPrice: "300000",
      },
      status: false,
    },
    {
      id: 5,
      showtimeId: 1,
      seatId: 5,
      seatInfo: {
        id: 3,
        seatNumber: 5,
        seatTypeId: 3,
        roomId: 1,
      },
      seatType: {
        id: 3,
        seatTypeName: "Doi",
        seatPrice: "300000",
      },
      status: false,
    },
    {
      id: 5,
      showtimeId: 1,
      seatId: 5,
      seatInfo: {
        id: 3,
        seatNumber: 5,
        seatTypeId: 3,
        roomId: 1,
      },
      seatType: {
        id: 3,
        seatTypeName: "Doi",
        seatPrice: "300000",
      },
      status: false,
    },
    {
      id: 5,
      showtimeId: 1,
      seatId: 5,
      seatInfo: {
        id: 3,
        seatNumber: 5,
        seatTypeId: 3,
        roomId: 1,
      },
      seatType: {
        id: 3,
        seatTypeName: "Doi",
        seatPrice: "300000",
      },
      status: false,
    },
    {
      id: 5,
      showtimeId: 1,
      seatId: 5,
      seatInfo: {
        id: 3,
        seatNumber: 5,
        seatTypeId: 3,
        roomId: 1,
      },
      seatType: {
        id: 3,
        seatTypeName: "Doi",
        seatPrice: "300000",
      },
      status: false,
    },
  ]);
  const [seatTypes, setSeatTypes] = useState<ISeatType[]>([
    {
      id: 1,
      seatTypeName: "Normal",
      seatPrice: "150000",
    },
    {
      id: 2,
      seatTypeName: "Vip",
      seatPrice: "200000",
    },
    {
      id: 3,
      seatTypeName: "Doi",
      seatPrice: "300000",
    },
  ]);

  const [totalPrice, setTotalPrice] = useState(0);
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

  const handleChangeArea = (event) => {
    const area = areas?.find((e) => e.id.toString() === event.target.value);
    setSelectedArea(area ? area : null);
  };
  const handleToggleSelectCimena = (cimenaId: ICimena) => {
    setSelectedCimena(cimenaId);
  };
  const handleSelectTime = (timeId: ITime) => {
    setSelectedTime(timeId);
  };
  const handleSelectedSeat = (seat: ISeat) => {
    if (seat.status) return;
    const isSelected = selectedSeats.find((e) => e.id === seat.id);
    let newSelectedSeats: ISeat[] = JSON.parse(JSON.stringify(selectedSeats));
    if (isSelected) {
      newSelectedSeats = newSelectedSeats?.filter((e) => e.id !== seat.id);
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
    navigate('/payment')
  };

  return (
    <div className="select-movie-container p-6 mt-14">
      <div
        className={`movie-info flex gap-8 mb-10 p-14 relative`}
        style={{
          backgroundImage: ` url(${anh})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundPosition: "center center",
        }}
      >
        <div className="image w-80 h-auto flex-shrink-0 rounded-xl overflow-hidden z-[2]">
          <img src={anh} />
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
          <div className="movie-trailler flex items-center gap-10 ">
            <div className="label">Trailler: </div>

            <a
              className="!text-blue-600 underline"
              href={movieDetail.link_trailler}
              target="_blank"
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
        <div className="area-list w-64">
          <label className="w-full font-semibold text-lg text-white">
            Chọn khu vực:
          </label>
          <FormSelect
          defaultValue={undefined}
            value={selectedArea?.id}
            className="text-black"
            onChange={(event) => {
              handleChangeArea(event);
            }}
          >
            <option className="text-black" key={undefined} value={undefined}>
                  Chọn khu vực
                </option>
            {areas?.map((e) => {
              return (
                <option className="text-black" key={e.id} value={e.id}>
                  {e.name}
                </option>
              );
            })}
          </FormSelect>
        </div>
        {selectedArea && (
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

            {/* <div className="cimena-name">CGV Mỹ ĐÌnh</div>
            <div className="cimena-name">CGV Hai Bà Trưng</div> */}
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

            <div className="seats-area grid grid-cols-12 gap-2 w-fit mx-auto">
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
                >X</div>
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
