import React, { useEffect, useState } from 'react'
import Header from '../header'
import Footer from '../footer'
import axios from 'axios'

import { INews } from '../../interface/news'

type Props = {}

const News = (props: Props) => {
    const [news,setNews] = useState<INews[]>([])
  
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
  <div className=" container mx-auto py-10 text-center">
    <h1 className="text-2xl font-bold">Tin tức</h1>
  </div>
  <div>
    
  </div>
  {/* News Section */}
 
    <div className="container mx-auto">
    <div className="grid grid-cols-4 gap-6">
      {/* News Card 1 */}
    
      <div className=" rounded-lg overflow-hidden shadow-lg">
        <img src="https://via.placeholder.com/300x200"  className="w-full h-40 object-cover" />
        <div className="p-4">
          <p className="text-sm text-gray-400">03/10/2024</p>
          <h2 className="text-lg font-bold mt-2 text-white">Chương trình phim kỉ niệm nhân dịp 70 năm Giải phóng Thủ đô</h2>
        </div>
      </div>
   
    </div>
  </div>
 
  
</div>
<Footer></Footer>
    </div>
  )
}

export default News