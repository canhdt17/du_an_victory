import React from 'react'
import Header from './header'
import Banner from './banner'
// import Product from './product'
import Footer from './footer'

type Props = {
    children: React.ReactNode
}

const HomePage = ({children}: Props) => {
  return (
    <div>
        <div>
            <Header></Header>
            <div className="maintain">
                {/* <Banner></Banner> */}
                <div className="main-area">
                    {children}
                </div>
            </div>
            <Footer></Footer>
        <div className="search-model">
            <div className="h-100 d-flex align-items-center justify-content-center">
                <div className="search-close-switch"><i className="icon_close" /></div>
                    <form className="search-model-form">
                        <input type="text" id="search-input" placeholder="Search here....." />
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage