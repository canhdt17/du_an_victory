import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div>
            <footer className="footer ">
    <div className="page-up">
      <a href="#" id="scrollToTopButton"><img src='/src/img/icons8-arrow-up-80.png'></img></a>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="footer__logo">
         <NavLink to={`/`}><img src="/src/img/logo 2.png"  /></NavLink>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="footer__nav">
            <ul>
              <li className="active"><NavLink to={`/`}>Homepage</NavLink></li>
              <li><NavLink to={`/categoryfilms`}>Categories</NavLink></li>
              <li><a href="./blog.html">Our Blog</a></li>
              <li><a href="#">Contacts</a></li>
            </ul>
          </div>
        </div>
       
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer