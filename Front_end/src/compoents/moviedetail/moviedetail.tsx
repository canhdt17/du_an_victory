import React, { useEffect, useState } from "react";
import Header from "../header";
import Footer from "../footer";
import { ITrendings } from "../../interface/trendings";
import axios from "axios";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const [trendings, setTrendings] = useState<ITrendings[]>([]);
  const param = useParams();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `http://127.0.0.1:8000/api/movies/${param?.id as number | string}`
        );
        setTrendings(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <div>
        <Header></Header>

        <section className="anime-details spad">
          <div className="container">
            <div className="anime__details__content">
              <div className="row">
                <div className="col-lg-3">
                  <div
                    className="anime__details__pic set-bg"
                    data-setbg="img/trending/2.jpg"
                  >
                    <div className="comment">
                      <i className="fa fa-comments" /> {trendings.name_movie}
                    </div>
                    <div className="view">
                      <i className="fa fa-eye" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="anime__details__text">
                    <div className="anime__details__title">
                      <h3>sss</h3>
                      <span>
                        {" "}
                        Chung tôi mong muốn sẽ ra mắt một sản phẩm mà quý vị
                        mong muốn đợi
                      </span>
                    </div>
                    <div className="anime__details__rating">
                      <div className="rating">
                        <a href="#">
                          <i className="fa fa-star" />
                        </a>
                        <a href="#">
                          <i className="fa fa-star" />
                        </a>
                        <a href="#">
                          <i className="fa fa-star" />
                        </a>
                        <a href="#">
                          <i className="fa fa-star" />
                        </a>
                        <a href="#">
                          <i className="fa fa-star-half-o" />
                        </a>
                      </div>
                      <span></span>
                    </div>
                    <p>ssss</p>
                    <div className="anime__details__widget">
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <ul>
                            <li>
                              <span>Type:</span> TV Series
                            </li>
                            <li>
                              <span>Studios:</span> Lerche
                            </li>
                            <li>
                              <span>Date aired:</span> Oct 02, 2019 to ?
                            </li>
                            <li>
                              <span>Status:</span> Airing
                            </li>
                            <li>
                              <span>Genre:</span> Action, Adventure, Fantasy,
                              Magic
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <ul>
                            <li>
                              <span>Scores:</span> 7.31 / 1,515
                            </li>
                            <li>
                              <span>Rating:</span> 8.5 / 161 times
                            </li>
                            <li>
                              <span>Duration:</span> 24 min/ep
                            </li>
                            <li>
                              <span>Quality:</span> HD
                            </li>
                            <li>
                              <span>Views:</span> 131,541
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="anime__details__btn">
                      <a href="#" className="follow-btn">
                        {" "}
                        Đặt Vé
                      </a>
                      <a href="#" className="watch-btn">
                        <span>Watch Now</span>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MovieDetail;
