/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { IBase } from "../../interface/base";
import Logo from "../movie/logo";
import HeaderDashboard from "../movie/headerdashboard";
import MenuDashboard from "../movie/menudashboard";

type Props = {
  addBase: (baseData: IBase) => void;
};

const baseSchema = Joi.object({
  base_name: Joi.string().required().label("Base Name"),
});

const BaseAdd = ({ addBase }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBase>({
    resolver: joiResolver(baseSchema),
  });

  const onSubmit = (baseData: IBase) => {
    addBase(baseData);
  };

  return (
    <div>
      <div className="dashboards">
        <div>
          <Logo />
          <HeaderDashboard />
          <div className="container-fluid">
            <div className="row">
              <div className="sidebar border border-right col-md-3 col-lg-2 p-0">
                <div
                  className="offcanvas-md offcanvas-end"
                  tabIndex={-1}
                  id="sidebarMenu"
                  aria-labelledby="sidebarMenuLabel"
                >
                  <MenuDashboard />
                </div>
              </div>
              <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  <h1 className="h2">Thêm Cơ Sở</h1>
                  <div className="btn-toolbar mb-2 mb-md-0"></div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label htmlFor="baseName" className="form-label">
                      Tên Cơ Sở :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="baseName"
                      {...register("base_name")}
                    />

                    {errors.base_name && (
                      <div className="text-danger">
                        {errors.base_name.message}
                      </div>
                    )}
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
  );
};

export default BaseAdd;
