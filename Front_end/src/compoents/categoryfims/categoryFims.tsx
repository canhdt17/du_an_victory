import React, { useEffect, useState } from 'react'
import { ICategoryMovie } from '../../interface/categorymovie'
import axios from 'axios'

import {NavLink, Link  } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';
import CategoryFilmID from './categoryfimsid';



const CategoryFilms = () => {
   
    const [categorys, setCategorys] = useState<ICategoryMovie[]>([]);
  
    useEffect(() => {
      (async () => {
        try {
          const { data } = await axios.get(`http://127.0.0.1:8000/api/categories`);
        
          setCategorys(data.categories);
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
  <h2 className="text-2xl font-semibold text-center mb-4">Thể Loại Phim</h2>
  {/* Tabs */}
    <div>
   
     <div className="flex justify-center space-x-4 mb-6">
     {Array.isArray(categorys) && categorys.map((category:ICategoryMovie)=>(
    <Link to={`/categoryfilms/${category.id}`}> <button key={category.id} className="px-4 py-2 bg-gray-700 rounded-md text-sm font-medium">{category.name_category}</button></Link>
   
   ))}
     </div>
   

  
  {/* Note */}
  <p className="text-sm text-center text-gray-400 mb-6">
    Lưu ý: Khán giả dưới 13 tuổi chỉ chọn suất chiếu kết thúc trước 22h và khán giả dưới 16 tuổi chỉ chọn suất chiếu kết thúc trước 23h.
  </p>
  {/* Movie List */}

        </div>
        </div>
       
      <CategoryFilmID></CategoryFilmID>
    </div>
    <Footer></Footer>
  </div>
    );
}

export default CategoryFilms