import React, { useEffect, useState } from "react";
import Logo from "../logo";
import HeaderDashboard from "../headerdashboard";
import MenuDashboard from "../menudashboard";
import { useForm } from "react-hook-form";
import { IShowTime } from "../../interface/shotime";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { IRoom } from "../../interface/room";
import { ListRoom } from "../../service/room";

type Props = {
  addShowTime: (showData: IShowTime) => void;
};
const showScheama = Joi.object({
  movie_id: Joi.string().required(),
  room_id: Joi.string().required(),
  showtime_date: Joi.date().required(),
  start_time: Joi.string().required(),
  end_time: Joi.string().required(),
});
const CrateShowTime = ({ addShowTime }: Props) => {
  const [rooms, setRooms] = useState<IRoom[]>([]);
  useEffect(() => {
    (async () => {
      const data = await ListRoom();
      setRooms(data);
    })();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IShowTime>({
    resolver: joiResolver(showScheama),
  });
  const onsubumit = (showData: IShowTime) => {
    addShowTime(showData);
  };

  return (
    <div>
      <div className="dashboards">
        <div>
          <Logo></Logo>
          <HeaderDashboard></HeaderDashboard>
          <div className="container-fluid">
            <div className="row">
              <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
                <div
                  className="offcanvas-md offcanvas-end bg-body-tertiary"
                  tabIndex={-1}
                  id="sidebarMenu"
                  aria-labelledby="sidebarMenuLabel"
                >
                  <MenuDashboard></MenuDashboard>
                </div>
              </div>
              <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  <h1 className="h2">Thêm Xuất Chiếu Phim</h1>
                  <div className="btn-toolbar mb-2 mb-md-0"></div>
                </div>
                <form onSubmit={handleSubmit(onsubumit)}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Movie ID:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      {...register("movie_id")}
                    />
                    <div id="emailHelp" className="form-text">
                      {errors.movie_id && (
                        <div className="text-danger ">
                          {errors.movie_id.message}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleSelect">Chọn Phòng:</label>
                    <select className="form-control" id="exampleSelect">
                      {rooms.map((room: IRoom, i: number) => (
                        <option key={i + 1} value={room.room_id}>
                          {room.room_name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Ngày Chiếu:
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="exampleInputEmail1"
                      {...register("showtime_date")}
                    />
                    <div id="emailHelp" className="form-text">
                      {errors.showtime_date && (
                        <div className="text-danger ">
                          {errors.showtime_date.message}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Giờ Chiếu:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      {...register("start_time")}
                    />
                    <div id="emailHelp" className="form-text">
                      {errors.start_time && (
                        <div className="text-danger ">
                          {errors.start_time.message}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Giờ Kết Thúc:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      {...register("end_time")}
                    />
                    <div id="emailHelp" className="form-text">
                      {errors.end_time && (
                        <div className="text-danger ">
                          {errors.end_time.message}
                        </div>
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

export default CrateShowTime;
