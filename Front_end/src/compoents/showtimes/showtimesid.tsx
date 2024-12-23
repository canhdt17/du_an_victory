import React, { useEffect, useState } from 'react'
import { ITrendings } from '../../interface/trendings'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios'




const ShowtimesId = () => {
    const [trendings, setTrendings] = useState<ITrendings[]>([]);
  const param = useParams()
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`http://127.0.0.1:8000/api/movies/${param?.id as number|string}`);
     
        setTrendings(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
     
          <div className="grid grid-cols-2 gap-6">
        
         <div className="col-lg-4 col-md-6 col-sm-6" key={trendings.id}>
            <div className="product__item">
              <div className="product__item__pic set-bg">
              <img src={trendings.image}></img>
                <div className="ep">{trendings.type_id}</div>
                <div className="comment"><i className="fa fa-comments" />  {trendings.duration}</div>
                <div className="view"><i className="fa fa-eye" /> {trendings.nation}</div>
              </div>
              <div className="product__item__text">
                <ul>
                  <li>Active</li>
                  <li>Movie</li>
                </ul>
                <NavLink to={`/movie-details/${trendings.id}`}><h5><a href="#">{trendings.name_movie}</a></h5></NavLink>
              </div>
            </div>
          </div>

          </div>
      

    </div>
  )
}

export default ShowtimesId