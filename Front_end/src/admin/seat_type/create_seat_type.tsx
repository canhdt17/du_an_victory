import React from 'react'
import Logo from '../logo'
import HeaderDashboard from '../headerdashboard'
import MenuDashboard from '../menudashboard'
import { useForm } from 'react-hook-form'
import { ISeatType } from '../../movie/seat_type'
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'

type Props = {
    addSeatType:ISeatType[]
}
const seatTypeScheama = Joi.object({
    seat_type_name:Joi.string().required(),
    seat_price:Joi.number().required()
})
const CreateSeatType = ({addSeatType}: Props) => {
    const {register,handleSubmit,formState:{errors}} = useForm<ISeatType>({
        resolver:joiResolver(seatTypeScheama)
    })
    const onsubmit = (seatypeData:ISeatType)=>{
        addSeatType(seatypeData)
    }
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
                <h1 className="h2">Thêm Kiểu Ghế</h1>
                <div className="btn-toolbar mb-2 mb-md-0"></div>
              </div>
              <form onSubmit={handleSubmit(onsubmit)}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Kiểu Ghế:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    {...register("seat_type_name")}
                  />
                  <div id="emailHelp" className="form-text">
                    {errors.seat_type_name && (
                      <div className="text-danger ">
                        {errors.seat_type_name.message}
                      </div>
                    )}
                  </div>
                </div>
              
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Giá Ghế:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                
                    {...register("seat_price")}
                  />
                  <div id="emailHelp" className="form-text">
                    {errors.seat_price && (
                      <div className="text-danger ">
                        {errors.seat_price.message}
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

export default CreateSeatType