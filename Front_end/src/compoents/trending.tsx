import React, { useEffect, useState } from "react";
import { ITrendings } from "../interface/trendings";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Trending = () => {
  const navigate = useNavigate();
  const [trendings, setTrendings] = useState<ITrendings[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`http://127.0.0.1:8000/api/movies`);
        setTrendings(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleDetails = (id: number) => {
    navigate(`/select-movie`);
  };

  return (
    <div>
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-4 gap-6">
          {Array.isArray(trendings) &&
            trendings.map((trending: ITrendings) => (
              <div
                className="rounded-lg overflow-hidden shadow-lg"
                key={trending.id}
              >
                <div className="relative">
                  <div
                    onClick={() => handleDetails(trending.id)} 
                    className="cursor-pointer"
                  >
                     <img
                      src={trending.image}  
                      alt={trending.name_movie}  
                      className="w-full h-64 object-cover transition-all duration-300 ease-in-out transform hover:scale-105 hover:opacity-80"
                    />
                  </div>
                  <span className="absolute top-2 left-2 bg-red-600 text-white text-sm font-bold px-2 py-1 rounded">
                    {trending.type_id}
                  </span>
                </div>
                <div className="p-4">
                  {/* <div className="flex justify-between items-center mb-3 text-gray-400 text-sm">
                    <span>
                      <i className="fas fa-eye" /> 11
                    </span>
                    <span>
                      <i className="fas fa-users" /> 9141
                    </span>
                  </div> */}

                  <h3 className="text-lg font-bold mb-2 text-white">
                    {trending.name_movie}
                  </h3>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
