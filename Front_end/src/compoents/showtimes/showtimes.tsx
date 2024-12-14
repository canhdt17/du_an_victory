import React, { useEffect, useState } from 'react'
import Header from '../header'
import Footer from '../footer'
import { IShowTime } from '../../interface/shotime'
import axios from 'axios'
import { Link, useParams} from 'react-router-dom'

import ShowtimesId from './showtimesid'




const Showtimes = () => {
  const [times, setTimes] = useState<IShowTime[]>([]);

  
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`http://127.0.0.1:8000/api/showtimes`);
        console.log(data)
        setTimes(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);


   
  return (
    <div>
        <Header></Header>
        <div className='bg-[#070720] text-white min-h-screen p-8'>
 <div className="max-w-6xl mx-auto">
  {/* Title */}
  <h2 className="text-2xl font-semibold text-center mb-4">Phim đang chiếu</h2>
  {/* Tabs */}
    <div>
   
     <div className="flex justify-center space-x-4 mb-6">
   {Array.isArray(times) && times.map((times:IShowTime)=>(
     <Link to={`/showtimes/${times.id}`}><button key={times.id} className="px-4 py-2 bg-gray-700 rounded-md text-sm font-medium">{times.showtime_date}</button></Link>
   
   ))}
     </div>
   

  
  {/* Note */}
  <p className="text-sm text-center text-gray-400 mb-6">
    Lưu ý: Khán giả dưới 13 tuổi chỉ chọn suất chiếu kết thúc trước 22h và khán giả dưới 16 tuổi chỉ chọn suất chiếu kết thúc trước 23h.
  </p>
  {/* Movie List */}
  <ShowtimesId></ShowtimesId>
        </div>
        </div>
       
      
    </div>
    <Footer></Footer>
    </div>
  )
}

export default Showtimes