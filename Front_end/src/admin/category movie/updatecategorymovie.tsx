/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { ICategoryMovie } from "../../interface/categorymovie";
import { CategoryMovieById } from "../../service/categorymovie";
import Logo from "../movie/logo";
import HeaderDashboard from "../movie/headerdashboard";
import MenuDashboard from "../movie/menudashboard";


type Props = {
  updateCategoryMovies: (id: number | string, dataCategory: ICategoryMovie) => void;
};

const updateMovieSchema = Joi.object({
  name_category: Joi.string().required().label("Category Name"),
});

const UpdateCategoryMovie: React.FC<Props> = ({ updateCategoryMovies }) => {
  const { id } = useParams<{ id: string }>();
  const [formData, setFormData] = useState<ICategoryMovie | undefined>(undefined)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICategoryMovie>({
    resolver: joiResolver(updateMovieSchema),
  });

  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        setLoading(true);
        const cate = await CategoryMovieById(id!);
        setFormData(cate)
      } catch (error: any) {
        setFetchError("Không thể lấy dữ liệu danh mục.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [id]);


  const onSubmit = async (dataCategory: ICategoryMovie) => {
    // console.log("Submitting DataCategory:", dataCategory);
    try {
      setLoading(true);
      await updateCategoryMovies(id!, dataCategory);
      alert("Danh sách khu vực đã được cập nhật thành công!");
    } catch (error) {
      setFetchError("Cập nhật khu vực thất bại. Vui lòng thử lại.");
      console.log(error);
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
                  <h1 className="h2">Cập Nhật Danh Mục</h1>
                </div>
                {loading ? (
                  <p>Đang tải dữ liệu...</p>
                ) : fetchError ? (
                  <p className="text-danger">{fetchError}</p>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {fetchError && <p className="text-danger">{fetchError}</p>}
                    <div className="mb-3">
                      <label htmlFor="name_category" className="form-label">
                        Tên Danh Mục Phim:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name_category"
                        {...register("name_category")}
                        value={formData?.name_category}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            name_category: e.target.value
                          } as ICategoryMovie)
                        }}
                      />
                      {errors.name_category && (
                        <div className="text-danger">
                          {errors.name_category.message}
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

export default UpdateCategoryMovie;
