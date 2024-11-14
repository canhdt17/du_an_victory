import React from 'react'

type Props = {}

const Button = (props: Props) => {
  return (
    <div>
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
  )
}

export default Button