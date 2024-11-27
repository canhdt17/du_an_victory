import React from 'react'
import Header from '../compoents/header'
import Footer from '../compoents/footer'

type Props = {}

const MovieDetail = (props: Props) => {
  return (
    <div>
    <div>
 
  <Header></Header>

  <section className="anime-details spad">
    <div className="container">
      <div className="anime__details__content">
        <div className="row">
          <div className="col-lg-3">
            <div className="anime__details__pic set-bg" data-setbg="img/trending/2.jpg">
              <div className="comment"><i className="fa fa-comments" /> 11</div>
              <div className="view"><i className="fa fa-eye" /> 9141</div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="anime__details__text">
              <div className="anime__details__title">
                <h3>Fate Stay Night: Unlimited Blade</h3>
                <span> Chung tôi mong muốn sẽ ra mắt một sản phẩm mà quý vị mong muốn đợi</span>
              </div>
              <div className="anime__details__rating">
                <div className="rating">
                  <a href="#"><i className="fa fa-star" /></a>
                  <a href="#"><i className="fa fa-star" /></a>
                  <a href="#"><i className="fa fa-star" /></a>
                  <a href="#"><i className="fa fa-star" /></a>
                  <a href="#"><i className="fa fa-star-half-o" /></a>
                </div>
                <span>1.029 Votes</span>
              </div>
              <p>Every human inhabiting the world of Alcia is branded by a “Count” or a number written on
                their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss,
                never to be seen again. But her mother’s last words send Hina on a quest to find a
                legendary hero from the Waste War - the fabled Ace!</p>
              <div className="anime__details__widget">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <ul>
                      <li><span>Type:</span> TV Series</li>
                      <li><span>Studios:</span> Lerche</li>
                      <li><span>Date aired:</span> Oct 02, 2019 to ?</li>
                      <li><span>Status:</span> Airing</li>
                      <li><span>Genre:</span> Action, Adventure, Fantasy, Magic</li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <ul>
                      <li><span>Scores:</span> 7.31 / 1,515</li>
                      <li><span>Rating:</span> 8.5 / 161 times</li>
                      <li><span>Duration:</span> 24 min/ep</li>
                      <li><span>Quality:</span> HD</li>
                      <li><span>Views:</span> 131,541</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="anime__details__btn">
                <a href="#" className="follow-btn"> Đặt Vé</a>
                <a href="#" className="watch-btn"><span>Watch Now</span> </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rowrow">
        <div className="col-lg-8 col-md-8">
          <div className="anime__details__review">
           
            <div className='bodytainer'>
                <div className="container">
  <p className="notice">
    <strong>Lưu ý:</strong> Khán giả dưới 13 tuổi chỉ chọn suất chiếu kết thúc trước 22h và Khán giả dưới 16 tuổi chỉ chọn suất chiếu kết thúc trước 23h.
  </p>
  <div className="time-buttons">
    <button>10:05</button>
    <button>13:35</button>
    <button>17:40</button>
    <button>21:50</button>
    <button>23:20</button>
  </div>
</div>
            </div>
          

            {/* <div className="anime__review__item">
              <div className="anime__review__item__pic">
                <img src="img/anime/review-1.jpg"  />
              </div>
              <div className="anime__review__item__text">
                <h6>Chris Curry - <span>1 Hour ago</span></h6>
                <p>whachikan Just noticed that someone categorized this as belonging to the genre
                  "demons" LOL</p>
              </div>
            </div>
            <div className="anime__review__item">
              <div className="anime__review__item__pic">
                <img src="img/anime/review-2.jpg"  />
              </div>
              <div className="anime__review__item__text">
                <h6>Lewis Mann - <span>5 Hour ago</span></h6>
                <p>Finally it came out ages ago</p>
              </div>
            </div>
            <div className="anime__review__item">
              <div className="anime__review__item__pic">
                <img src="img/anime/review-3.jpg"  />
              </div>
              <div className="anime__review__item__text">
                <h6>Louis Tyler - <span>20 Hour ago</span></h6>
                <p>Where is the episode 15 ? Slow update! Tch</p>
              </div>
            </div>
            <div className="anime__review__item">
              <div className="anime__review__item__pic">
                <img src="img/anime/review-4.jpg"  />
              </div>
              <div className="anime__review__item__text">
                <h6>Chris Curry - <span>1 Hour ago</span></h6>
                <p>whachikan Just noticed that someone categorized this as belonging to the genre
                  "demons" LOL</p>
              </div>
            </div>
            <div className="anime__review__item">
              <div className="anime__review__item__pic">
                <img src="img/anime/review-5.jpg"  />
              </div>
              <div className="anime__review__item__text">
                <h6>Lewis Mann - <span>5 Hour ago</span></h6>
                <p>Finally it came out ages ago</p>
              </div>
            </div>
            <div className="anime__review__item">
              <div className="anime__review__item__pic">
                <img src="img/anime/review-6.jpg" />
              </div>
              <div className="anime__review__item__text">
                <h6>Louis Tyler - <span>20 Hour ago</span></h6>
                <p>Where is the episode 15 ? Slow update! Tch</p>
              </div>
            </div> */}
          </div>
          {/* <div className="anime__details__form">
            <div className="section-title">
              <h5>Your Comment</h5>
            </div>
            <form action="#">
              <textarea placeholder="Your Comment" defaultValue={""} />
              <button type="submit"><i className="fa fa-location-arrow" /> Review</button>
            </form>
          </div> */}
        </div>
        {/* <div className="col-lg-4 col-md-4">
            
          <div className="anime__details__sidebar">
            <div className="section-title">
              <h5>you might like...</h5>
            </div>
            <div className="product__sidebar__view__item set-bg" data-setbg="img/sidebar/tv-1.jpg">
              <div className="ep">18 / ?</div>
              <div className="view"><i className="fa fa-eye" /> 9141</div>
              <h5><a href="#">Boruto: Naruto next generations</a></h5>
            </div>
            <div className="product__sidebar__view__item set-bg" data-setbg="img/sidebar/tv-2.jpg">
              <div className="ep">18 / ?</div>
              <div className="view"><i className="fa fa-eye" /> 9141</div>
              <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
            </div>
            <div className="product__sidebar__view__item set-bg" data-setbg="img/sidebar/tv-3.jpg">
              <div className="ep">18 / ?</div>
              <div className="view"><i className="fa fa-eye" /> 9141</div>
              <h5><a href="#">Sword art online alicization war of underworld</a></h5>
            </div>
            <div className="product__sidebar__view__item set-bg" data-setbg="img/sidebar/tv-4.jpg">
              <div className="ep">18 / ?</div>
              <div className="view"><i className="fa fa-eye" /> 9141</div>
              <h5><a href="#">Fate/stay night: Heaven's Feel I. presage flower</a></h5>
            </div>
          </div>
        </div> */}
       
      

      </div>
    </div>
    <div className='bodyy'>
<div className="seatt-container">
  <div className="roww">
    <div className="seatt">A14</div>
    <div className="seatt">A13</div>
    <div className="seatt">A12</div>
    <div className="seatt">A11</div>
    <div className="seatt">A10</div>
    <div className="seatt">A9</div>
    <div className="seatt">A8</div>
    <div className="seatt">A7</div>
    <div className="seatt">A6</div>
    <div className="seatt">A5</div>
    <div className="seatt">A4</div>
    <div className="seatt">A3</div>
    <div className="seatt">A2</div>
    <div className="seatt">A1</div>
  </div>
  <div className="roww">
    <div className="seatt">B14</div>
    <div className="seatt">B13</div>
    <div className="seatt">B12</div>
    <div className="seatt">B11</div>
    <div className="seatt">B10</div>
    <div className="seatt">B9</div>
    <div className="seatt">B8</div>
    <div className="seatt">B7</div>
    <div className="seatt">B6</div>
    <div className="seatt">B5</div>
    <div className="seatt">B4</div>
    <div className="seatt">B3</div>
    <div className="seatt">B2</div>
    <div className="seatt">B1</div>
  </div>
  <div className="roww">
    <div className="seatt">C14</div>
    <div className="seatt">C13</div>
    <div className="seatt">C12</div>
    <div className="seatt">C11</div>
    <div className="seatt">C10</div>
    <div className="seatt">C9</div>
    <div className="seatt">C8</div>
    <div className="seatt">C7</div>
    <div className="seatt">C6</div>
    <div className="seatt">C5</div>
    <div className="seatt">C4</div>
    <div className="seatt">C3</div>
    <div className="seatt">C2</div>
    <div className="seatt">C1</div>
  </div>
</div>
        </div>
  </section>
  <Footer></Footer>
</div>

    </div>
  )
}

export default MovieDetail