import React, { useEffect } from "react";

import { useForm } from "react-hook-form";
import { IKhuyenMai } from "../../interface/khuyen_mai";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useParams } from "react-router-dom";
import Logo from "../movie/logo";
import HeaderDashboard from "../movie/headerdashboard";
import MenuDashboard from "../movie/menudashboard";

type Props = {
  updateKhuyenMai: (id: number | string) => void;
};
const KhuyenMaiScheama = Joi.object({
  khuyen_mai_name: Joi.string().required(),
  seat_price: Joi.number().required(),
});
const UpdateKhuyenMai = ({ updateKhuyenMai }: Props) => {
  const param = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IKhuyenMai>({
    resolver: joiResolver(KhuyenMaiScheama),
  });
  const onsubmit = (seatypeData: IKhuyenMai) => {
    updateKhuyenMai(seatypeData, param?.id as number | string);
  };
  useEffect(() => {
    (async () => {
      const data = await SeatsTypeByID(param?.id as number | string);
      reset({
        khuyen_mai_name: data.khuyen_mai_name,
        seat_price: data.seat_price,
      });
    })();
  }, []);
  return (
    <div>
      <div className="dashboards">
        <div>
          <Logo></Logo>
          <HeaderDashboard></HeaderDashboard>
          <div className="container-fluid">
            <div className="row">
              <div className="sidebar border border-right col-md-3 col-lg-2 p-0 ">
                <div
                  className="offcanvas-md offcanvas-end "
                  tabIndex={-1}
                  id="sidebarMenu"
                  aria-labelledby="sidebarMenuLabel"
                >
                  <MenuDashboard></MenuDashboard>
                </div>
              </div>
              <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  <h1 className="h2">Cập nhật kiểu ghế</h1>
                  <div className="btn-toolbar mb-2 mb-md-0"></div>
                </div>
                <form onSubmit={handleSubmit(onsubmit)}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Kiểu Ghế
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      {...register("khuyen_mai_name")}
                    />
                    <div id="emailHelp" className="form-text">
                      {errors.khuyen_mai_name && (
                        <div className="text-danger ">
                          {errors.khuyen_mai_name.message}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Giá ghế 
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      {...register("seat_price")}
                    />
                    <div id="emailHelp" className="form-text">
                      {errors.seat_price && (
                        <div className="text-danger ">
                          {errors.seat_price.message}
                        </div>
                      )}
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Duyệt
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

export default UpdateKhuyenMai;
