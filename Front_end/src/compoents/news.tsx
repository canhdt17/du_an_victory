import React, { useEffect, useState } from 'react'
import Header from './header'
import Footer from './footer'
import { INews } from '../movie/news'
import { NewList } from '../service/news'

type Props = {}

const TinTuc = (props: Props) => {

  return (
    <div className='bg-[#070720]'>
        <Header></Header>
        <div className="container mt-5 ">
  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">

     <div className="col">
      <div className="card h-100">
        <img src="https://via.placeholder.com/300x180" className="card-img-top" alt="Image" />
        <div className="card-body">
          <p className="card-date">13/09/2024</p>
          <h5 className="card-title">VUI TẾT TRUNG THU - RINH QUÀ VI VU</h5>
        </div>
      </div>
    </div>

    
  </div>
</div>
    <Footer></Footer>
    </div>
  )
}

export default TinTuc