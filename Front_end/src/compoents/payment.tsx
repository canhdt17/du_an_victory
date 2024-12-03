import { useEffect, useState } from "react";
import constants from "../utils/constants";
import { IOrderInfoStorage } from "./interface/orderMovie";
import "./payment.css";
import BankQRCode from "./bankQRCode";
import qrCode from '../assets/qrCode.png'

const Payment = () => {
  const [paymentInfomation, setPaymentInfomation] =
    useState<IOrderInfoStorage | null>(null);
  useEffect(() => {
    const infomationLocalStorage = localStorage.getItem(constants.orderInfoKey);
    if (infomationLocalStorage) {
      const infomationData = JSON.parse(infomationLocalStorage);
      setPaymentInfomation(infomationData);
    } else {
      setPaymentInfomation(null);
    }
  }, []);
  return (
    <div className="payment-container flex gap-10 px-28 py-10">
      <div className="infomation flex-1">
        <div className="movie-info bg-[#1A1D23] p-8 mb-10 rounded-3xl">
          <div className="title text-3xl font-bold mb-10">Thông tin phim</div>
          <div className="movie-name mb-10">
            <label>Phim</label>
            <div className="value">
              {paymentInfomation?.movieDetail?.name_movie}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 mb-10">
            <div className="movie-time">
              <label>Ngày giờ chiếu</label>
              <div className="value">
                {paymentInfomation?.movieDetail?.show}
              </div>
            </div>
            <div className="movie-seat">
              <label>Ghế</label>
              <div className="value">
                {paymentInfomation?.selectedSeats
                  ?.map((e) => e.seatInfo?.seatNumber)
                  .join(", ")}
              </div>
            </div>
            <div className="movie-type">
              <label>Định dạng</label>
              <div className="value">
                {paymentInfomation?.movieDetail?.name_type}
              </div>
            </div>
            <div className="movie-room">
              <label>Phòng chiếu</label>
              <div className="value">{paymentInfomation?.selectedRoom?.id}</div>
            </div>
          </div>
        </div>
        <div className="payment-info bg-[#1A1D23] p-8 rounded-3xl">
          <div className="title text-3xl font-bold mb-10">
            Thông tin thanh toán
          </div>
          <div className="payment-detail border rounded-2xl">
            <div className="header grid  border-b">
              <div className="category p-3">Danh mục</div>
              <div className="quantity p-3">Số lượng</div>
              <div className="total-price p-3">Tổng tiền</div>
            </div>
            <div className="body grid">
              <div className="category p-3">
                Ghế (
                {paymentInfomation?.selectedSeats
                  ?.map((e) => e.seatInfo?.seatNumber)
                  .join(", ")}
                )
              </div>
              <div className="quantity p-3">
                {paymentInfomation?.selectedSeats?.length || 0}
              </div>
              <div className="total-price p-3">
                {paymentInfomation?.totalPrice}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="payment-method w-[300px] flex-shrink-0 bg-[#1A1D23] p-8 rounded-3xl">
        {/* <BankQRCode /> */}
        <h5 className="mb-6">Quét QR để chuyển khoản</h5>
        <img src={qrCode} alt='qrCode'/>
      </div>
    </div>
  );
};

export default Payment;