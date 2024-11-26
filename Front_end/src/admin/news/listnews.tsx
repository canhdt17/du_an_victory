// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { INews } from "../../movie/news";
// import { NewList } from "../../service/news";
// import { NewsData } from "../../movie/news";
// type Props = {
//   delNews:(id:number|string) => void
// };

// const ListNews = ({delNews}: Props) => {
//     const [news,setNews] = useState<INews[]>([])
//     useEffect(()=>{
//         (async()=>{
//             const data = await NewList()
//             setNews(data)
//         })()
//     },[])
//   return (
//     <div>
//      <div className="table-responsive small">
//      <table className="table table-striped table-sm">
//           <thead>
//             <tr className="text-center">
//               <th scope="col">STT</th>
//               <th scope="col">Tên Tin Tức</th>
//               <th scope="col">Phụ Đề</th>
//               <th scope="col">Nội Dung</th>
//               <th scope="col">Ảnh</th>
//               <th scope="col">Button</th>
//             </tr>
//           </thead>
//           <tbody className="text-center">
//           { Array.isArray(news) && news.map((tintuc: INews, i: number) => (
//                 <tr key={tintuc.id}>
//                   <td>{i + 1}</td>
//                   <td>{tintuc.name_TinTuc}</td>
//                   <td>{tintuc.sub_title}</td>
//                   <td>{tintuc.content}</td>
//                   <td><img src={tintuc.imager} width={50} height={50}></img></td>
//                   <td className="text-center">
                    
                        
                 
//                       <button
//                         type="button"
//                         className="btn btn-danger text-center " onClick={()=> delNews(tintuc.id)}
//                       >
//                         Xóa
//                       </button>
                
                      
//                      <NavLink to={`/admin/news/updatenews/${tintuc.id}`}>
//                       <button
//                         type="button"
//                         className="btn btn-warning text-center ml-3"
//                       >
//                         Cập nhật
//                       </button>
//                      </NavLink>
                      
                      
                    
//                   </td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ListNews;
