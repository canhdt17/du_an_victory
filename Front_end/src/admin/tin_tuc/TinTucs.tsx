/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ITinTuc } from "../../interface/tin_tuc";
import {
  tin_tucList,
  Deletetin_tuc,
  Updatetin_tuc,
} from "../../service/tin_tuc";
import ListTinTuc from "./ListTinTuc";
import MenuDashboard from '../movie/menudashboard';
import HeaderDashboard from '../movie/headerdashboard';
import Logo from '../movie/logo';


const TinTuc: React.FC = () => {
  const [TinTucs, setTinTucs] = useState<ITinTuc[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Hàm fetch dữ liệu
  const fecthTinTucs = async () => {
    setLoading(true);
    try {
      const data = await tin_tucList();
      setTinTucs(data || []); 
    } catch (error: any) {
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setLoading(false);
    }
  };

  // Hàm cập nhật Tin Tức
  async function updateTinTuc({
    id,
    updateTinTucs,
  }: {
    id?: number | string;
    updateTinTucs: ITinTuc;
  }) {
    try {
      await Updatetin_tuc(id, updateTinTucs);
      await fecthTinTucs();
      alert("Cập nhật Tin Tức thành công!");
    } catch (error: any) {
      alert("Cập nhật Tin Tức thất bại!");
      console.error(error);
    }
  }

  // Hàm xóa Tin Tức
  const deleteTinTuc = async (id: number | string) => {
    try {
      const confirmDelete = window.confirm(
        "Bạn có chắc chắn muốn xóa Tin Tức này?"
      );
      if (!confirmDelete) return;

      await Deletetin_tuc(id);
      alert("Xóa Tin Tức thành công!");
      setTinTucs(TinTucs.filter((TinTuc) => TinTuc.id !== id));
    } catch (error) {
      console.error("Xóa Tin Tức thất bại!");
    }
  };

  useEffect(() => {
    fecthTinTucs();
  }, []);

  return (
    <div>
      <div>
        <div className="dashboards">
          <div>
            <Logo></Logo>
            <HeaderDashboard></HeaderDashboard>
            <div className="container-fluid">
              <div className="row">
                <div className="sidebar border border-right col-md-3 col-lg-2 p-0 ">
                  <div
                    className="offcanvas-md offcanvas-end"
                    tabIndex={-1}
                    id="sidebarMenu"
                    aria-labelledby="sidebarMenuLabel"
                  >
                    <MenuDashboard></MenuDashboard>
                  </div>
                </div>
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                  <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Tin Tức</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                      <div className="btn-group me-2">
                        <NavLink to={`/admin/create_tin_tuc`}>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Thêm Tin Tức
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  {loading && <p>Đang tải dữ liệu...</p>}
                  {error && <p>Lỗi: {error}</p>}
                  {!loading && !error && (
                    <ListTinTuc
                      TinTucs={TinTucs}
                      loading={loading}
                      error={error}
                      updateTinTuc={updateTinTuc}
                      deleteTinTuc={deleteTinTuc}
                    />
                  )}
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TinTuc;
