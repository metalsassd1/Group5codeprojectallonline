import React, { useState, useEffect } from "react";
import Payment from "./sup-compo/payment";
import Notification from "./sup-compo/notification";

function PendingPaymentsPage() {
  const [payments, setPayments] = useState([]);

  // ดึงข้อมูลหมายเลขการสั่งซื้อจากdatabase (ยังไม่ได้เทส)
  useEffect(() => {
    fetch("http://localhost:3002/user!/products/15") //test api
      .then((response) => response.json())
      .then((data) => setPayments(data));
  }, []);

  // ปุ่มชำระ
  function handlePaymentClick(paymentId) {
    // ส่งสถานะการชำระไป database (ยังไม่ได้เทส)
    fetch(`/api/payments/${paymentId}/pay`,
      { method: "POST" })
      .then((response) => response.json())
      .then((data) => {
        // อัพเดตสถานะการชำระ
        const updatedPayments = payments.map((payment) =>
          payment.id === paymentId ? { ...payment, status: data.status } : payment
        );
        setPayments(updatedPayments);

        // แจ้งเตือน (ยังไม่ได้เทส)
        Notification.show(`Payment ${paymentId} has been processed`);
      });
  }


  //ยังไม่ได้เทส
  return (
    <div>
      <h1>Pending Payments</h1>
      <ul>
        {payments.map((payment) => (
          <li key={payment.id}>
            <Payment payment={payment} onPaymentClick={handlePaymentClick} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PendingPaymentsPage;
