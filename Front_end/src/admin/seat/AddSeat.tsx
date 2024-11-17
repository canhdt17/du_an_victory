import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { ISeat } from "../../interface/seat";
import { fetchSeatTypes, fetchRooms } from "../../service/seat";

type Props = {
  addCreateSeat: (seat: ISeat) => void;
  seat_types: { id: number; name: string }[];
  rooms: { id: number; name: string }[]; 
};

const createSeatSchema = Joi.object({
  seat_number: Joi.string().required().label("Seat Number"),
  seat_type_id: Joi.number().required().label("Seat Type"),
  room_id: Joi.number().required().label("Room"),
});

const AddSeat: React.FC<Props> = ({ addCreateSeat }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<ISeat>({
    resolver: joiResolver(createSeatSchema),
  });

  const [seatTypes, setSeatTypes] = useState<{ id: number; name: string }[]>([]);
  const [rooms, setRooms] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch seat_types và rooms từ API
  const fetchData = async () => {
    try {
      const [seatTypesData, roomsData] = await Promise.all([
        fetchSeatTypes(),
        fetchRooms(),
      ]);
      setSeatTypes(seatTypesData?.seattypes);
      setRooms(roomsData?.rooms);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmit = (data: ISeat) => {
    addCreateSeat(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="mb-3">
            <label htmlFor="seatNumber" className="form-label">
              Tên Ghế:
            </label>
            <input
              type="text"
              className="form-control"
              id="seatNumber"
              {...register("seat_number")}
            />
            {errors.seat_number && (
              <div className="text-danger">{errors.seat_number.message}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="seatType" className="form-label">
              Loại Ghế:
            </label>
            <select
              id="seatType"
              className="form-select"
              {...register("seat_type_id")}
            >
              <option value="">Chọn loại ghế</option>
              {seatTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
            {errors.seat_type_id && (
              <div className="text-danger">{errors.seat_type_id.message}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="room" className="form-label">
              Phòng:
            </label>
            <select
              id="room"
              className="form-select"
              {...register("room_id")}
            >
              <option value="">Chọn phòng</option>
              {rooms.map((room) => (
                <option key={room.id} value={room.id}>
                  {room.name}
                </option>
              ))}
            </select>
            {errors.room_id && (
              <div className="text-danger">{errors.room_id.message}</div>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            Thêm Ghế
          </button>
        </>
      )}
    </form>
  );
};

export default AddSeat;
