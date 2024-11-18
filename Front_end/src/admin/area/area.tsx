/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink } from "react-router-dom";
import MenuDashboard from "../menudashboard";
import HeaderDashboard from "../headerdashboard";
import Logo from "../logo";
import ListAreas from "./listarea";
import { IArea } from "../../movie/area";
import { useEffect, useState } from "react";
import { AreaDelete, AreaUpdate, ListArea } from "../../service/area";


type Props = {
  delArea:(id:number|string) => void
}

const Area = ({delArea}: Props) => {

const Area: React.FC = () => {
  const [areas, setAreas] = useState<IArea[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Hàm fetch dữ liệu
  const fetchAreas = async () => {
    setLoading(true);
    try {
      const data = await ListArea();
      setAreas(data || []); // Đảm bảo dữ liệu được set đúng
    } catch (error: any) {
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setLoading(false);
    }
  };

  // Hàm cập nhật khu vực
  const updateAreas = async (area_id: number | string, updateArea: IArea) => {
    try {
      await AreaUpdate(area_id, updateArea);
      await fetchAreas(); // Fetch lại dữ liệu sau khi cập nhật
      alert("Cập nhật khu vực thành công!");
    } catch (error: any) {
      alert("Cập nhật khu vực thất bại!");
      console.error(error);
    }
  };

  // Hàm xóa khu vực
  const deleteArea = async (area_id: number | string) => {
    try {
      const confirmDelete = window.confirm(
        "Bạn có chắc chắn muốn xóa khu vực này?"
      );
      if (!confirmDelete) return;

      await AreaDelete(area_id);
      alert("Xóa khu vực thành công!");
      setAreas(areas.filter((area) => area.area_id !== area_id));
    } catch (error) {
      console.error("Xóa khu vực thất bại!");
    }
  };

  useEffect(() => {
    fetchAreas();
  }, []);

  return (
    <div>
      <div className="dashboards">
        <div>
          <Logo />
          <HeaderDashboard />
          <div className="container-fluid">
            <div className="row">
              <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
                <div
                  className="offcanvas-md offcanvas-end bg-body-tertiary"
                  tabIndex={-1}
                  id="sidebarMenu"
                  aria-labelledby="sidebarMenuLabel"
                >
                  <MenuDashboard />
                </div>
              </div>

                   <ListAreas delArea={delArea}></ListAreas>
              
   

              <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  <h1 className="h2">Danh Sách Khu Vực</h1>
                  <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                      <NavLink to={`/admin/area/createarea`}>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Thêm Khu Vực
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
                {loading && <p>Đang tải dữ liệu...</p>}
                {error && <p>Lỗi: {error}</p>}
                {!loading && !error && (
                  <ListAreas
                    areas={areas}
                    loading={loading}
                    error={error}
                    updateAreas={updateAreas}
                    deleteArea={deleteArea}
                  />
                )}
              </main>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
}
export default Area;
