import React, { useEffect, useState } from 'react'
import Header from '../header'
import Footer from '../footer'
import { INews } from '../../movie/news'
import axios from 'axios'
import {  useParams } from "react-router-dom";


const DetailNews = () => {
  const [news,setNews] = useState<INews[]>([])
  const param = useParams()
  useEffect(()=>{
    (async()=>{
      try {
        const {data} = await axios.get(`http://127.0.0.1:8000/api/tin-tuc/${param?.id as number|string}`)
        setNews(data)
      } catch (error) {
        console.log(error);
        
      }
    })()
  },[])
  return (
    <div>
      <Header></Header>
      <div className='bg-gray-900 text-white min-h-screen flex justify-center items-center'>
             <div className="max-w-3xl text-center space-y-6 p-6">
  {/* Tiêu đề */}
  <h1 className="text-3xl font-bold uppercase text-yellow-400">{news.name_TinTuc}</h1>
  {/* Đoạn mô tả */}
  <div className="text-gray-300 text-sm space-y-4">
    <p>{news.sub_title}</p>
    <p>{news.content}</p>
    
  </div>
  {/* Hình ảnh */}
  <div className="mt-4">
    <img src="https://picsum.photos/200/300" alt={news.name_TinTuc} className="rounded-lg shadow-lg mx-auto" />
  </div>
  {/* Chú thích */}
  <p className="text-gray-400 text-xs mt-4">* Để biết thêm thông tin, vui lòng liên hệ hotline: **** *** ***</p>
</div>
      </div>

<Footer></Footer>
    </div>
  )
}

export default DetailNews