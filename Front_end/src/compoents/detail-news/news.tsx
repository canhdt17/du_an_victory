import React, { useEffect, useState } from 'react'
import Header from '../header'
import Footer from '../footer'
import { INews } from '../../interface/news'
import axios from 'axios'
import { NavLink } from 'react-router-dom'



const News = () => {
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
      <Header></Header>
      <div className='bg-[#070720]'>
      <div className="bg-[#070720] container mx-auto py-10 text-center">
    <h1 className="text-2xl font-bold text-white">Tin Tức</h1>
  
  <div className="container mx-auto mt-4">
    <div className="grid grid-cols-4 gap-6">
      {tintucs.map((tintuc:INews)=>(
      <div className=" rounded-lg overflow-hidden shadow-lg">
        <img src={tintuc.imager} className="w-full h-40 object-cover" />
        <div className="p-4">
        
          <NavLink to={`/detail-news/${tintuc.id}`}><h2 className="text-lg font-bold mt-2 text-white">{tintuc.sub_title}</h2></NavLink>
          <NavLink to={`/detail-news/${tintuc.id}`}><p className="text-sm text-gray-400">{tintuc.name_TinTuc}</p></NavLink>
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

export default News