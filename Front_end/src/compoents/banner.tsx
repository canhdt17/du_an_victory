import React from "react";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div>
      <div className="bannerimage">
      {/* <section className="hero">
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
  </section> */}
      <div className="slider">
        <div className="list">
          <div className="item">
            <img src="https://gcs.tripi.vn/public-tripi/tripi-feed/img/474113AgA/hinh-anh-cuc-quang-dep-nhat_014856850.jpg"></img>
          </div>
          <div className="item">
            <img src="https://images2.thanhnien.vn/528068263637045248/2024/1/25/c991278688992373366c97ea4881536e-65a11ac5cff6b880-1706156502395619358819.jpg"></img>
          </div>
          <div className="item">
            <img src="/src/img/hero/review-phim-train-to-busan-chuyen-tau-sinh-tu-2016-nghet-tho-tung-phut-mot-202206061124535108.jpg"></img>
          </div>
        </div>
        <div className="buttons">
          <button id="prev"><i className="fa-solid fa-arrow-left"></i></button>
          <button id="next"><i className="fa-solid fa-arrow-right"></i></button>
        </div>
        <ul className="dots">
          <li className="active"></li>
          <li></li>
          <li></li>
        </ul>
    </div>
      </div>
      
    </div>
    
  );
};

export default Banner;
