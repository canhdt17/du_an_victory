import React, { useEffect, useState } from 'react'
import Logo from '../logo'
import HeaderDashboard from '../headerdashboard'
import MenuDashboard from '../menudashboard'
import { useForm } from 'react-hook-form'

import { IArea } from '../../movie/area'
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'


type Props = {
    addArea:IArea[];
}
const areaScheama = Joi.object({
  area_name:Joi.string().required(),
})
const CreateArea = ({addArea}: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<IArea>({
        resolver:joiResolver(areaScheama)
      });
     
      const onsubumit = (areaData: IArea) => {
        addArea(areaData);
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
                <h1 className="h2">Thêm Khu Vực</h1>
                <div className="btn-toolbar mb-2 mb-md-0"></div>
              </div>
              <form onSubmit={handleSubmit(onsubumit)}>
            
              
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Tên Khu Vực:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    {...register("area_name")}
                  />
                   <div id="emailHelp" className="form-text">
                    {errors.area_name && (
                      <div className="text-danger ">
                        {errors.area_name.message}
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

export default CreateArea