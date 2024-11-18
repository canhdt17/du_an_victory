import React from 'react'

type Props = {}

const NewComment = (props: Props) => {
  return (
    <div>
          <div className="product__sidebar__comment">
              <div className="section-title">
                <h5>New Comment</h5>
              </div>
              <div className="product__sidebar__comment__item">
                <div className="product__sidebar__comment__item__pic">
                  <img src="img/sidebar/comment-1.jpg"  />
                </div>
                <div className="product__sidebar__comment__item__text">
                  <ul>
                    <li>Active</li>
                    <li>Movie</li>
                  </ul>
                  <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
                  <span><i className="fa fa-eye" /> 19.141 Viewes</span>
                </div>
              </div>
              <div className="product__sidebar__comment__item">
                <div className="product__sidebar__comment__item__pic">
                  <img src="img/sidebar/comment-2.jpg"  />
                </div>
                <div className="product__sidebar__comment__item__text">
                  <ul>
                    <li>Active</li>
                    <li>Movie</li>
                  </ul>
                  <h5><a href="#">Shirogane Tamashii hen Kouhan sen</a></h5>
                  <span><i className="fa fa-eye" /> 19.141 Viewes</span>
                </div>
              </div>
              <div className="product__sidebar__comment__item">
                <div className="product__sidebar__comment__item__pic">
                  <img src="img/sidebar/comment-3.jpg"  />
                </div>
                <div className="product__sidebar__comment__item__text">
                  <ul>
                    <li>Active</li>
                    <li>Movie</li>
                  </ul>
                  <h5><a href="#">Kizumonogatari III: Reiket su-hen</a></h5>
                  <span><i className="fa fa-eye" /> 19.141 Viewes</span>
                </div>
              </div>
              <div className="product__sidebar__comment__item">
                <div className="product__sidebar__comment__item__pic">
                  <img src="img/sidebar/comment-4.jpg"  />
                </div>
                <div className="product__sidebar__comment__item__text">
                  <ul>
                    <li>Active</li>
                    <li>Movie</li>
                  </ul>
                  <h5><a href="#">Monogatari Series: Second Season</a></h5>
                  <span><i className="fa fa-eye" /> 19.141 Viewes</span>
                </div>
              </div>
            </div>
    </div>
  )
}

export default NewComment