import React, { useEffect, useState } from "react";



import Seat from "./seat";
import Header from "../header";
import Footer from "../footer";

import Time from "./time";
import { ITrenDings } from "../../movie/trendings";
import { DetailsById } from "../../service/details";
import { useParams } from "react-router-dom";







const Details = () => {
 const [trendings,setTrendings] = useState<ITrenDings[]>([])
 const param = useParams()
 useEffect(()=>{
  (async()=>{
    try {
      const data = await DetailsById(param?.id as number|string)
      setTrendings([data])
    } catch (error) {
      console.log(error);
    }
  })()
 },[])
  return (
    <div>
      <div>
        <Header></Header>

        <section className="anime-details spad mt-10" id="wrapper">
          <div className="container">
           
            <div className="anime__details__content">
             
               
                <div className="max-w-4xl mx-auto rounded-lg shadow-lg p-6 flex">
            
                <div className="w-1/3">
                  <img
                    src={trendings.image}
                    alt="Movie Poster"
                    className="rounded-lg shadow-md"
                  />
                </div>
             
                <div className="w-2/3 ml-6">
                  <h2 className="text-3xl font-bold mb-2 text-white">
                  {trendings.name_movie}
                  </h2>
                  <div className="flex items-center mb-4">
                    <span className="text-sm bg-gray-600 text-white px-2 py-1 rounded">
                    {trendings. type_id}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">
                    <strong>Nation</strong> &nbsp; • &nbsp;{trendings. duration} &nbsp; •
                    &nbsp; Đạo diễn:{trendings.director}
                  </p>
                  <p className="text-sm text-gray-400 mb-4">
                  {trendings.performer}
                  </p>
                  <p className="text-sm text-gray-400 mb-4">
                    Khởi chiếu:  {trendings.show}   
                  </p>
                  <p className="text-sm text-gray-300 mb-4">
                  {trendings.content}
                  </p>
                  <p className="text-red-500 mb-4">Kiểm duyệt: .</p>
               
                  <div className="flex space-x-4">
                    <button className="bg-transparent border border-yellow-500 text-yellow-500 px-4 py-2 rounded hover:bg-yellow-500 hover:text-gray-900 transition duration-200">
                      Chi tiết nội dung
                    </button>
                   
                  </div>
                </div>
                 
              </div>
          
            </div> 
       
            <div className="rowrow">
              <div className="col-lg-8 col-md-8">
                <div className="anime__details__review">
                  <div className="bodytainer">
                    <div className="container">
                      <p className="notice">
                        <strong>Lưu ý:</strong> Khán giả dưới 13 tuổi chỉ chọn
                        suất chiếu kết thúc trước 22h và Khán giả dưới 16 tuổi
                        chỉ chọn suất chiếu kết thúc trước 23h.
                      </p>
                      <Time></Time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Seat></Seat>
        </section>
        <Footer></Footer>
      </div>
      
    </div>
  );
};

export default Details;
