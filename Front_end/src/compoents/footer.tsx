import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div>
          <footer className="footer">
    <div className="page-up">
      <a href="#" id="scrollToTopButton"><img src='/src/img/icons8-arrow-up-80.png'></img></a>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="footer__logo">
            <a href="./index.html"><img src="/src/img/logo.png"  /></a>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="footer__nav">
            <ul>
              <li className="active"><a href="./index.html">Homepage</a></li>
              <li><a href="./categories.html">Categories</a></li>
              <li><a href="./blog.html">Our Blog</a></li>
              <li><a href="#">Contacts</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3">
          <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright © All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
        </div>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer