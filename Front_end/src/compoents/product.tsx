import React from 'react'
import TopView from './topview'
import NewComment from './newcomment'
import Trending from './trending'
import Popular from './popular'


type Props = {}

const Product = (props: Props) => {
  return (
    <div>
        <section className="product spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="trending__product">
            <div className="row">
              <div className="col-lg-4 col-md-8 col-sm-8">
                <div className="section-title">
                  <h4>Đang Khởi Chiếu</h4>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                
              </div>
            </div>
            <Trending></Trending>
          </div>
          <div className="popular__product">
            <div className="row">
              <div className="col-lg-3 col-md-8 col-sm-8">
                <div className="section-title">
                  <h4>Phim sắp chiếu</h4>
                </div>
              </div>
          
            </div>
            <Popular></Popular>
          </div>
          
        </div>
        <div className="col-lg-4 col-md-6 col-sm-8">
          <div className="product__sidebar">
            <TopView></TopView>
            <NewComment></NewComment>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Product