import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
        <header className="header">
  <div className="container">
    <div className="row">
      <div className="col-lg-2">
        <div className="header__logo">
          <a href="./index.html">
            <img src="/src/img/logo.png" />
            <h3 className="header_title">Victory</h3>
          </a>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="header__nav">
          <nav className="header__menu mobile-menu">
          <ul>
                <li className="active"><a href="./index.html">Trang Chủ</a></li>
                <li><a href="./categories.html">Thể Loại</a>
                  <ul className="dropdown">
                    <li><a href="./categories.html">Phim khoa học viễn tưởng</a></li>
                    <li><a href="./anime-details.html">Phim Chiến tranh </a></li>
                    <li><a href="./anime-watching.html">Phim ca nhạc</a></li>
                    <li><a href="./blog-details.html">Phim kinh dị</a></li>
                    <li><a href="./signup.html">Phim hoạt hình</a></li>
                    <li><a href="./login.html">Phim Tội phạm</a></li>
                  </ul>
                </li>
                <li><a href="./blog.html"> Blog Của Chúng Tôi</a></li>
                <li><Link to={`/admin/dashboard`}>Admin</Link></li>
              </ul>
          </nav>
          
        </div>
      </div>
      <div className="col-lg-2">
        <div className="header__right">
         0000
        </div>
      </div>
    </div>
    <div id="mobile-menu-wrap" />
  </div>
</header>

    </div>
  )
}

export default Header