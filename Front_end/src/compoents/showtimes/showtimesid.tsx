import React, { useEffect, useState } from 'react'
import { ITrendings } from '../../interface/trendings'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios'




const ShowtimesId = () => {
    const [times,setTimes] = useState<IShowTime[]>([])
  const param = useParams()
  useEffect(()=>{
    (async()=>{
     try {
      const {data} = await axios.get(`http://127.0.0.1:8000/api/showtimes/${param?.id as number |string}`) 
     setTimes(data.showtime);
     
      
      
   
      
      
     } catch (error) {
      console.log(error);
      
     }
    })()
  },[])
  return (
    <div>
     
          <div className="grid grid-cols-2 gap-6">
             {Array.isArray(times) && times.map((time:IShowTime)=>(
             <div className="bg-gray-800 p-4 rounded-lg flex space-x-4" key={time.id}>
  <img src="https://via.placeholder.com/120x180" alt="Movie Poster" className="w-32 h-48 object-cover rounded-md" />
  
<div>
    <h3 className="text-lg font-semibold mb-2 text-white">{time.movie_id}</h3>
    
  </div>
 
  
</div>
  ))}
          </div>
      

    </div>
  )
}

export default ShowtimesId