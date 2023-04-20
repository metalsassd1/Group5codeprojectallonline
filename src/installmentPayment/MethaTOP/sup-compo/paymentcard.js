import React from "react";

function PaymentCard({ amount, date, isOverdue, onPay }) {
  const formattedDate = new Intl.DateTimeFormat("en-US").format(date);
  const statusClassName = isOverdue ? "overdue" : "upcoming";
  const statusText = isOverdue ? "Overdue" : "Due";

  return (
    <div className="payment-card">
      <div className="payment-card__status">
        <span className={`payment-card__status-text ${statusClassName}`}>{statusText}</span>
        {isOverdue && <span className="payment-card__status-icon">⚠️</span>}
      </div>
      <div className="payment-card__amount">{amount} THB</div>
      <div className="payment-card__date">{formattedDate}</div>
      <button className="payment-card__pay-button" onClick={onPay}>Pay Now</button>
    </div>
  );
}

export default PaymentCard;
