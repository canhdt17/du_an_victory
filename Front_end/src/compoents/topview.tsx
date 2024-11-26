import React, { useEffect, useState } from 'react'
import { INews } from '../movie/news';
import axios from 'axios';

type Props = {}

const TopView = (props: Props) => {
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
        <div className="product__sidebar__view">
        <div className="section-title ">
                  <h4>Tin Tức</h4>
                </div>
              <div className="filter__gallery">
                
                <div className="product__sidebar__view__item set-bg mix month week" >
         
                <img src='https://manhcuongbds.com/wp-content/uploads/2023/06/tin-tuc-3.jpg'></img>
                  <h5 ><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
                </div>
                
              </div>
            </div>
    </div>
  )
}

export default TopView