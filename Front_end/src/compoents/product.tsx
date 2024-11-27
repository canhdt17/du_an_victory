import React from 'react'
import TopView from './topview'
import NewComment from './newcomment'
import Trending from './trending'
import Popular from './popular'
import Recently from './recently'
import LiveAction from './liveaction'

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
              <div className="col-lg-8 col-md-8 col-sm-8">
                <div className="section-title">
                  <h4>Đang Khởi Chiếu</h4>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="btn__all">
                  <a href="#" className="primary-btn">View All <span className="arrow_right" /></a>
                </div>
              </div>
            </div>
            <Trending></Trending>
          </div>
          <div className="popular__product">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-8">
                <div className="section-title">
                  <h4>Sắp Ra Mắt</h4>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="btn__all">
                  <a href="#" className="primary-btn">View All <span className="arrow_right" /></a>
                </div>
              </div>
            </div>
            <Popular></Popular>
          </div>
          <div className="recent__product">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-8">
                <div className="section-title">
                  <h4>Recently Added Shows</h4>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="btn__all">
                  <a href="#" className="primary-btn">View All <span className="arrow_right" /></a>
                </div>
              </div>
            </div>
            <Recently></Recently>
          </div>
          <div className="live__product">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-8">
                <div className="section-title">
                  <h4>Live Action</h4>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="btn__all">
                  <a href="#" className="primary-btn">View All <span className="arrow_right" /></a>
                </div>
              </div>
            </div>
                <LiveAction></LiveAction>
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