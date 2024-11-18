import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useParams, useNavigate } from "react-router-dom";
import { ListArea } from "../../service/area";
import { IRoom } from "../../interface/room";
import { IArea } from "../../movie/area";
import { GetRoomById } from "../../service/room";

const roomSchema = Joi.object({
  room_name: Joi.string().required(),
  area_id: Joi.string().required(),
  total_seat: Joi.number().required(),
});

const UpdateRoom = (roomData: IRoom, p0: string) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [areas, setAreas] = useState<IArea[]>([]);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<IRoom>({
    resolver: joiResolver(roomSchema),
  });

  useEffect(() => {
    (async () => {
      const data = await GetRoomById(id!);
      reset(data);
      const areaList = await ListArea();
      setAreas(areaList);
    })();
  }, [id]);

  const onSubmit = async (roomData: IRoom) => {
    await UpdateRoom(roomData, id!);
    navigate("/admin/room");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("room_name")} placeholder="Room Name" />
      {errors.room_name && <p>{errors.room_name.message}</p>}
      <select {...register("area_id")}>
        {areas.map((area) => (
          <option key={area.area_id} value={area.area_id}>
            {area.area_name}
          </option>
        ))}
      </select>
      <input {...register("total_seat")} placeholder="Total Seat" />
      {errors.total_seat && <p>{errors.total_seat.message}</p>}
      <button type="submit">Update Room</button>
    </form>
  );
};

export default UpdateRoom;
