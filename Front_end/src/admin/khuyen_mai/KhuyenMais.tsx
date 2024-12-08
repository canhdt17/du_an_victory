/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IKhuyenMai } from "../../interface/khuyen_mai";
import {
  khuyen_maiList,
  Deletekhuyen_mai,
  Updatekhuyen_mai,
} from "../../service/khuyen_mai";
import ListKhuyenMai from "./ListKhuyenMai";
import MenuDashboard from '../movie/menudashboard';
import HeaderDashboard from '../movie/headerdashboard';
import Logo from '../movie/logo';

const KhuyenMai: React.FC = () => {
  const [KhuyenMais, setKhuyenMais] = useState<IKhuyenMai[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Hàm fetch dữ liệu
  const fecthKhuyenMais = async () => {
    setLoading(true);
    try {
      const data = await khuyen_maiList();
      setKhuyenMais(data || []); 
    } catch (error: any) {
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setLoading(false);
    }
  };

  // Hàm cập nhật Khuyến Mãi
  async function updateKhuyenMai({
    id,
    updateKhuyenMais,
  }: {
    id?: number | string;
    updateKhuyenMais: IKhuyenMai;
  }) {
    try {
      await Updatekhuyen_mai(id, updateKhuyenMais);
      await fecthKhuyenMais();
      alert("Cập nhật Khuyến Mãi thành công!");
    } catch (error: any) {
      alert("Cập nhật Khuyến Mãi thất bại!");
      console.error(error);
    }
  }

  // Hàm xóa Khuyến Mãi
  const deleteKhuyenMai = async (id: number | string) => {
    try {
      const confirmDelete = window.confirm(
        "Bạn có chắc chắn muốn xóa Khuyến Mãi này?"
      );
      if (!confirmDelete) return;

      await Deletekhuyen_mai(id);
      alert("Xóa Khuyến Mãi thành công!");
      setKhuyenMais(KhuyenMais.filter((KhuyenMai) => KhuyenMai.id !== id));
    } catch (error) {
      console.error("Xóa Khuyến Mãi thất bại!");
    }
  };

  useEffect(() => {
    fecthKhuyenMais();
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
                    <h1 className="h2">Khuyến Mãi</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                      <div className="btn-group me-2">
                        <NavLink to={`/admin/create_khuyen_mai`}>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Thêm Khuyến Mãi
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  {loading && <p>Đang tải dữ liệu...</p>}
                  {error && <p>Lỗi: {error}</p>}
                  {!loading && !error && (
                    <ListKhuyenMai
                      KhuyenMais={KhuyenMais}
                      loading={loading}
                      error={error}
                      updateKhuyenMai={updateKhuyenMai}
                      deleteKhuyenMai={deleteKhuyenMai}
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

export default KhuyenMai;
