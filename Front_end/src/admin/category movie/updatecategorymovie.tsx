import { useEffect, useState } from "react";

import MenuDashboard from "../menudashboard";
import HeaderDashboard from "../headerdashboard";
import Logo from "../logo";
import { useForm } from "react-hook-form";
import { IRoom } from "../../movie/room";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { IArea } from "../../movie/area";
import { ListArea } from "../../service/area";
import { GetRoomById } from "../../service/room";
import { useParams } from "react-router-dom";
import { CategoryMovieById } from "../../service/categorymovie";
import { ICategoryMovie } from "../../movie/categorymovie";

type Props = {
    updateCategoryMovies:(id:number|string)=>void;
}
const createMovieScheama = Joi.object({
    name:Joi.string().required(),
})
const UpdateCategoryMovie = ({ updateCategoryMovies }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },reset
  } = useForm<IRoom>({
    resolver: joiResolver(createMovieScheama),
  });
 
  const param = useParams()
  useEffect(()=>{
    (async()=>{
      const data = await CategoryMovieById(param?.id as number|string)
      reset({
        name:data.name,
        
      })
    })()
  },[])
  const onsubumit = (roomData: IRoom) => {
   updateCategoryMovies(roomData,param?.id as number|string);
   
  };
  return (
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
                <h1 className="h2">Cập Danh Mục Phim</h1>
                <div className="btn-toolbar mb-2 mb-md-0"></div>
              </div>
              <form onSubmit={handleSubmit(onsubumit)}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Tên Danh Mục Phim:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    {...register("name")}
                  />
                  <div id="emailHelp" className="form-text">
                    {errors.name && (
                      <div className="text-danger ">
                        {errors.name.message}
                      </div>
                    )}
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Cập Nhật
                </button>
              </form>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCategoryMovie;
