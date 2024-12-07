import React, { useEffect, useState } from 'react'
import { ITrendings } from '../../interface/trendings'
import { useParams } from 'react-router-dom'
import axios from 'axios'



const ShowtimesId = () => {
    const [trendings,setTrendings] = useState<ITrendings[]>([])
  const param = useParams()
  useEffect(()=>{
    (async()=>{
     try {
      const {data} = await axios.get(`http://127.0.0.1:8000/api/movies/${param?.id as number |string}`) 
      setTrendings(data);
     } catch (error) {
      console.log(error);
      
     }
    })()
  },[])
  return (
    <div>
      
          <div className="grid grid-cols-2 gap-6">
             <div className="bg-gray-800 p-4 rounded-lg flex space-x-4">
  <img src="https://via.placeholder.com/120x180" alt="Movie Poster" className="w-32 h-48 object-cover rounded-md" />
  <div>
    <h3 className="text-lg font-semibold mb-2 text-white">{trendings.name_movie}</h3>
    <p className="text-sm text-gray-400 mb-1">{trendings.name_movie}</p>
    <p className="text-sm text-gray-400 mb-1">{trendings.name_movie}</p>
    <p className="text-sm text-gray-400 mb-1">{trendings.name_movie}</p>
    <p className="text-sm text-gray-400 mb-4">{trendings.name_movie}</p>
    <div className="space-x-2">
      <button className="px-4 py-1 bg-gray-700 rounded-md text-sm">21:50</button>
    </div>
  </div>
</div>
          </div>
       

    </div>
  )
}

export default ShowtimesId