import React from "react";


//ข้อมูลถูกส่งมาแน่ถ้ามี(เทสแล้ว)
function Payment({ payment, onPaymentClick }) {
  return (
    <div>
      <span>{payment.description} aaa</span>
      <span>{payment.amount} bbb</span>
      <span>{payment.dueDate} ccc</span>
      {payment.status === "pending" && (
        <button onClick={() => onPaymentClick(payment.id)}>Pay</button>
      )}
    </div>
  );
}

export default Payment;
