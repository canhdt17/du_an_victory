import React from 'react'
import { NavLink } from 'react-router-dom'


type Props = {}

const Trending = (props: Props) => {
  return (
    <div>
      
           <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                  <div className="product__item__pic set-bg">
                    <img src="/src/img/trending/2.jpg"></img>
                    <div className="ep">18 / 18</div>
                    <div className="comment"><i className="fa fa-comments" /> 11</div>
                    <div className="view"><i className="fa fa-eye" /> 9141</div>
                  </div>
                  <div className="product__item__text">
                    <ul>
                      <li>Active</li>
                      <li>Movie</li>
                    </ul>
                    <h5><NavLink to={`/moviedetail`}>The Seven Deadly Sins: Wrath of the Gods</NavLink></h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                  <div className="product__item__pic set-bg" >
                  <img src="/src/img/trending/1.jpg"></img>
                    <div className="ep">18 / 18</div>
                    <div className="comment"><i className="fa fa-comments" /> 11</div>
                    <div className="view"><i className="fa fa-eye" /> 9141</div>
                  </div>
                  <div className="product__item__text">
                    <ul>
                      <li>Active</li>
                      <li>Movie</li>
                    </ul>
                    <h5><a href="#">Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien</a></h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                  <div className="product__item__pic set-bg" >
                  <img src="/src/img/trending/3.webp"></img>
                    <div className="ep">18 / 18</div>
                    <div className="comment"><i className="fa fa-comments" /> 11</div>
                    <div className="view"><i className="fa fa-eye" /> 9141</div>
                  </div>
                  <div className="product__item__text">
                    <ul>
                      <li>Active</li>
                      <li>Movie</li>
                    </ul>
                    <h5><a href="#">Shingeki no Kyojin Season 3 Part 2</a></h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                  <div className="product__item__pic set-bg">
                  <img src="/src/img/trending/4.jpg"></img>
                    <div className="ep">18 / 18</div>
                    <div className="comment"><i className="fa fa-comments" /> 11</div>
                    <div className="view"><i className="fa fa-eye" /> 9141</div>
                  </div>
                  <div className="product__item__text">
                    <ul>
                      <li>Active</li>
                      <li>Movie</li>
                    </ul>
                    <h5><a href="#">Fullmetal Alchemist: Brotherhood</a></h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                  <div className="product__item__pic set-bg" >
                  <img src="/src/img/trending/5.jpg"></img>
                    <div className="ep">18 / 18</div>
                    <div className="comment"><i className="fa fa-comments" /> 11</div>
                    <div className="view"><i className="fa fa-eye" /> 9141</div>
                  </div>
                  <div className="product__item__text">
                    <ul>
                      <li>Active</li>
                      <li>Movie</li>
                    </ul>
                    <h5><a href="#">Shiratorizawa Gakuen Koukou</a></h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                  <div className="product__item__pic set-bg" >
                  <img src="/src/img/trending/6.jpg"></img>
                    <div className="ep">18 / 18</div>
                    <div className="comment"><i className="fa fa-comments" /> 11</div>
                    <div className="view"><i className="fa fa-eye" /> 9141</div>
                  </div>
                  <div className="product__item__text">
                    <ul>
                      <li>Active</li>
                      <li>Movie</li>
                    </ul>
                    <h5><a href="#">Code Geass: Hangyaku no Lelouch R2</a></h5>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Trending