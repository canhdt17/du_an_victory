import React, { useEffect, useState } from 'react'
import Header from '../header'
import Footer from '../footer'
import { IPromotions } from '../../interface/promotinons'
import axios from 'axios'
import { useParams } from 'react-router-dom'

type Props = {}

const DetailPromotions = (props: Props) => {
  const [promotions, setPromotions] = useState<IPromotions[]>([])
  const param = useParams()
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`http://127.0.0.1:8000/api/khuyenmai/${param?.id as number | string}`)
        setPromotions(data)
      } catch (error) {
        console.log(error);

      }
    })()
  }, [])
  return (
    <div>
      <Header></Header>
      <div className='bg-[#070720] h-[450px]'>
        <div className="bg-[#070720] container mx-auto py-10 px-6">
          <h1 className="text-3xl font-bold text-center mb-8 text-white">{promotions.title}</h1>
          <div className="flex flex-col md:flex-row items-center">
            <img src={promotions.image} className="w-80 h-auto mb-6 md:mb-0 md:mr-10" />
            <div className="text-center md:text-left">
              <p className="text-lg mb-4">
                {promotions.content} <span className="text-red-500 font-bold">BỎNG MIX VỊ</span>
              </p>

              <p className="text-lg">
                Đến Rạp Chiếu Phim <span className="text-red-500 font-bold">xem phim</span> và thưởng thức ngay combo hay ho này nha!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>

    </div>
  )
}

export default DetailPromotions