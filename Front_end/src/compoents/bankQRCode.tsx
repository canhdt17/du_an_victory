import React, { useEffect, useState } from "react";
// import QRCode from "react-qr-code";
import QRCode from "qrcode";

const BankQRCode = () => {

    const [qrCodeUrl, setQRCodeUrl] = useState("");

  // Thông tin tài khoản ngân hàng
  const bankCode = "MB"; // Mã ngân hàng
  const accountNumber = "290088888888"; // Số tài khoản
  const amount = 100000; // Số tiền (đơn vị: VND)
  const content = "Thanh toan hoa don"; // Nội dung chuyển khoản
  const merchantName = "Vuong Hong Thach"; // Nội dung chuyển khoản


  // Hàm tính CRC (dành cho chuẩn EMVCo)
  const calculateCRC16 = (data) => {
    let crc = 0xFFFF;

    for (let i = 0; i < data.length; i++) {
      crc ^= data.charCodeAt(i) << 8;

      for (let j = 0; j < 8; j++) {
        if (crc & 0x8000) {
          crc = (crc << 1) ^ 0x1021;
        } else {
          crc<<= 1;
        }
      }
    }

    return (crc & 0xFFFF).toString(16).toUpperCase().padStart(4, "0");
  };

  // Tạo dữ liệu QR code theo chuẩn VietQR
  const generateVietQRData = () => {
    const data = [
      "000201", // Header
      "010211", // Phiên bản
      `26${("00A00000072701230006970480015" + bankCode + accountNumber).length}00A00000072701230006970480015${bankCode}${accountNumber}`, // Merchant Info
      "5204", // Loại giao dịch
      "5802VN", // Quốc gia
      `59${merchantName.length}${merchantName}`, // Tên người nhận
    //   `60${city.length}${city}`, // Thành phố
    //   `62${content.length}${content}`, // Nội dung giao dịch
      `54${amount.toString().length}${amount}`, // Số tiền
    ].join("");

    // Tính CRC
    const crc = calculateCRC16(data + "6304");
    return data + `6304${crc}`;
  };

  useEffect(() => {
    const qrData = generateVietQRData();
    // Tạo mã QR với thư viện qrcode
    QRCode.toDataURL(qrData)
      .then((url) => {
        setQRCodeUrl(url);
      })
      .catch((err) => console.error(err));
  }, []);
x
  return (
    <div className="mt-4">
      <h5 className="mb-6">Quét QR để chuyển khoản</h5>
      {qrCodeUrl ? <img src={qrCodeUrl} alt="QR Code" /> : "Đang tạo mã QR..."}
      {/* <QRCode className="w-full" value={qrImageUrl} size={200} /> Hiển thị QR code */}
      {/* <img src={qrImageUrl} alt="VietQR Code" style={{ width: "300px" }} /> */}
      <img src={qrCode} alt='qrCode'/>
      <p className="mt-6">Ngân hàng: <span className="font-bold">Vietcombank</span></p>
      <p>Số tài khoản: <span className="font-bold">{accountNumber}</span></p>
      <p>Số tiền: <span className="font-bold">{amount} VND</span></p>
      <p>Nội dung: <span className="font-bold">{content}</span></p>
    </div>
  );
};

export default BankQRCode;
