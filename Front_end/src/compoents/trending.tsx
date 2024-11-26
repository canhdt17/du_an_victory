import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ITrenDings } from '../movie/trendings'
import axios from 'axios'




const Trending = () => {
  const [trendings,setTrenDings] = useState<ITrenDings[]>([])
  useEffect(()=>{
    (async()=>{
     try {
      const {data} = await axios.get('http://127.0.0.1:8000/api/movies')

          
      setTrenDings(data.data)
     } catch (error) {
      console.log(error);
      
     }
    })()
  },[])
  
  return (
    <div >
      
            
              
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
   {trendings.map((trending:ITrenDings)=>(
    <div className="rounded-lg overflow-hidden shadow-lg  ">
     
      <img src="https://kenh14cdn.com/2018/4/17/1-15239417362561181064004.jpg" className="w-full h-60 object-cover" />
      <div className="p-4">
        
        <NavLink to={`/details/${trending.id}`}><p className="text-sm text-gray-400 h-[50px]">{trending.name_movie}</p></NavLink>
        <p className="text-xs text-gray-400 mb-2">{trending.show}</p>
    
      </div>
      
    </div>
   ))}
  </div>

    


    </div>
  )
}

export default Trending