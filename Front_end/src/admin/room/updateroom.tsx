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
  bases_id: Joi.number().required().label("Base ID"),
  seat_count: Joi.number().required().label("Total Seat"),
});

const UpdateRoom: React.FC<Props> = ({ updateRoom }) => {
  const { id } = useParams<string>();
  const [formData, setFormData] = useState<IRoom | undefined>(undefined);
  const [bases, setBases] = useState<IBase[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const { handleSubmit, formState: { errors } } = useForm<IRoom>({
    resolver: joiResolver(roomSchema),
  });

  // Fetch base list
  useEffect(() => {
    (async () => {
      try {
        const data = await BaseList();
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
        setLoading(true);
        const room = await GetRoomById(id!);
        setFormData(room);
      } catch (error: any) {
        setFetchError("Failed to fetch room data.");
      } finally {
        setLoading(false);
      }
    };

    fetchRoom();
  }, [id]);

  const onSubmit = async (data: IRoom) => {
    try {
      setLoading(true);
      await updateRoom(id!, { ...formData, ...data });
      alert("Room updated successfully!");
    } catch (error) {
      setFetchError("Update failed. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
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
                <h1 className="h2">Cập nhật Phòng</h1>
              </div>
              {loading ? (
                <p>Loading...</p>
              ) : fetchError ? (
                <p className="text-danger">{fetchError}</p>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label htmlFor="room_name" className="form-label">Tên Phòng:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="room_name"
                      value={formData?.room_name || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, room_name: e.target.value } as IRoom)
                      }
                    />
                    {errors.room_name && (
                      <div className="text-danger">{errors.room_name.message}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="bases_id" className="form-label">Khu Vực:</label>
                    <select
                      className="form-control"
                      id="bases_id"
                      value={formData?.bases_id || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, bases_id: Number(e.target.value) } as IRoom)
                      }
                    >
                      {/* <option value="">Chọn Khu Vực</option> */}
                      {bases.map((base: IBase) => (
                        <option key={base.id} value={base.id}>
                          {base.base_name}
                        </option>
                      ))}
                    </select>
                    {errors.bases_id && (
                      <div className="text-danger">{errors.bases_id.message}</div>
                    )}
                  </div>




                  <div className="mb-3">
                    <label htmlFor="seat_count" className="form-label">Số Ghế:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="seat_count"
                      value={formData?.seat_count || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, seat_count: Number(e.target.value) } as IRoom)
                      }
                    />
                    {errors.seat_count && (
                      <div className="text-danger">{errors.seat_count.message}</div>
                    )}
                  </div>

                  <button type="submit" className="btn btn-primary">Cập nhật</button>
                </form>
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateRoom;
