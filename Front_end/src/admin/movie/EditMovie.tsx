/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { IMovie } from "../../interface/movie"; 
import Joi from "joi";
import "./Movie.css"
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { MovieById } from "../../service/movie"; 
import Logo from "./logo";
import HeaderDashboard from "./headerdashboard";
import MenuDashboard from "./menudashboard";

type Props = {
  onEditMovie: (id: string | number, editMovie: IMovie) => void;
};

const editMovieScheama = Joi.object({
  name_movie: Joi.string().required().label("Movie Name"),
  image: Joi.string().required().label("Image"),
  type_id: Joi.alternatives(Joi.string(), Joi.number())
    .required()
    .label("Type ID"),
  duration: Joi.string().required().label("Duration"),
  nation: Joi.string().required().label("Nation"),
  director: Joi.string().required().label("Director"),
  performer: Joi.string().required().label("Performer"),
  show: Joi.date().required().label("Show"),
  content: Joi.string().required().label("Content"),
  link_trailler: Joi.string().required().label("Link Trailler"),
  category_id: Joi.alternatives(Joi.string(), Joi.number())
    .required()
    .label("Category ID"),
  name_type: Joi.string().required().label("Name Type"),
  name_category: Joi.string().required().label("Name Category"),
});

const EditMovie: React.FC<Props> = ({ onEditMovie }) => {
  const { id } = useParams<string>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IMovie>({
    resolver: joiResolver(editMovieScheama),
  });

  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await MovieById(id!);
        console.log(data);  
        reset(data);
      } catch (error: any) {
        setFetchError("Failed to fetch category data.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id, reset]);

  const onSubmit = (data: IMovie) => {
    console.log(id);

    onEditMovie(id!, data);
  };
  return (
    <div className="movie">
      <Logo />
      <HeaderDashboard />
      <div className="container-fluid">
        <div className="row">
          <div className="sidebar border border-right col-md-3 col-lg-2 p-0 ">
            <MenuDashboard />
          </div>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 custom-main">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Cập nhật Phim</h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="movie-form">
              <div className="form-container">
                {loading && <p>Loading dữ liệu phim...</p>}
                {fetchError && <p className="text-danger">{fetchError}</p>}

                <div className="mb-3">
                  <label className="form-label">Tên Phim:</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("name_movie")}
                  />
                  {errors.name_movie && (
                    <div className="text-danger">
                      {errors.name_movie.message}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Image URL:</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("image")}
                  />
                  {errors.image && (
                    <div className="text-danger">{errors.image.message}</div>
                  )}
                </div>


                <div className="mb-3">
                  <label className="form-label">Duration:</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("duration")}
                  />
                  {errors.duration && (
                    <div className="text-danger">{errors.duration.message}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Nation:</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("nation")}
                  />
                  {errors.nation && (
                    <div className="text-danger">{errors.nation.message}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Director:</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("director")}
                  />
                  {errors.director && (
                    <div className="text-danger">{errors.director.message}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Performer:</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("performer")}
                  />
                  {errors.performer && (
                    <div className="text-danger">
                      {errors.performer.message}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Show Status:</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("show")}
                  />
                  {errors.show && (
                    <div className="text-danger">{errors.show.message}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Content:</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("content")}
                  />
                  {errors.content && (
                    <div className="text-danger">{errors.content.message}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Link Trailler:</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("link_trailler")}
                  />
                  {errors.link_trailler && (
                    <div className="text-danger">
                      {errors.link_trailler.message}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Name Type:</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("name_type")}
                  />
                  {errors.name_type && (
                    <div className="text-danger">
                      {errors.name_type.message}
                    </div>
                  )}
                </div>
                 
                <div className="mb-3">
                  <label className="form-label">Name Category:</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("name_category")}
                  />
                  {errors.name_category && (
                    <div className="text-danger">
                      {errors.name_category.message}
                    </div>
                  )}
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

export default EditMovie;
