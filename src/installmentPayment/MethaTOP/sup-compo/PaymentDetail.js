import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./payments.css";
import e from "cors";

function PaymentPlanDetails({ amount, frequency, status }) {
  const [nextDueDates, setNextDueDates] = useState([]);
  const [amountPerPayment, setAmountPerPayment] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const amountNum = parseFloat(amount);
  const [payNum, setPaynum] = useState([]);
  const [paymentProgress, setPaymentProgress] = useState(0);
  const [Frequency, setFrequency] = useState([]);

  useEffect(() => {
    // คำนวนจำนวนวันที่ต้องชำระ
    const currentDate = new Date();
    let nextDate = new Date(currentDate);

    let interestRate = 0; //ดอกเบี้ย
    let numPayments = 0; //จำนวนครั้งที่ต้องจ่าย
    let nextDueDates = []; //จ่ายครั้งถัดไป
    const nextDueDate = new Date(nextDate); //ตัวแปรเก็บวัน
    switch (frequency) {
      case "weekly":
        interestRate = 0.01 / 13; // 1% ต่อเดือน / 4 สัปดาห์ต่อเดือน 3 เดือน หรือประมาณ 12 สัปดาห์
        numPayments = 13;
        nextDueDate.setDate(nextDueDate.getDate() + 7); //คำนวนวันชำระครั้งถัดไป
        nextDueDates.push(nextDueDate);

        setPaynum(numPayments); //set จำนวนครั้งที่จ่าย
        setFrequency("รายสัปดาห์"); //set output frequency ภาษาไทย
        break;
      case "biweekly":
        interestRate = 0.01 / 6;
        numPayments = 6;
        nextDueDate.setDate(nextDueDate.getDate() + 14);
        nextDueDates.push(nextDueDate);
        setPaynum(numPayments);
        setFrequency("สองสัปดาห์ 1 ครั้ง");
        break;
      case "monthly":
        interestRate = 0.01;
        numPayments = 3;
        nextDueDate.setMonth(nextDueDate.getMonth() + 1);
        nextDueDates.push(nextDueDate);
        setPaynum(numPayments);
        setFrequency("รายเดือน");
        break;
      default:
        nextDueDates = [];
    }
    setInterestRate(interestRate);
    // setNextDueDates(nextDueDates);
    // console.log(nextDueDates);

    // คำนวนเงินราย งวด
    const daysInMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();
    const daysUntilDue = Math.ceil(
      (nextDueDates[0].getTime() - Date.now()) / (1000 * 60 * 60 * 24) //เช็คเวลาตลอด 24 ชั่วโมง
    );
    let contractualInterest = 0;
    //ต่ำกว่า 1 เดือน
    if (daysUntilDue < daysInMonth) {
      contractualInterest = (amountNum * daysUntilDue) / daysInMonth;
    } else {
      //มากกว่า 1 เดือน + ดอกเบี้ย
      contractualInterest =
        (amountNum * interestRate * daysUntilDue) / daysInMonth;
    }
    const totalAmount = amountNum + contractualInterest;
    setAmountPerPayment(totalAmount / numPayments);

    //progess bar
    const progress = ((payNum - nextDueDates.length) / payNum) * 100;
    setPaymentProgress(progress);

    //log data
    // console.log(payNum);
    // console.log(daysInMonth)
    // console.log(contractualInterest);
    console.log(nextDueDates.length);
  }, [amount, frequency, nextDueDates]);

  // console.log(amountPerPayment);

  return (
    <div className="col-sm-6">
      <h2 className="payment-plan-heading">รายละเอียดแผนการชำระ</h2>
      <p className="payment-plan-info-amonut">
        <strong>จำนวนเงินต้น:</strong> ฿{amount}
      </p>
      <p className="payment-plan-info-freqen">
        <strong>งวด:</strong> {Frequency}
      </p>
      <p className="payment-plan-info-freqen">
        <strong>จำนวนครั้งที่ต้องชำระ:</strong> {payNum} งวด
      </p>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${paymentProgress}%` }}
          aria-valuenow={paymentProgress}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      {nextDueDates.length > 0 && (
        <div>
          <p className="payment-plan-info">
            <strong>วันที่ชำระงวดแรก:</strong>{" "}
            {nextDueDates.map((date, index) => (
              <span key={index}>{date.toLocaleDateString()}</span>
            ))}
          </p>
        </div>
      )}
      <p className="payment-plan-info-interestRate">
        <strong>อัตราดอกเบี้ย:</strong> {(interestRate * 100).toFixed(2)}%
      </p>
      <p className="payment-plan-info-latePay">
        <strong>อัตราดอกเบี้ยชำระล่าช้า:</strong> {(amount / 15).toFixed(2)}{" "}
        <strong> : 15% ของเงินต้นคงเหลือ</strong>
      </p>
      <p className="payment-plan-info-amountPay">
        <strong>จำนวนเงินต่องวด:</strong> ฿{amountPerPayment?.toFixed(2)}{" "}
        (รวมดอกเบี้ย {Math.round(interestRate * 100).toFixed(2)}% ต่อเดือน)
      </p>
      <p className="payment-plan-info-status">
        <strong>สถานะการชำระ:</strong> {status}
      </p>
    </div>
  );
}

export default PaymentPlanDetails;
