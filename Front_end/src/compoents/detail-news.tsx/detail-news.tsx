import React, { useEffect, useState } from 'react'
import Header from '../header'
import Footer from '../footer'
import { INews } from '../../movie/news'
import axios from 'axios'
import { useParams } from 'react-router-dom'

type Props = {}

const DetailNews = (props: Props) => {
  const [news, setNews] = useState<INews[]>([]);
  const param = useParams();
  useEffect(() => {
    (async () => {
     try {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/api/lastest-tin-tuc/${param?.id as number|string}`
      );
      setNews([data]);
     } catch (error) {
      console.log(error);
      
     }
    })();
  }, []);
  return (
    <div className='bg-[#070720]'>
      <Header></Header>
        <div className="max-w-4xl mx-auto p-6 text-center mt-20 ">
 
  <h1 className="text-2xl font-bold mb-4 text-white">{news.name_TinTuc}</h1>

  <p className="mb-4 text-white">
  {news.sub_title}
  </p>
  <p className="mb-4 text-white">
  {news.content}
  </p>
{/* 
  <ul className="list-disc list-inside mb-6 text-left mx-auto max-w-md text-white">
    <li>⏰ Thời gian tặng quà từ 18h – 20h30 ngày 14/09/2024 (tối thứ 7)</li>
    <li>🎁 Sảnh tầng 1 của Trung tâm</li>
  </ul>
  <p className="mb-6 text-white">
    NCC mong rằng những chiếc đèn lồng sẽ mang lại những niềm vui nho nhỏ tới các bạn thiếu nhi mùa Tết Trung thu năm nay!
  </p>

  <div className="mb-6 text-white">
    <p>🏢 <b>Trung tâm Chiếu phim Quốc gia</b></p>
    <p>🌐 Website: <a href="https://chieuphimquocgia.com" className="text-blue-400 hover:underline">https://chieuphimquocgia.com</a></p>
    <p>📍 Địa chỉ: 87 Láng Hạ, Phường Thành Công, Quận Ba Đình, Hà Nội</p>
    <p>📞 Hotline: 024.3514.2279</p>
  </div> */}

  <div className="flex justify-center">
    <img src="https://images2.thanhnien.vn/528068263637045248/2024/1/25/e093e9cfc9027d6a142358d24d2ee350-65a11ac2af785880-17061562929701875684912.jpg" alt="Trung Thu" className="rounded-lg shadow-lg max-w-full h-auto" />
  </div>
</div>
    <Footer></Footer>
    </div>
  )
}

export default DetailNews