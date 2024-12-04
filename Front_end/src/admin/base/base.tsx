/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../movie/logo";
import HeaderDashboard from "../movie/headerdashboard";
import MenuDashboard from "../movie/menudashboard";
import { IBase } from "../../interface/base";
import { BaseList, DeleteBase, UpdateBase } from "../../service/base";
import ListBases from "./listbase";

const Base: React.FC = () => {
  const [bases, setBases] = useState<IBase[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Hàm fetch dữ liệu
  const fetchBases = async () => {
    try {
      const data = await BaseList();
      setBases(data?.bases || []);
    } catch (error: any) {
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setLoading(false);
    }
  };

  // Hàm cập nhật khu vực
  const updateBases = async (
    id: number | string,
    updateBase: IBase
  ): Promise<void> => {
    try {
      const data = await UpdateBase(id, updateBase);
      if (data?.bases) {
        setBases(data.bases);
      }
      await fetchBases();
      alert("Cập nhật danh mục phim thành công");
    } catch (error: any) {
      alert("Cập nhật danh mục phim thất bại!");
      console.error("Update Category Error:", error?.message || error);
    }
  };

  // Hàm xóa khu vực
  const deleteBases = async (id: number | string) => {
    try {
      const confirmDelete = window.confirm(
        "Bạn có chắc chắn muốn xóa khu vực này?"
      );
      if (!confirmDelete) return;

      await DeleteBase(id);
      alert("Xóa khu vực thành công!");
      setBases(bases.filter((base) => base.id !== id));
    } catch (error) {
      console.error("Xóa khu vực thất bại!");
    }
  };

  useEffect(() => {
    fetchBases();
  }, []);

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
                  <h1 className="h2">Danh Sách Cơ Sở</h1>
                  <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                      <NavLink to={`/admin/base/addbase`}>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Thêm Cơ Sở
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
                {loading && <p>Đang tải dữ liệu...</p>}
                {error && <p>Lỗi: {error}</p>}
                {!loading && !error && (
                  <ListBases
                    bases={bases}
                    loading={loading}
                    error={error}
                    updateBases={updateBases}
                    deleteBases={deleteBases}
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

export default Base;
