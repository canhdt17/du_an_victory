import React, { useEffect, useState } from "react";
import { IInvoice } from "../interface/invoice";
import PaymentQRCode from "./bankQRCode";

const InvoiceList = () => {
    const [invoices, setInvoices] = useState<IInvoice[]>([]); // Áp dụng kiểu IInvoice
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedInvoice, setSelectedInvoice] = useState<IInvoice | null>(null);

    // Hàm fetch dữ liệu từ API
    const fetchInvoices = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/invoices");
            if (!response.ok) throw new Error("Lỗi khi tải hóa đơn");
            const data = await response.json();

            // Map dữ liệu API sang interface (chuyển `time_date` thành kiểu `Date`)
            const mappedData: IInvoice[] = data.map((invoice: any) => ({
                ...invoice,
                time_date: new Date(invoice.time_date), // Chuyển đổi string -> Date
            }));
            setInvoices(mappedData);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchInvoices();
    }, []);

    if (loading) return <p>Đang tải danh sách hóa đơn...</p>;
    if (error) return <p>Lỗi: {error}</p>;

    return (
        <div>
            <h3>Danh sách hóa đơn</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Ngày giờ</th>
                        <th>Tổng tiền</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {invoices.map((invoice) => (
                        <tr key={invoice.id}>
                            <td>{invoice.id}</td>
                            <td>{invoice.time_date.toLocaleDateString("vi-VN")} {invoice.time_date.toLocaleTimeString("vi-VN")}</td>
                            <td>{invoice.total_price} VND</td>
                            <td>
                                <button onClick={() => setSelectedInvoice(invoice)}>
                                    Thanh toán
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedInvoice && (
                <div>
                    <h3>Thanh toán hóa đơn #{selectedInvoice.id}</h3>
                    <PaymentQRCode
                        amount={parseFloat(selectedInvoice.total_price)} // Chuyển sang kiểu số nếu cần
                        accountNumber="290088888888" // Ví dụ: tài khoản ngân hàng cố định
                        content={`Hoa don ${selectedInvoice.id}`} ticketCode={""} />
                </div>
            )}
        </div>
    );
};

export default InvoiceList;
