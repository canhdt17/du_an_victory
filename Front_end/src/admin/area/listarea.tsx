import { NavLink } from "react-router-dom";
import { IArea } from "../../movie/area";

type Props = {

  delArea:(id:number|string) => void
}

const ListAreas = ({delArea}: Props) => {
  const [areas,setAreas] = useState<IArea[]>([])
  useEffect(()=>{
    (async()=>{
      const data = await ListArea()
      setAreas(data)
    })()
  },[])

  areas: IArea[];
  loading: boolean;
  error: string | null;
  updateAreas: (id: number | string, updateArea: IArea) => void;
  deleteArea: (id: number | string) => void;
};

const ListAreas: React.FC<Props> = ({ areas, loading, error, deleteArea }) => {

  return (
    <div>
      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr className="text-center">
              <th scope="col">STT</th>
              <th scope="col">Tên Khu Vực</th>
              <th scope="col">Hành động</th>
            </tr>
          </thead>
          <tbody className="text-center">

            {areas.map((area:IArea,i:number)=>(
               <tr key={area.area_id}>

                  <td>{i+1}</td>

            {loading && (
              <tr>
                <td colSpan={3}>Đang tải...</td>
              </tr>
            )}
            {error && (
              <tr>
                <td colSpan={3}>Lỗi: {error}</td>
              </tr>
            )}
            {areas.length > 0 ? (
              areas.map((area, index) => (
                <tr key={area.area_id}>
                  <td>{index + 1}</td>

                  <td>{area.area_name}</td>
                  <td>

                  
                       <button
                        type="button"
                        className="btn btn-danger text-center " onClick={()=> delArea(area.id)}
                      >
                        Xóa
                      </button>
                     
        

                    <NavLink to={`/admin/area/edit/${area.area_id}`}>
                      <button
                        type="button"
                        className="btn btn-warning text-center"

                      >
                        Cập nhật
                      </button>
                    </NavLink>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deleteArea(area.area_id)}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3}>Không có dữ liệu</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListAreas;
