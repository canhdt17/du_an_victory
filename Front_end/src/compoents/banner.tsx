import React from 'react'

type Props = {}

const Banner = (props: Props) => {
  return (
    <div>
         <section className="hero">
    <div className="container">
      <div className="hero__slider owl-carousel">
        <div className="hero__items set-bg" >
          <img src="./img/logo.png"></img>
          <div className="row">
            <div className="col-lg-6">
              <div className="hero__text">
                <div className="label">Adventure</div>
                <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                <p>After 30 days of travel across the world...</p>
                <a href="#"><span>Watch Now</span> <i className="fa fa-angle-right" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero__items set-bg" >
          <img  src="./img/hero/john-wick-2-posterjpg-fe1944-1280w-1487678027.jpg"></img>
          <div className="row">
            <div className="col-lg-6">
              <div className="hero__text">
                <div className="label">Adventure</div>
                <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                <p>After 30 days of travel across the world...</p>
                <a href="#"><span>Watch Now</span> <i className="fa fa-angle-right" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero__items set-bg" data-setbg="img/hero/photo1523941751007-15239417510082145939886.webp">
          <div className="row">
            <div className="col-lg-6">
              <div className="hero__text">
                <div className="label">Adventure</div>
                <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                <p>After 30 days of travel across the world...</p>
                <a href="#"><span>Watch Now</span> <i className="fa fa-angle-right" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Banner