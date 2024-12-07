import React from "react";
import { useForm } from "react-hook-form";
import { ICategoryMovie } from "../../interface/categorymovie";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import Logo from "../movie/logo";
import HeaderDashboard from "../movie/headerdashboard";
import MenuDashboard from "../movie/menudashboard";


type Props = {
  addCreateMovie: (category: ICategoryMovie) => void;
};

const createMovieSchema = Joi.object({
  name_category: Joi.string().required().label("Category Name"),
});

const AddMovieCategory: React.FC<Props> = ({ addCreateMovie }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICategoryMovie>({
    resolver: joiResolver(createMovieSchema),
  });

  const onSubmit = (data: ICategoryMovie) => {
    addCreateMovie(data);
  };

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
                  <h1 className="h2">Thêm Khu Vực</h1>
                  <div className="btn-toolbar mb-2 mb-md-0"></div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label htmlFor="categoryName" className="form-label">
                      Tên Danh Mục:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="categoryName"
                      {...register("name_category")}
                    />
                    {errors.name_category && (
                      <div className="text-danger">
                        {errors.name_category.message}
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

export default AddMovieCategory;
