import React, { useEffect, useState } from "react";
import QRCode from "qrcode";

const PaymentQRCode = ({
  amount,
  accountNumber,
  content,
  ticketCode,
}: {
  amount: number;
  accountNumber: string;
  content: string;
  ticketCode: string;
}) => {
  const [qrCodeUrl, setQRCodeUrl] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("vietcombank");

  const paymentMethods = [
    { id: "vietcombank", name: "Vietcombank", bankCode: "VCB", merchantName: "Rạp chiếu phim Victory" },
    { id: "momo", name: "MoMo", bankCode: "MM", merchantName: "Rạp chiếu phim Victory" },
    { id: "zalopay", name: "ZaloPay", bankCode: "ZP", merchantName: "Rạp chiếu phim Victory" },
  ];

  const generateQRData = (method: string) => {
    const selectedMethod = paymentMethods.find((pm) => pm.id === method);
    if (!selectedMethod) return "";

    const data = [
      "000201", // Chuyển đến mã chuẩn QR
      "010211", // Mã loại QR
      `26${("00A00000072701230006970480015" + selectedMethod.bankCode + accountNumber).length}00A00000072701230006970480015${selectedMethod.bankCode}${accountNumber}`,
      "5204", // Loại thanh toán
      "5802VN", // Mã quốc gia
      `59${selectedMethod.merchantName.length}${selectedMethod.merchantName}`, // Tên thương nhân
      `54${amount.toString().length}${amount}`, // Số tiền
      `62${content.length}${content}`, // Nội dung thanh toán
      `63${ticketCode.length}${ticketCode}`, // Mã vé
    ].join("");

    const crc = calculateCRC16(data + "6304");
    return data + `6304${crc}`;
  };

  const calculateCRC16 = (data: string) => {
    let crc = 0xffff;
    for (let i = 0; i < data.length; i++) {
      crc ^= data.charCodeAt(i) << 8;
      for (let j = 0; j < 8; j++) {
        crc = crc & 0x8000 ? (crc << 1) ^ 0x1021 : crc << 1;
      }
    }
    return (crc & 0xffff).toString(16).toUpperCase().padStart(4, "0");
  };

  useEffect(() => {
    const qrData = generateQRData(paymentMethod);
    QRCode.toDataURL(qrData)
      .then((url) => setQRCodeUrl(url))
      .catch((err) => console.error(err));
  }, [paymentMethod, amount, accountNumber, ticketCode]);

  return (
    <div>
      <h3>Chọn phương thức thanh toán</h3>
      <select onChange={(e) => setPaymentMethod(e.target.value)} value={paymentMethod}>
        {paymentMethods.map((method) => (
          <option key={method.id} value={method.id}>
            {method.name}
          </option>
        ))}
      </select>
      <div>
        <h5>Quét mã QR để thanh toán</h5>
        {qrCodeUrl ? (
          <img src={qrCodeUrl} alt="QR Code" />
        ) : (
          <p>Đang tạo mã QR...</p>
        )}
        <p>Số tiền: {amount} VND</p>
        <p>Nội dung: {content}</p>
        <p>Mã vé: {ticketCode}</p>
        <p>Tên tài khoản: Rạp chiếu phim Victory</p>
        <p>Ngân hàng: {paymentMethods.find(pm => pm.id === paymentMethod)?.name}</p>
      </div>
    </div>
  );
};

export default PaymentQRCode;
