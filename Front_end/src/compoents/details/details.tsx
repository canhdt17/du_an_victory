import React, { useEffect, useState} from 'react'
import Header from '../header'
import Footer from '../footer'

import axios from 'axios'
import {  useParams } from "react-router-dom";
import { ITrenDings } from '../../movie/trendings'
type Props = {}

const Details = (props: Props) => {
  const [trendings,setTrenDings] = useState<ITrenDings[]>([])
  const param = useParams()
  useEffect(()=>{
    (async()=>{
        try {
          const {data} = await axios.get(`http://127.0.0.1:8000/api/movies/${param?.id as number|string}`)
          setTrenDings(data)
        } catch (error) {
          console.log(error);
          
        }
    })()
  },[])
  return (
    <div>
      <Header></Header>
     <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
     <div className=" p-6 rounded-lg shadow-lg flex max-w-4xl">
  {/* Poster */}
  <div className="w-1/3">
    <img src={trendings.image	} alt="Movie Poster" className="rounded-lg shadow-lg" />
  </div>
  {/* Content */}
  <div className="w-2/3 pl-6">
    <h2 className="text-2xl font-bold uppercase mb-2">{trendings.name_movie}</h2>
    <div className="text-sm text-gray-400 mb-4">
      <p><strong>{trendings.nation}:</strong> {trendings.duration}</p>
      <p><strong>Đạo diễn:</strong> {trendings.director	}</p>
      <p><strong>Diễn viên:</strong> {trendings.performer}</p>
      <p><strong>Khởi chiếu:</strong>{trendings.show}</p>
    </div>
    <p className="text-gray-300 mb-4">
      {trendings.content}
    </p>
   
    <div className="flex items-center space-x-4">
      <a href="https://youtu.be/IcpKkCzvcU4?si=gtrJxkEn-1FJCEzg" className="text-yellow-400 font-semibold underline">Chi tiết nội dung</a>
      <a href={trendings.link_trailler} className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-600">Xem trailer</a>
    </div>
  </div>
</div>
     </div>
    <Footer></Footer>
    </div>
  )
}

export default Details