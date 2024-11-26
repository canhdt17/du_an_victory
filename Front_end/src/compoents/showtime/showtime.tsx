import React, { useEffect, useState } from 'react'
import Header from '../header'
import Footer from '../footer'
import { IShowTime } from '../../movie/shotime'
import axios from 'axios'

type Props = {}

const ShowTime = (props: Props) => {
    const [showtimes,setShowTimes] = useState<IShowTime[]>([])
    useEffect(()=>{
        (async()=>{
            try {
                const {data} = await axios.get(`http://127.0.0.1:8000/api/showtimes`)
                setShowTimes(data)
            } catch (error) {
                console.log(error);
                
            }
        })()
    },[])
  return (
    <div className='bg-[#070720]'>
        <Header></Header>
       
            <div className="container mx-auto py-6 ">
      <div>
  <h1 className="text-3xl font-bold text-center mb-4 text-white mt-20">Phim Đang Chiếu</h1>
  <p className="text-center text-sm text-red-500">
    Lưu ý: Khán giả dưới 13 tuổi chỉ chọn suất chiếu kết thúc trước 22h và dưới 16 tuổi kết thúc trước 23h.
  </p>  
</div>
 {Array.isArray(showtimes) && showtimes.map((showtime:IShowTime)=>(
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4 "  key={showtime.id}>
   
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex">
      <img src="https://via.placeholder.com/300x450" className="w-40 h-auto object-cover" />
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-2">{showtime.movie_id}</h2>
          <p className="text-sm mb-1">Xuất xứ: Việt Nam</p>
          <p className="text-sm text-gray-400 mb-2">{showtime.showtime_date}</p>
          <p className="text-sm text-red-500">{showtime.start_time}</p>
        </div>
        {/* <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-gray-700 rounded text-sm">11:05</span>
          <span className="px-3 py-1 bg-gray-700 rounded text-sm">16:35</span>
          <span className="px-3 py-1 bg-gray-700 rounded text-sm">22:10</span>
        </div> */}
      </div>
    </div>
   
  </div>
   ))}
</div>
       
        

<Footer></Footer>
    </div>
  )
}

export default ShowTime