/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import Logo from "../movie/logo";
import HeaderDashboard from "../movie/headerdashboard";
import MenuDashboard from "../movie/menudashboard";
import { IBase } from "../../interface/base";
import { BaseById } from "../../service/base";

type Props = {
  updateBase: (id: number | string, dataBase: IBase) => void;
};

const updateBaseSchema = Joi.object({
  base_name: Joi.string().required().label("Area Name"),
});

const UpdateBase: React.FC<Props> = ({ updateBase }) => {
  const { id } = useParams<{ id: string }>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IBase>({
    resolver: joiResolver(updateBaseSchema),
  });

  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  useEffect(() => {
    const fetchBase = async () => {
      try {
        setLoading(true);
        const base = await BaseById(id!); // Gọi API
        reset(base); // Reset form với dữ liệu nhận được
      } catch (error: any) {
        setFetchError(error.message); // Hiển thị lỗi từ API
      } finally {
        setLoading(false);
      }
    };
  
    fetchBase();
  }, [id, reset]);
  const onSubmit = async (dataBase: IBase) => {
    console.log("Submitting dataBase:", dataBase);
    try {
      setLoading(true);
      await updateBase(id!, dataBase);
      alert("Khu vực đã được cập nhật thành công!");
    } catch (error) {
      setFetchError("Cập nhật khu vực thất bại. Vui lòng thử lại.");
      console.error("Error updating base:", error);
    } finally {
      setLoading(false);
    }
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
                  <h1 className="h2">Cập Nhật Cơ Sở</h1>
                </div>
                {loading ? (
                  <p>Đang tải dữ liệu...</p>
                ) : fetchError ? (
                  <p className="text-danger">{fetchError}</p>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                      <label htmlFor="base_name" className="form-label">
                        Tên Cơ Sở:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="base_name"
                        {...register("base_name")}
                      />
                      {errors.base_name && (
                        <div className="text-danger">
                          {errors.base_name.message}
                        </div>
                      )}
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Cập Nhật
                    </button>
                  </form>
                )}
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateBase;
