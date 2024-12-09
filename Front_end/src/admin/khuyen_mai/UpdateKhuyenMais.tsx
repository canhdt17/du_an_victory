import React, { useEffect } from "react";

import { useForm } from "react-hook-form";
import { IKhuyenMai } from "../../interface/khuyen_mai";
import { khuyen_maiById } from "../../service/khuyen_mai";
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
  title: Joi.string().required().label("title"),
  content: Joi.string().required().label("content"),
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

  const onsubmit = (khuyenmaiData: IKhuyenMai) => {
    updateKhuyenMai(khuyenmaiData, param?.id as Number | string);
  };
  useEffect(() => {
    (async () => {
      const data = await khuyen_maiById(param?.id as number | string);
      reset({
        title: data.title,
        content: data.content,
        image: data.image,
        time_date: data.time_date,

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
                      Tiêu Đề
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      {...register("title")}
                    />
                    <div id="emailHelp" className="form-text">
                      {errors.title && (
                        <div className="text-danger ">
                          {errors.title.message}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mb-3">
                  
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Nội dung
                    </label>
                    <textarea                      
                      className="form-control"
                      id="exampleInputEmail1"
                      {...register("content")} >

                      </textarea>
                    <div id="emailHelp" className="form-text">
                      {errors.content && (
                        <div className="text-danger ">
                          {errors.content.message}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                      <label className="form-label text-white font-bold">Choose Image:</label>

                      <input className="text-white" type="file" onChange={handleFileChange} />
                      <button type='button' onClick={handleUpload}>Upload</button>
                      {imageUrl && (
                        <div>
                          <h2  className="text-white font-bold">Ảnh đã upload:</h2>
                          <img
                            src={imageUrl}
                            alt="Uploaded"
                            style={{ width: "200px", height: "auto" }}
                          />
                        </div>
                      )}
                      {errors.image && (
                        <div className="text-danger">{errors.image.message}</div>
                      )}
                  </div>
                  <div className="mb-3">

                    <input
                      type="hidden"
                      className="form-control"
                      id="exampleInputEmail1"
                      value={new Date().toISOString().slice(0, 10)}
                      {...register("time_date")}
                    />
                    <div id="emailHelp" className="form-text">
                      {errors.time_date && (
                        <div className="text-danger ">
                          {errors.time_date.message}
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
