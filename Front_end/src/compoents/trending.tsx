import React, { useEffect, useState } from 'react'
import { ITrendings } from '../interface/trendings'
import axios from 'axios'




const Trending = () => {
  const [trendings,setTrendings] = useState<ITrendings[]>([])
  useEffect(()=>{
    (async()=>{
      try {
        const {data} = await axios.get(`http://127.0.0.1:8000/api/movies`)
        setTrendings(data.data)
      } catch (error) {
        console.log(error);
        
      }
    })()
  },[])
  return (
    <div>
         <div className="row">
          {Array.isArray(trendings) && trendings.map((trendings:ITrendings)=>(
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                  <div className="product__item__pic set-bg" >
                  <img src="/src/img/recent/1.jpg"></img>
                    <div className="ep">{trendings.type_id}</div>
                    <div className="comment"><i className="fa fa-comments" /> {trendings.duration}</div>
                    <div className="view"><i className="fa fa-eye" /> {trendings.nation}</div>
                  </div>
                  <div className="product__item__text">
                    <ul>
                      <li>Active</li>
                      <li>Movie</li>
                    </ul>
                    <h5><a href="#">{trendings.name_movie}</a></h5>
                  </div>
                </div>
              </div>
          ))}
              
             
            </div>
    </div>
  )
}

export default Trending