import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function PaymentsPage() {
  const history = useHistory();
  const [payments, setPayments] = useState([]);

  // Here, you can fetch the payments data from your API or database and store it in the `payments` state.

  function handlePayment(payment) {
    // Here, you can implement your payment logic.
    // For example, you can use a payment gateway API like Stripe to process the payment.
    // Once the payment is processed, you can update the payment status in your API or database and redirect the user to a success page.
    history.push("/payment/success");
  }

  function isPaymentDue(payment) {
    const currentDate = new Date();
    const nextDueDate = new Date(payment.nextDueDate);
    return currentDate >= nextDueDate;
  }

  return (
    <div>
      <h1>Payments</h1>
      {payments.map((payment) => (
        <div key={payment.id}>
          <div>{payment.description}</div>
          <div>{payment.amount}</div>
          {isPaymentDue(payment) && (
            <div>
              <span role="img" aria-label="warning">
                ⚠️
              </span>
              Payment is due!
              <button onClick={() => handlePayment(payment)}>Pay now</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default PaymentsPage;
