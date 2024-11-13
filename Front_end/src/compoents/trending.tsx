import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ITrenDings } from '../movie/trendings'
import axios from 'axios'


type Props = {}

const Trending = (props: Props) => {
  const [trendings,setTrenDings] = useState<ITrenDings[]>([])
  useEffect(()=>{
    (async()=>{
      const {data} = await axios.get('http://127.0.0.1:8000/api/movies')
        //cai nay dung roi    
        console.log(data.data);
          
      setTrenDings(data.data)
    })()
  },[])
  
  return (
    <div >
      
            <div className="container mx-auto py-8">
              
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
   {trendings.map((trending:ITrenDings)=>(
    <div className="rounded-lg overflow-hidden shadow-lg">
     
      <img src={trending.image} alt="Movie Poster" className="w-full h-60 object-cover" />
      <div className="p-4">
        <p className="text-sm text-gray-400">{trending.name_movie}</p>
        <p className="text-xs text-gray-400 mb-2">{trending.show}</p>
    
      </div>
      
    </div>
   ))}
  </div>
</div>
    


    </div>
  )
}

export default Trending