import React, { useEffect, useState } from 'react'
import { INews } from '../interface/news'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

type Props = {}

const TopView = (props: Props) => {
  const [tintucs,setNews] = useState<INews[]>([])
  useEffect(()=>{
    (async()=>{
      try {
        const {data} = await axios.get(`http://127.0.0.1:8000/api/tin-tuc`)
        setNews(data)
      } catch (error) {
        console.log(error);
        
      }
    })()
  },[])
  return (
    <div>
        <div className="product__sidebar__view">
              <div className="section-title">
                <h5>Tin Tức</h5>
         </div>     
         {tintucs.map((tintuc:INews)=>(
              <div className="filter__gallery" key={tintuc.id}>
                <div className="product__sidebar__view__item set-bg mix day years" >
                 <div className="image-container">
             <NavLink to={`/detail-news/${tintuc.id}`}>    <img src={tintuc.imager}></img></NavLink>
                 
                 </div>
             
                 
                </div>
               
              </div>
         ))}
            </div>
    </div>
  )
}

export default TopView