import { useEffect, useState } from "react";
import constants from "../utils/constants";
import { IOrderInfoStorage, ISeat, ISeatType } from "./interface/orderMovie";
import "./payment.css";
import qrCode from '../assets/qrCode.png';
import api from "../axios/config";

const Payment = () => {
  const [paymentInfomation, setPaymentInfomation] = useState<IOrderInfoStorage | null>(null);
  const [seatTypes, setSeatTypes] = useState<ISeatType[]>([]);
  const [comboFoods, setComboFoods] = useState<any[]>([]); // Store combo foods
  const [selectedCombos, setSelectedCombos] = useState<any[]>([]); // Track selected combos
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null); 
  const [step, setStep] = useState<number>(1); 

  // Fetch dữ liệu từ API và localStorage
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch seat types
        const responseSeatTypes = await api.get('/seatTypes');
        const formattedSeatTypes = responseSeatTypes.data.map((seat: any) => ({
          ...seat,
          seat_price: parseFloat(seat.seat_price),
        }));
        setSeatTypes(formattedSeatTypes);

        // Fetch combo food data
        const responseComboFoods = await api.get('/combofoods');
        setComboFoods(responseComboFoods.data);

        // Fetch order info from localStorage
        const infomationLocalStorage = localStorage.getItem(constants.orderInfoKey);
        if (infomationLocalStorage) {
          const infomationData = JSON.parse(infomationLocalStorage);
          if (infomationData && infomationData.base && infomationData.date && infomationData.time && infomationData.seats.length > 0) {
            setPaymentInfomation(infomationData);
            calculateTotalPrice(infomationData.seats, formattedSeatTypes, []);
          } else {
            console.error("Thông tin thanh toán không đầy đủ.");
            setPaymentInfomation(null);
          }
        } else {
          setPaymentInfomation(null);
        }
      } catch (error) {
        console.error("Lỗi khi gọi API hoặc xử lý dữ liệu:", error);
      }
    };

    fetchData();
  }, []);

  // Tính tổng tiền
  const calculateTotalPrice = (seats: ISeat[], seatTypeList: ISeatType[], combos: any[]) => {
    if (!seats || !seatTypeList) return;
    let total = 0;

    // Calculate seat prices
    seats.forEach((seat) => {
      const seatType = seatTypeList.find((type) => type.id === seat.seat_type_id);
      if (seatType) {
        total += seatType.seat_price;
      }
    });

    // Add combo prices
    combos.forEach((combo) => {
      total += parseFloat(combo.combofood_price);
    });

    setTotalPrice(total);
  };

  // Handle combo selection
  const handleComboSelect = (combo: any) => {
    const isSelected = selectedCombos.find((selected) => selected.combofood_id === combo.combofood_id);

    if (isSelected) {
      // Remove from selected combos
      const updatedCombos = selectedCombos.filter((selected) => selected.combofood_id !== combo.combofood_id);
      setSelectedCombos(updatedCombos);
      calculateTotalPrice(paymentInfomation?.seats || [], seatTypes, updatedCombos);
    } else {
      // Add to selected combos
      const updatedCombos = [...selectedCombos, combo];
      setSelectedCombos(updatedCombos);
      calculateTotalPrice(paymentInfomation?.seats || [], seatTypes, updatedCombos);
    }
  };

  // Danh sách phương thức thanh toán
  const paymentMethods = [
    { id: "vietcombank", name: "Vietcombank" },
    { id: "momo", name: "MoMo" },
    { id: "zalopay", name: "ZaloPay" },
  ];

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
                {paymentInfomation?.movie?.type?.name_type || "Không có thông tin định dạng"}
              </div>
            </div>

            <div className="movie-room">
              <label>Phòng chiếu</label>
              <div className="value">
                {paymentInfomation?.base?.base_name || "Không có thông tin phòng chiếu"}
              </div>
            </div>
          </div>
        </div>

        {/* Combo Section */}
        <div className="combo-info bg-[#1A1D23] p-8 mb-10 rounded-3xl">
          <div className="title text-3xl font-bold mb-10">Combo Bỏng Nước</div>
          <div className="combo-options">
            {comboFoods.map((combo) => (
              <label key={combo.combofood_id} className="block mb-3">
                <input
                  type="checkbox"
                  value={combo.combofood_id}
                  onChange={() => handleComboSelect(combo)}
                  className="mr-2"
                />
                {combo.combofood_name} - {parseFloat(combo.combofood_price).toLocaleString()} VND
              </label>
            ))}
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
                {totalPrice || "Chưa có giá"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Section */}
      <div className="payment-method w-[300px] flex-shrink-0 bg-[#1A1D23] p-8 rounded-3xl">
        <h5 className="text-xl mb-6">Chọn phương thức thanh toán</h5>
        {step === 1 && (
          <>
            <div className="payment-methods mb-6">
              {paymentMethods.map((method) => (
                <label key={method.id} className="block mb-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method.id}
                    onChange={() => setSelectedMethod(method.id)}
                    className="mr-2"
                  />
                  {method.name}
                </label>
              ))}
            </div>
            <div className="cost-info bg-[#1A1D23] p-8 mt-6 rounded-3xl">
              <div className="title text-2xl font-bold mb-6">Chi phí</div>
              <div className="cost-detail grid grid-cols-2 mb-4">
                <div className="cost-category p-3">Thanh toán</div>
                <div className="cost-value p-3">{totalPrice} VND</div>
              </div>
              <div className="cost-detail grid grid-cols-2 mb-4">
                <div className="cost-category p-3">Phí xử lý</div>
                <div className="cost-value p-3">0 VND</div>
              </div>
              <div className="cost-detail grid grid-cols-2 font-bold">
                <div className="cost-category p-3">Tổng cộng</div>
                <div className="cost-value p-3">{totalPrice} VND</div>
              </div>
            </div>
            <button
              className="btn-primary w-full"
              onClick={() => {
                if (selectedMethod) {
                  setStep(2);
                } else {
                  alert("Vui lòng chọn phương thức thanh toán.");
                }
              }}
            >
              Thanh toán
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <div className="qrcode text-center mb-6">
              <img src={qrCode} alt="QR Code" className="mx-auto" />
            </div>
            <button className="btn-secondary w-full" onClick={() => setStep(1)}>
              Quay lại
            </button>
          </>
        )}
        <div className="text-sm text-center mx-auto mt-4 text-orange-500">
          <b>Lưu ý:</b> "Không mua vé cho trẻ em dưới 13 tuổi đối với các suất chiếu phim kết thúc sau 22h00 và không mua vé cho trẻ em dưới 16 tuổi đối với các suất chiếu phim kết thúc sau 23h00."
        </div>
      </div>
    </div>
  );
};

export default Payment;
