/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useParams } from "react-router-dom";
import { IRoom } from "../../interface/room";
import { GetRoomById } from "../../service/room";
import { IBase } from "../../interface/base";
import { BaseList } from "../../service/base";
import Logo from "../movie/logo";
import HeaderDashboard from "../movie/headerdashboard";
import MenuDashboard from "../movie/menudashboard";

type Props = {
  updateRoom: (id: string | number, data: IRoom) => void;
};

const roomSchema = Joi.object({
  room_name: Joi.string().required().label("Room Name"),
  id: Joi.string().required().label("ID Area"),
  seat_count: Joi.number().required().label("Total Seat"),
});

const UpdateRoom: React.FC<Props> = ({ updateRoom }) => {
  const { id } = useParams<string>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IRoom>({
    resolver: joiResolver(roomSchema),
  });

  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [bases, setBases] = useState<IBase[]>([]);

  // Fetch bases
  useEffect(() => {
    (async () => {
      try {
        const data = await BaseList();
        console.log("Base list fetched:", data); 
        setBases(data || []);
      } catch (error) {
        setFetchError("Failed to fetch bases.");
      }
    })();
  }, []);

  // Fetch room data
  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const room = await GetRoomById(id!);
        console.log("Room data fetched:", room); // Log to check room data
        reset({
          room_name: room.room_name,
          id: room.base_id, // Adjust if API uses a different field
          seat_count: room.seat_count,
        });
      } catch (error: any) {
        setFetchError("Failed to fetch room data.");
      } finally {
        setLoading(false);
      }
    };

    fetchRoom();
  }, [id, reset]);

  // Handle form submission
  const onSubmit = (data: IRoom) => {
    updateRoom(id!, data);
  };

  return (
    <div>
      <div className="dashboards">
        <div>
          <Logo />
          <HeaderDashboard />
          <div className="container-fluid">
            <div className="row">
              <div className="sidebar border border-right col-md-3 col-lg-2 p-0 ">
                <div
                  className="offcanvas-md offcanvas-end "
                  tabIndex={-1}
                  id="sidebarMenu"
                  aria-labelledby="sidebarMenuLabel"
                >
                  <MenuDashboard />
                </div>
              </div>
              <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  <h1 className="h2">Cập nhật Phòng</h1>
                  <div className="btn-toolbar mb-2 mb-md-0"></div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {loading && <p>Loading...</p>}
                  {fetchError && <p className="text-danger">{fetchError}</p>}

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
                    {errors.room_name && (
                      <div className="text-danger">
                        {errors.room_name.message}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="id" className="form-label">
                      Khu Vực:
                    </label>
                    <select
                      className="form-control"
                      aria-label="Large select example"
                      {...register("id")}
                    >
                      <option value="">Chọn Khu Vực</option>
                      {bases.map((base: IBase) => (
                        <option key={base.id} value={base.id}>
                          {base.base_name}
                        </option>
                      ))}
                    </select>
                    {errors.id && (
                      <div className="text-danger">
                        {errors.id.message}
                      </div>
                    )}
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
                    {errors.seat_count && (
                      <div className="text-danger">
                        {errors.seat_count.message}
                      </div>
                    )}
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Cập nhật
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

export default UpdateRoom;
