import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { INews } from '../../movie/news';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import Logo from '../logo';
import HeaderDashboard from '../headerdashboard';
import MenuDashboard from '../menudashboard';

type Props = {
    newsAdd: (newsData: INews) => void;
  };
  const roomScheama = Joi.object({
    name_TinTuc: Joi.string().required(),
    sub_title: Joi.string().required(),
    content: Joi.string().required(),
    imager: Joi.string().required(),
  });
const CreateNews = ({newsAdd}: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<INews>({
        resolver: joiResolver(roomScheama),
      });
      const onsubumit = (newsData: INews) => {
        newsAdd(newsData);
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
                <h1 className="h2">Thêm Tin Tức</h1>
                <div className="btn-toolbar mb-2 mb-md-0"></div>
              </div>
              <form onSubmit={handleSubmit(onsubumit)}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Tên Tin Tức:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    {...register("name_TinTuc")}
                  />
                  <div id="emailHelp" className="form-text">
                    {errors.name_TinTuc && (
                      <div className="text-danger ">
                        {errors.name_TinTuc.message}
                      </div>
                    )}
                  </div>
                </div>
               
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                   Phụ Đề:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    {...register("sub_title")}
                  />
                  <div id="emailHelp" className="form-text">
                    {errors.sub_title && (
                      <div className="text-danger ">
                        {errors.sub_title.message}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                  Nội Dung:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    {...register("content")}
                  />
                  <div id="emailHelp" className="form-text">
                    {errors.content && (
                      <div className="text-danger ">
                        {errors.content.message}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                  Hình Ảnh:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    {...register("imager")}
                  />
                  <div id="emailHelp" className="form-text">
                    {errors.imager && (
                      <div className="text-danger ">
                        {errors.imager.message}
                      </div>
                    )}
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </main>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default CreateNews