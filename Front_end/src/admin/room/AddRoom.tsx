import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { BaseList } from "../../service/base";
import { IRoom, RoomData } from "../../interface/room";
import { IBase } from "../../interface/base";
import Logo from "../movie/logo";
import HeaderDashboard from "../movie/headerdashboard";
import MenuDashboard from "../movie/menudashboard";

// Joi validation schema for form
const roomSchema = Joi.object({
  room_name: Joi.string().required().label("Room Name"),
  base_id: Joi.number().required().label("Base ID"),
  seat_count: Joi.number().required().min(1).label("Total Seat"),
});

type Props = {
  onAdd: (roomsData: RoomData) => void;
};

const CreateRoom: React.FC<Props> = ({ onAdd }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRoom>({
    resolver: joiResolver(roomSchema),
  });

  const [bases, setBases] = useState<IBase[]>([]);

  useEffect(() => {
    (async () => {
      const data = await BaseList();
      setBases(data || []);
    })();
  }, []);

  const onSubmit = (roomsData: IRoom) => {
    console.log("Form data being submitted:", roomsData);

    const selectedBase = bases.find((base) => base.id === Number(roomsData.base_id));
    if (!selectedBase) {
      console.error("Invalid Base ID selected!");
      return;
    }

    const payload: RoomData = {
      room_name: roomsData.room_name,
      bases_id: Number(roomsData.base_id),
      seat_count: Number(roomsData.seat_count),
      base_name: selectedBase.base_name,
    };

    console.log("Payload being sent:", payload);
    onAdd(payload);
  };

  return (
    <div>
      <div className="dashboards">
        <div>
          <Logo />
          <HeaderDashboard />
          <div className="container-fluid">
            <div className="row">
              <div className="sidebar border border-right col-md-3 col-lg-2 p-0">
                <div
                  className="offcanvas-md offcanvas-end"
                  tabIndex={-1}
                  id="sidebarMenu"
                  aria-labelledby="sidebarMenuLabel"
                >
                  <MenuDashboard />
                </div>
              </div>
              <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  <h1 className="h2">Create Room</h1>
                  <div className="btn-toolbar mb-2 mb-md-0"></div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label htmlFor="room_name" className="form-label">
                      Tên Phòng:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="room_name"
                      {...register("room_name")}
                    />
                    <div id="emailHelp" className="form-text">
                      {errors.room_name && (
                        <div className="text-danger">{errors.room_name.message}</div>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="base_id" className="form-label">
                      Khu Vực:
                    </label>
                    <select
                      className="form-control"
                      id="base_id"
                      {...register("base_id")}
                    >
                      <option value="" disabled>
                        Chọn Khu Vực
                      </option>
                      {bases.map((base: IBase) => (
                        <option key={base.id} value={base.id}>
                          {base.base_name}
                        </option>
                      ))}
                    </select>
                    <div id="emailHelp" className="form-text">
                      {errors.bases_id && (
                        <div className="text-danger">{errors.bases_id.message}</div>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="seat_count" className="form-label">
                      Số Ghế:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="seat_count"
                      {...register("seat_count")}
                    />
                    <div id="emailHelp" className="form-text">
                      {errors.seat_count && (
                        <div className="text-danger">{errors.seat_count.message}</div>
                      )}
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;
