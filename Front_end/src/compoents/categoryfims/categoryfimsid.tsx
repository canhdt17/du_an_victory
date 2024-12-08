import React, { useEffect, useState } from "react";

import { ITrendings } from "../../interface/trendings";
import axios from "axios";
import {  useParams } from "react-router-dom";



const CategoryFilmID = () => {
  const [trends, setTrends] = useState<ITrendings[]>([]);
  const param = useParams();
  useEffect(() => {
    console.log('useEffect');
    (async () => {
      console.log(param.id)
      try {
        const { data } =  await axios.get(
          `http://127.0.0.1:8000/api/categories/${param?.id as number | string}/movies`
        );
        setTrends(data);
        console.log(data);
        
      } catch (error) {
        console.log(error);
      }
    })();
  }, [param.id]);

  return (
    <div>
     
  <div className="max-w-7xl mx-auto">
   {Array.isArray(trends) && trends.map((trend:ITrendings)=>(
         <div className="grid grid-cols-2 gap-6" key={trend.id}>
         <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex">
         <img src={trend.image} alt="Poster phim" className="w-1/3 object-cover" />
         <div className="p-4 flex-grow">
           <h3 className="text-lg font-semibold"> {trend.name_movie}</h3>
           <p className="text-sm text-gray-400">{trend.category_id}</p>
           <p className="text-sm text-gray-400">{trend.duration}</p>
           <p className="text-sm text-gray-400">{trend.show}</p>

           <div className="mt-4 flex space-x-2">
             <button className="px-3 py-1 bg-blue-500 rounded text-sm">20:00</button>
             <button className="px-3 py-1 bg-blue-500 rounded text-sm">22:00</button>
           </div>
         </div>
       </div>
</div>
   ))}
  </div>
</div>
  );
};

export default CategoryFilmID;
