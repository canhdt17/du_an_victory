import React, { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { INews } from "../movie/news";
import { NewList } from "../service/news";
import axios from "axios";
import { NavLink } from "react-router-dom";

type Props = {};

const TinTuc = (props: Props) => {
  const [news, setNews] = useState<INews[]>([]);
  useEffect(() => {
    (async () => {
     try {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/api/tin-tuc`
      );
      setNews(data);
     } catch (error) {
      console.log(error);
      
     }
    })();
  }, []);
  return (
   <div>
    <Header></Header>
    
     <div className="bg-[#070720] text-white p-8">
      
      <div className="grid grid-cols-4 gap-6 mt-[90px]">
        {news.map((newItem,i:number)=>(
  
  <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden" key={i+1}>
    <img src="https://manhcuongbds.com/wp-content/uploads/2023/06/tin-tuc-3.jpg"  className="w-full h-64 object-cover" />
          
    <div className="p-4">
       <NavLink to={`/detailnews/${newItem.id}`}><p className="text-sm text-gray-400">{newItem.name_TinTuc}</p></NavLink>
      <h3 className="text-lg font-bold mt-2">{newItem.content}</h3>
    </div>
  </div>
 ))}
</div>    
      
  


    </div>
    <Footer></Footer>
   </div>
  );
};

export default TinTuc;
