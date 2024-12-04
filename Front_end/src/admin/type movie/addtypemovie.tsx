import React from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import Logo from "../movie/logo";
import HeaderDashboard from "../movie/headerdashboard";
import MenuDashboard from "../movie/menudashboard";
import { ITypeMovie } from "../../interface/typemovie";

type Props = {
  addTypeMovie: (type: ITypeMovie) => void;
};

const createMovieSchema = Joi.object({
  name_type: Joi.string().required().label("Type Name"),
});

const AddTypeMovie: React.FC<Props> = ({ addTypeMovie }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITypeMovie>({
    resolver: joiResolver(createMovieSchema),
  });

  const onSubmit = (data: ITypeMovie) => {
    addTypeMovie(data);
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
                  <h1 className="h2">Thêm Kiểu Phim</h1>
                  <div className="btn-toolbar mb-2 mb-md-0"></div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label htmlFor="typeName" className="form-label">
                      Tên Loại Phim:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="typeName"
                      {...register("name_type")}
                    />
                    {errors.name_type && (
                      <div className="text-danger">
                        {errors.name_type.message}
                      </div>
                    )}
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Thêm
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

export default AddTypeMovie;
