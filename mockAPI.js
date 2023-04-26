const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
    optionSuccessStatus: 200,
  };
  app.use(cors(corsOptions));
app.use(bodyParser.json());

let paymentPlans = [];

//สร้างแผนการชำระใหม่
app.post('/paymentPlans', (req, res) => {
  const { amount, numPayments } = req.body;

  //สุ่มเลข
  const paymentPlanId = Math.floor(Math.random() * 1000000);

  // mock opject
  const newPaymentPlan = {
    id: paymentPlanId,
    amount: amount,
    numPayments: numPayments,
    paymentsMade: 0,
    status: 'pending'
  };
  paymentPlans.push(newPaymentPlan);

  // ข้อมูลส่งออก
  res.json({ id: paymentPlanId });
  // localStorage.setItem(newPaymentPlan)
});



// // Mock API for retrieving and sending pending payments
// const API_URL = "https://jsonplaceholder.typicode.com";

// // Retrieve pending payments from backend API
// export const getPendingPayments = async () => {
//   const response = await fetch(`${API_URL}/pending-payments`);
//   if (!response.ok) {
//     throw new Error("Failed to retrieve pending payments");
//   }
//   const data = await response.json();
//   return data;
// };

// // Send payment to backend API
// export const sendPayment = async (payment) => {
//   const response = await fetch(`${API_URL}/payments`, {
//     method: "POST",
//     body: JSON.stringify(payment),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   if (!response.ok) {
//     throw new Error("Failed to send payment");
//   }
//   const data = await response.json();
//   return data;
// };

app.listen(3400, () => console.log('Mock API server running on port 3400.'));
