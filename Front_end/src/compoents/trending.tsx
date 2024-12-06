



import React, { useEffect, useState } from "react";
import { ITrendings } from "../interface/trendings";
import axios from "axios";
import { NavLink, useNavigate } from 'react-router-dom';


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
    <div className="row">
      {trendings.map((trending:ITrendings)=>(
         <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="product__item">
              <div className="product__item__pic set-bg">
              <img src="/src/img/popular/1.jpg"></img>
                <div className="ep">{trending.type_id}</div>
                <div className="comment"><i className="fa fa-comments" />  {trending.duration}</div>
                <div className="view"><i className="fa fa-eye" /> {trending.nation}</div>
              </div>
              <div className="product__item__text">
                <ul>
                  <li>Active</li>
                  <li>Movie</li>
                </ul>
                <NavLink to={`/movie-details/${trending.id}`}><h5><a href="#">{trending.name_movie}</a></h5></NavLink>
              </div>
            </div>
          </div>
      ))}
         
          
        </div>
</div>
  );
};

export default Trending;
