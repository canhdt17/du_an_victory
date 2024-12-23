/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { IMovie } from "../../interface/movie";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./Movie.css";
import Logo from "./logo";
import HeaderDashboard from "./headerdashboard";
import MenuDashboard from "./menudashboard";
import { ITypeMovie } from "../../interface/typemovie";
import { ICategoryMovie } from "../../interface/categorymovie";

type Props = {
  onAddMovie: (movie: IMovie) => void;
};

const movieSchema = Joi.object({
  name_movie: Joi.string().required().label("Movie Name"),
  type_id: Joi.number().required().label("Type"),
  duration: Joi.string().required().label("Duration"),
  nation: Joi.string().required().label("Nation"),
  director: Joi.string().required().label("Director"),
  performer: Joi.string().required().label("Performer"),
  show: Joi.date().required().label("Show Status"),
  content: Joi.string().required().label("Content"),
  link_trailler: Joi.string().required().label("Link Trailer"),
  category_id: Joi.number().required().label("Category"),
});

const AddMovie: React.FC<Props> = ({ onAddMovie }) => {
  const [types, setTypes] = useState<ITypeMovie[]>([]);
  const [categories, setCategories] = useState<ICategoryMovie[]>(
    []
  );
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");

  const cloudinaryUrl = "https://api.cloudinary.com/v1_1/dfcwk3b1b/image/upload";

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const typesRes = await axios.get("http://127.0.0.1:8000/api/types");
        const categoriesRes = await axios.get("http://127.0.0.1:8000/api/categories");
        setTypes(typesRes.data.types);
        setCategories(categoriesRes.data.categories);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IMovie>({
    resolver: joiResolver(movieSchema),
  });

  const onSubmit = async (data: IMovie) => {
    try {
      const formattedData = {
        ...data,
        show: new Date(data.show).toISOString().split("T")[0],
        image: imageUrl,
      };
      await onAddMovie(formattedData);
      alert("Thêm phim thành công!");
    } catch (error: any) {
      alert(`Lỗi: ${error.message || "Không thể thêm phim"}`);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFile(selectedFile || null);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file first.");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "upload");

    try {
      const res = await fetch(cloudinaryUrl, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setImageUrl(data.secure_url);
      alert("Ảnh đã được upload thành công!");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="movie">
      <Logo />
      <HeaderDashboard />
      <div className="container-fluid">
        <div className="row">
          <div className="sidebar border border-right col-md-3 col-lg-2 p-0">
            <MenuDashboard />
          </div>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 custom-main">
            <div className="max-h-[66.8vh] text-white overflow-y-auto rounded-lg shadow-md custom-scrollbar">
              <h1 className="h2">Thêm Phim</h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="movie-form">
              <div className="form-container">
                {/* Movie Name */}
                <div className="mb-3">
                  <label className="form-label text-white font-bold">Tên Phim:</label>
                  <input type="text" className="form-control" {...register("name_movie")} />
                  {errors.name_movie && <div className="text-danger">{errors.name_movie.message}</div>}
                </div>

                {/* Image Upload */}
                <div>
                  <label className="form-label text-white font-bold">Ảnh:</label>
                  <input className="text-white" type="file" onChange={handleFileChange} />
                  <button type="button" onClick={handleUpload}>
                    Upload
                  </button>
                  {imageUrl && (
                    <div>
                      <h2 className="text-white font-bold">Ảnh đã upload:</h2>
                      <img src={imageUrl} alt="Uploaded" style={{ width: "200px", height: "auto" }} />
                    </div>
                  )}
                </div>

                {/* Type */}
                <div className="mb-3">
                  <label className="form-label text-white font-bold">Định Dạng:</label>
                  <select className="form-control" {...register("type_id")}>
                    <option value="">Chọn định dạng</option>
                    {types.map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.name_type}
                      </option>
                    ))}
                  </select>

                  {errors.type_id && <div className="text-danger">{errors.type_id.message}</div>}
                </div>

                {/* Duration */}
                <div className="mb-3">
                  <label className="form-label text-white font-bold">Thời Lượng:</label>
                  <input type="text" className="form-control" {...register("duration")} />
                  {errors.duration && <div className="text-danger">{errors.duration.message}</div>}
                </div>

                {/* Nation */}
                <div className="mb-3">
                  <label className="form-label text-white font-bold">Quốc Gia:</label>
                  <input type="text" className="form-control" {...register("nation")} />
                  {errors.nation && <div className="text-danger">{errors.nation.message}</div>}
                </div>

                {/* Director */}
                <div className="mb-3">
                  <label className="form-label text-white font-bold">Đạo Diễn:</label>
                  <input type="text" className="form-control" {...register("director")} />
                  {errors.director && <div className="text-danger">{errors.director.message}</div>}
                </div>

                {/* Performer */}
                <div className="mb-3">
                  <label className="form-label text-white font-bold">Diễn Viên:</label>
                  <input type="text" className="form-control" {...register("performer")} />
                  {errors.performer && <div className="text-danger">{errors.performer.message}</div>}
                </div>

                {/* Show Date */}
                <div className="mb-3">
                  <label className="form-label text-white font-bold">Thời Gian:</label>
                  <input type="date" className="form-control" {...register("show")} />
                  {errors.show && <div className="text-danger">{errors.show.message}</div>}
                </div>

                {/* Content */}
                <div className="mb-3">
                  <label className="form-label text-white font-bold">Nội Dung:</label>
                  <input type="text" className="form-control" {...register("content")} />
                  {errors.content && <div className="text-danger">{errors.content.message}</div>}
                </div>

                {/* Link Trailer */}
                <div className="mb-3">
                  <label className="form-label text-white font-bold">Link Trailer:</label>
                  <input type="text" className="form-control" {...register("link_trailler")} />
                  {errors.link_trailler && <div className="text-danger">{errors.link_trailler.message}</div>}
                </div>

                {/* Category */}
                <div className="mb-3">
                  <label className="form-label text-white font-bold">Thể Loại:</label>
                  <select className="form-control" {...register("category_id")}>
                    <option value="">Chọn thể loại</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name_category}
                      </option>
                    ))}
                  </select>

                  {errors.category_id && <div className="text-danger">{errors.category_id.message}</div>}
                </div>
              </div>

              <button className="btn btn-primary" type="submit">
                Thêm Phim
              </button>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
