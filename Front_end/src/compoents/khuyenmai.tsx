import React, { useEffect, useState } from 'react'
import Header from './header'
import Footer from './footer'
import { IPromotion } from '../movie/promotion'
import axios from 'axios'

type Props = {}

const Promotion = (props: Props) => {
    const [promotions,setPromotions] =useState<IPromotion[]>([])
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
    
     <div className="bg-[#070720] text-white p-8">
      
      <div className="grid grid-cols-4 gap-6 mt-[90px]">
        {promotions.map((promotion,i:number)=>(
  
  <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden" key={i+1}>
    <img src="https://manhcuongbds.com/wp-content/uploads/2023/06/tin-tuc-3.jpg"  className="w-full h-64 object-cover" />
          
    <div className="p-4">
      <h3 className="text-lg font-bold mt-2">{promotion.time_date}</h3>
      <p className="text-sm text-gray-400"> {promotion.content}</p>
      
    </div>
  </div>
 ))}
</div>    
      
  


    </div>
    <Footer></Footer>
   </div>
  )
}

export default Promotion