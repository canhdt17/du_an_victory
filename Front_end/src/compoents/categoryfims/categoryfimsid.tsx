import React, { useEffect, useState } from "react";

import { ITrendings } from "../../interface/trendings";
import axios from "axios";
import { useParams } from "react-router-dom";

const CategoryFilmID = () => {
  const [trends, setTrends] = useState<ITrendings[]>([]);
  const param = useParams();
  useEffect(() => {
    console.log("useEffect");
    (async () => {
      console.log(param.id);
      try {
        const { data } = await axios.get(
          `http://127.0.0.1:8000/api/categories/${
            param?.id as number | string
          }/movies`
        );
        setTrends(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [param.id]);

  return (
    <div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {Array.isArray(trends) && trends.map((trend:ITrendings)=>(  
          <div className="bg-gray-800 rounded-lg p-4 flex">
           <div> <img
              src={trend.image}
              alt={trend.name_movie}
              className="w-full h-64 object-cover rounded-md"
            /></div>
           <div className="ml-4">
           <h2 className="text-xl font-bold mt-4">{trend.name_movie}</h2>
            <p className="text-sm text-gray-400">Xuất Xứ: {trend.nation}</p>
            <p className="text-sm text-gray-400">Khởi chiếu: {trend.show}</p>
            <p className="text-sm mt-2">
              Thời Gian: {trend.duration}
            </p>
            <p className="text-sm mt-2">
              Tác Giả: {trend.director}
            </p>
            <p className="text-sm  mt-2">
              Diễn Viên: {trend.performer}
            </p>
            
           </div>
          </div>
        ))}
         
        </div>
      </div>
    </div>
  );
};

export default CategoryFilmID;
