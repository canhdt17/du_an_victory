/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { IMovie } from "../../interface/movie";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import Logo from "./logo";
import HeaderDashboard from "./headerdashboard";
import MenuDashboard from "./menudashboard";

type Props = {
  onAddMovie: (movie: IMovie) => void;
};
const movieScheama = Joi.object({
  name_movie: Joi.string().required().label("Movie Name"),
  // image: Joi.string().required().label("Image"),
  type_id: Joi.alternatives(Joi.string(), Joi.number())
    .required()
    .label("Type ID"),
  duration: Joi.string().required().label("Duration"),
  nation: Joi.string().required().label("Nation"),
  director: Joi.string().required().label("Director"),
  performer: Joi.string().required().label("Performer"),
  show: Joi.date().required().label("Show Status"),
  content: Joi.string().required().label("Content"),
  link_trailler: Joi.string().required().label("Link Trailler"),
  category_id: Joi.alternatives(Joi.string(), Joi.number())
    .required()
    .label("Category ID"),
  name_type: Joi.string().required().label("Name Type"),
  name_category: Joi.string().required().label("Name Category"),
});

const AddMovie: React.FC<Props> = ({ onAddMovie }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IMovie>({
    resolver: joiResolver(movieScheama),
  });

  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");


  const cloudinaryUrl =
    "https://api.cloudinary.com/v1_1/dfcwk3b1b/image/upload";
  const onSubmit = async (areaData: IMovie) => {
    try {
      // if (!file) return alert("Please select a file first.");

      // const formData = new FormData();
      // formData.append("file", file);
      // formData.append("upload_preset", "upload"); // Thay 'your_upload_preset' bằng upload preset bạn đã tạo trong Cloudinary
      // // Gửi yêu cầu POST tới Cloudinary
      // await fetch(cloudinaryUrl, {
      //   method: "POST",
      //   body: formData,
      // })
      //   .then((res) => res.json())
      //   .then((data) => {
      //     console.log("Uploaded Image URL:", data.secure_url);
      //     setImageUrl(data.secure_url); // Lưu URL của ảnh đã upload
      //   })
      //   .catch((error) => {
      //     console.error("Error uploading image:", error);
      //   });
      
      console.log("imageUrl: ", imageUrl);
      const formattedShowData = {
        ...areaData,
        show: new Date(areaData.show).toISOString().split("T")[0],
        image: imageUrl
      };
      // formattedShowData.image = imageUrl;
      console.log("formattedShowData: ", formattedShowData);

      await onAddMovie(formattedShowData);
      alert("Thêm phim thành công!");
    } catch (error: any) {
      alert(`Lỗi: ${error.message || "Không thể thêm phim"}`);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  

  const handleUpload = async () => {
    if (!file) return alert("Please select a file first.");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "upload"); // Thay 'your_upload_preset' bằng upload preset bạn đã tạo trong Cloudinary

    // Gửi yêu cầu POST tới Cloudinary
    fetch(cloudinaryUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Uploaded Image URL:", data.secure_url);
        setImageUrl(data.secure_url); // Lưu URL của ảnh đã upload
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  return (
    <div className="dashboard">
      <Logo />
      <HeaderDashboard />
      <div className="container-fluid">
        <div className="row">
          <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
            <MenuDashboard />
          </div>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="max-h-[66.8vh] text-white overflow-y-auto rounded-lg shadow-md custom-scrollbar">
              <h1 className="h2">Thêm Phim</h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="movie-form">
              <div className="form-container">
                <div className="mb-3">
                  <label className="form-label text-white font-bold">Tên Phim:</label>
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

                <div>
                  <label className="form-label text-white font-bold">Choose Image:</label>
                  {/* <input
                    type="text"
                    className="form-control"
                    {...register("image")}
                  /> */}
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
                  <label className="form-label text-white font-bold">Type ID:</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("type_id")}
                  />
                  {errors.type_id && (
                    <div className="text-danger">{errors.type_id.message}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label text-white font-bold">Duration:</label>
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
                  <label className="form-label text-white font-bold">Nation:</label>
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
                  <label className="form-label text-white font-bold">Director:</label>
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
                  <label className="form-label text-white font-bold">Performer:</label>
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
                  <label className="form-label text-white font-bold">Show Status:</label>
                  <input
                    type="date"
                    className="form-control"
                    {...register("show")}
                  />
                  {errors.show && (
                    <div className="text-danger">{errors.show.message}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label text-white font-bold">Content:</label>
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
                  <label className="form-label text-white font-bold">Link Trailler:</label>
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
                  <label className="form-label text-white font-bold">Category ID:</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("category_id")}
                  />
                  {errors.category_id && (
                    <div className="text-danger">
                      {errors.category_id.message}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label text-white font-bold">Name Type:</label>
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
                  <label className="form-label text-white font-bold">Name Category:</label>
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

export default AddMovie;
