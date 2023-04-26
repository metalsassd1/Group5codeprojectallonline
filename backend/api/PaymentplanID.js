var express = require("express");
var cors = require("cors");
var app = express();

const mysql = require("mysql2/promise");

const connection = mysql.createConnection({
  host: "aws.connect.psdb.cloud",
  user: "b0prgt0mpcx8fo5u39nt",
  password: "pscale_pw_Q2msD9JaIasKwa0EYjA351nYI8YDjy9z3qDtGFpSLsE",
  database: "allonline_s",
  port: 3306,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/C_paymentPlans", async (req, res) => {
  const { amount, Paynum, term, amountperPayment, nextdueDate, PaymentMethod } = req.body;
  const paymentPlanId = Math.floor(Math.random() * 1000000);
  const status = "in progress";

  const conn = connection;
  try {
    const loanQuery =
      "INSERT INTO Loans (id, amount, term, paid_per_time, PaymentNum, paymentDue) VALUES (?, ?, ?, ?, ?, ?)";
    const loanParams = [paymentPlanId,amount, term, amountperPayment, Paynum, nextdueDate];
    const resultloan = (await conn).execute(loanQuery, loanParams);

    const paymentQuery = "INSERT INTO Payment (LoansID, paymentStatus, paymentMethod) VALUES (?, ?, ?)";
    const paymentParams = [paymentPlanId, status, PaymentMethod];
    const resultPay = (await conn).execute(paymentQuery, paymentParams);

    if (resultloan.affectedRows === 0 || resultPay.affectedRows === 0) {
      return res.status(404).json({ Status: "404", Message: "Error" });
    }
    res.status(200).json({ Status: "200", Message: "Success" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ Status: "500", Message: "Error" });
  }
});


app.listen(4000, () => console.log("Mock API server running on port 4000."));
