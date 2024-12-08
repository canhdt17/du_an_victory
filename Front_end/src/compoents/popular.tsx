import React, { useEffect, useState } from 'react'
import { IPopulars } from '../interface/populars'
import axios from 'axios'

type Props = {}

const Popular = (props: Props) => {
  const [populars,setPopulars] = useState<IPopulars[]>([])
  useEffect(()=>{
    (async()=>{
      try {
        const {data} = await axios.get(`http://127.0.0.1:8000/api/phim-sap-chieu`)
        setPopulars(data)
      } catch (error) {
        console.log(error);
        
      }
    })()
  },[])
  return (
    <div>
        <div className="row">
          {populars.map((popular:IPopulars)=>(
             <div className="col-lg-4 col-md-6 col-sm-6" key={popular.id}>
                <div className="product__item">
                  <div className="product__item__pic set-bg">
                  <img src="/src/img/popular/1.jpg"></img>
                    <div className="ep">{popular.type_id}</div>
                    <div className="comment"><i className="fa fa-comments" />  {popular.duration}</div>
                    <div className="view"><i className="fa fa-eye" /> {popular.nation}</div>
                  </div>
                  <div className="product__item__text">
                    <ul>
                      <li>Active</li>
                      <li>Movie</li>
                    </ul>
                    <h5><a href="#">{popular.name_movie}</a></h5>
                  </div>
                </div>
              </div>
          ))}
             
              
            </div>
    </div>
  )
}

export default Popular