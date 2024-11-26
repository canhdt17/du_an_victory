import React from "react";

type Props = {};

const Seat = (props: Props) => {
  return (
    <div>
      <div className="bodyy" id="modal-container">
        <div className="seatt-container " id="modal">
          <div className="modal-header ">
            <h3 className="text-white">Vui lòng chọn ghế !</h3>
            <button  id="btn-close"><i className="fa-solid fa-xmark"></i></button>
          </div>
          <div className="roww modal-body">
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
          <button className="bg-yellow-500 text-gray-900 px-4 py-2 rounded hover:bg-yellow-600 transition duration-200">
            Đặt Vé
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Seat;
