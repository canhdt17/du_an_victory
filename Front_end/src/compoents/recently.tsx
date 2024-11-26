import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ITrenDings } from '../movie/trendings'
import axios from 'axios'


type Props = {}

const Recently = (props: Props) => {
  const [recentlys,setRecentlys] = useState<ITrenDings[]>([])
  useEffect(()=>{
    (async()=>{
      try {
        const {data} = await axios.get('http://127.0.0.1:8000/api/phim-sap-chieu')

          
      setRecentlys(data)
      } catch (error) {
        console.log(error);
        
      }
    })()
  },[])
  
  return (
    <div >
      
            <div className="container mx-auto py-8">
              
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
   {recentlys?.map((recently:ITrenDings)=>(
    <div className="rounded-lg overflow-hidden shadow-lg" key={recently.id}>
     
      <img src={recently.image} alt="Movie Poster" className="w-full h-60 object-cover" />
      <div className="p-4">
        <NavLink to={`/client/details/${recently.id}`}><p className="text-sm text-gray-400">{recently.name_movie}</p></NavLink>
        <p className="text-xs text-gray-400 mb-2">{recently.show}</p>
    
      </div>
      
    </div>
   ))}
  </div>
</div>
    


    </div>
  )
}

export default Recently