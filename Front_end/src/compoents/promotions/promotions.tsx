import React, { useEffect, useState } from 'react'
import Header from '../header'
import Footer from '../footer'
import { IPromotions } from '../../interface/promotinons'
import axios from 'axios'
import { NavLink } from 'react-router-dom'



const Promotions = () => {
  const [promotions,setPromotions] = useState<IPromotions[]>([])
  useEffect(()=>{
    (async()=>{
      try {
        const {data} = await axios.get(`http://127.0.0.1:8000/api/khuyenmai`)
        setPromotions(data)
      } catch (error) {
        console.log(error);
        
      }
    })()
  },[])
  return (
    <div>
      <Header></Header>
      <div className='bg-[#070720] '>
  <div className="bg-[#070720] container mx-auto py-10 text-center">
    <h1 className="text-2xl font-bold text-white">Khuyến Mãi</h1>
  
  <div className="container mx-auto mt-4">
    <div className="grid grid-cols-4 gap-6">
      {promotions.map((promotion:IPromotions)=>(
      <div className=" rounded-lg overflow-hidden shadow-lg">
        <img src={promotion.image} className="w-full h-40 object-cover" />
        <div className="p-4">
        <NavLink to={`/promotions/${promotion.id}`}><p className="text-sm text-gray-400">{promotion.time_date}</p></NavLink>
          <NavLink to={`/promotions/${promotion.id}`}><h2 className="text-lg font-bold mt-2 text-white">{promotion.title}</h2></NavLink>
        </div>
      </div>
  ))}    
    </div> 
  
  </div>
</div>
</div>
<Footer></Footer>
    </div>
  )
}

export default Promotions