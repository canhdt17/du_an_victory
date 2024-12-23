import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { ISeat } from "../../interface/seat";
import Logo from "../movie/logo";
import HeaderDashboard from "../movie/headerdashboard";
import MenuDashboard from "../movie/menudashboard";
import { SeatAdd } from "../../service/seat";

const createSeatSchema = Joi.object({
  seat_number: Joi.string().required().label("Seat Number"),
  seat_type_id: Joi.number().required().label("Seat Type"),
  room_id: Joi.number().required().label("Room"),
});

const AddSeat: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISeat>({
    resolver: joiResolver(createSeatSchema),
  });

  const [seatTypes, setSeatTypes] = useState<{ id: number; seat_type_name: string }[]>([]);
  const [rooms, setRooms] = useState<{ id: number; room_name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      // Fetch seat types
      const seatTypesResponse = await fetch("http://127.0.0.1:8000/api/seatTypes");
      if (!seatTypesResponse.ok) {
        throw new Error(`Failed to fetch seat types: ${seatTypesResponse.statusText}`);
      }
      const seatTypesData = await seatTypesResponse.json();
      setSeatTypes(seatTypesData || []);

      // Fetch rooms
      const roomsResponse = await fetch("http://127.0.0.1:8000/api/rooms");
      if (!roomsResponse.ok) {
        throw new Error(`Failed to fetch rooms: ${roomsResponse.statusText}`);
      }
      const roomsData = await roomsResponse.json();
      setRooms(roomsData || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(`Error fetching data: ${error.message || error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmit = async (data: ISeat) => {
    try {
      setErrorMessage(null);
      setSuccessMessage(null);

      // Format data
      const formattedData = { ...data, seat_status: 1 };
      console.log("Payload being sent:", formattedData);

      // Call API to add seat
      await SeatAdd(formattedData);

      // Success message
      setSuccessMessage("Thêm ghế thành công!");
    } catch (error) {
      console.error("Error adding seat:", error);
      setErrorMessage("Lỗi khi thêm ghế, vui lòng thử lại.");
    }
  };

  return (
    <div>
      <div className="dashboards">
        <Logo />
        <HeaderDashboard />
        <div className="container-fluid">
          <div className="row">
            <div className="sidebar border border-right col-md-3 col-lg-2 p-0">
              <MenuDashboard />
            </div>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Thêm Ghế</h1>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <>
                    {error && <div className="text-danger mb-3">{error}</div>}
                    {successMessage && <div className="alert alert-success">{successMessage}</div>}
                    {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

                    <div className="mb-3">
                      <label htmlFor="seatNumber" className="form-label">Số Ghế:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="seatNumber"
                        {...register("seat_number")}
                      />
                      {errors.seat_number && <div className="text-danger">{errors.seat_number.message}</div>}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="seatType" className="form-label">Loại Ghế:</label>
                      <select id="seatType" className="form-select" {...register("seat_type_id")}>
                        <option value="">Chọn loại ghế</option>
                        {seatTypes.length > 0 ? (
                          seatTypes.map((type) => (
                            <option key={type.id} value={type.id}>
                              {type.seat_type_name}
                            </option>
                          ))
                        ) : (
                          <option disabled>Không có loại ghế</option>
                        )}
                      </select>
                      {errors.seat_type_id && <div className="text-danger">{errors.seat_type_id.message}</div>}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="room" className="form-label">Phòng:</label>
                      <select id="room" className="form-select" {...register("room_id")}>
                        <option value="">Chọn phòng</option>
                        {rooms.length > 0 ? (
                          rooms.map((room) => (
                            <option key={room.id} value={room.id}>
                              {room.room_name}
                            </option>
                          ))
                        ) : (
                          <option disabled>Không có phòng</option>
                        )}
                      </select>
                      {errors.room_id && <div className="text-danger">{errors.room_id.message}</div>}
                    </div>

                    <button type="submit" className="btn btn-primary">Thêm Ghế</button>
                  </>
                )}
              </form>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSeat;
