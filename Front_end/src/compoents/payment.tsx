import { useEffect, useState } from "react";
import constants from "../utils/constants";
import { IOrderInfoStorage } from "./interface/orderMovie";
import "./payment.css";
import qrCode from '../assets/qrCode.png'

const Payment = () => {
  const [paymentInfomation, setPaymentInfomation] =
    useState<IOrderInfoStorage | null>(null);

  // Lấy thông tin thanh toán từ localStorage
  useEffect(() => {
    const infomationLocalStorage = localStorage.getItem(constants.orderInfoKey);
    if (infomationLocalStorage) {
      const infomationData = JSON.parse(infomationLocalStorage);

      // Kiểm tra nếu dữ liệu hợp lệ trước khi cập nhật state
      if (infomationData && infomationData.base && infomationData.date && infomationData.time && infomationData.seats.length > 0) {
        setPaymentInfomation(infomationData);
      } else {
        console.error("Thông tin thanh toán không đầy đủ.");
        setPaymentInfomation(null);
      }
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
              {paymentInfomation?.movie?.name_movie || "Không có thông tin phim"}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 mb-10">
            <div className="movie-time">
              <label>Ngày giờ chiếu</label>
              <div className="value">
                {paymentInfomation?.date || "Không có thông tin ngày giờ"}
              </div>
            </div>
            <div className="movie-seat">
              <label>Ghế</label>
              <div className="value">
                {paymentInfomation?.seats
                  ?.map((seat) => seat.seat_number)
                  .join(", ") || "Không có thông tin ghế"}
              </div>
            </div>
            <div className="movie-type">
              <label>Định dạng</label>
              <div className="value">
                {paymentInfomation?.movie?.name_type || "Không có thông tin định dạng"}
              </div>
            </div>
            <div className="movie-room">
              <label>Phòng chiếu</label>
              <div className="value">
                {paymentInfomation?.room?.room_name || "Không có thông tin phòng chiếu"}
              </div>
            </div>
          </div>
        </div>
        <div className="payment-info bg-[#1A1D23] p-8 rounded-3xl">
          <div className="title text-3xl font-bold mb-10">
            Thông tin thanh toán
          </div>
          <div className="payment-detail border rounded-2xl">
            <div className="header grid border-b">
              <div className="category p-3">Danh mục</div>
              <div className="quantity p-3">Số lượng</div>
              <div className="total-price p-3">Tổng tiền</div>
            </div>
            <div className="body grid">
              <div className="category p-3">
                Ghế (
                {paymentInfomation?.seats
                  ?.map((e) => e.seat_number)
                  .join(", ")}
                )
              </div>
              <div className="quantity p-3">
                {paymentInfomation?.seats?.length || 0}
              </div>
              <div className="total-price p-3">
                {paymentInfomation?.totalPrice || "Chưa có giá"}
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
