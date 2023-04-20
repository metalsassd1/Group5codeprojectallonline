import React, { useState, useEffect } from "react";
import PaymentPlanDetails from "./sup-compo/PaymentDetail";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Navbar from "../.././Metha/sup-compo/navbar/navbarMain";
import Navbar1 from "../.././Chachaphong/header/Search";
import Navbar2 from "../.././Chachaphong/footer/Footer";

function PaymentForm() {
  const [paymentAmount, setPaymentAmount] = useState(Number);
  const [paymentFrequency, setPaymentFrequency] = useState("monthly");
  const [paymentStatus, setPaymentStatus] = useState("pending");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleDateString()
  );
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    // Fetch product data from backend API using the product ID in the URL parameter
    fetch(`http://localhost:3400/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [id]);

  // Handle form submission
  function handleSubmit(event) {
    //API สร้างแผนการชำระ
    fetch("http://localhost:3400/paymentPlans", {
      method: "POST",
      body: JSON.stringify({
        amount: paymentAmount,
        frequency: paymentFrequency,
        productId: id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      //อัพเดตสถานะ
      .then((response) => response.json())
      .then((data) => {
        setPaymentStatus(data.status);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    //setปุ่ม ให้เปลี่ยนจาก ยืนยัน เป็น ดำเนินการต่อ
    setIsConfirmed(true);
    event.preventDefault();
  }

  return (
    <>
      <Navbar />
      <Navbar1 />
      <div className="container mt-4">
        <h1>Payment Plan #{id}</h1>
        <div className="card mt-4">
          <form>
            <div className="card-header">
              <h3>รายละเอียดการชำระ</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-sm-6">
                  <p>
                  <img src={product.image} alt="product image"/>
                  </p>
                  <p>
                    <strong>สินค้า: </strong> {product.name}
                  </p>
                  <p>
                    <strong>ราคา: </strong> {product.price} บาท
                  </p>
                  <p>
                    <strong>จำนวนเงิน:(test) </strong>{" "}
                    <input
                      type="number"
                      value={paymentAmount}
                      onChange={(event) =>
                        setPaymentAmount(event.target.value)
                      }
                    />
                  </p>
                  <p>
                    <strong>งวด: </strong>
                    <label>
                      <select
                        value={paymentFrequency}
                        onChange={(event) =>
                          setPaymentFrequency(event.target.value)
                        }
                      >
                        <option value="monthly">รายเดือน</option>
                        <option value="biweekly">สองสัปดาห์ 1 ครั้ง</option>
                        <option value="weekly">รายสัปดาห์</option>
                      </select>
                    </label>
                  </p>
                  <p>
                    <strong>วันดำเนินการ:</strong> {currentDate}
                  </p>
                </div>
                <div className="col-sm-6">
                  {paymentStatus === "pending" ? (
                    <p>กำลังดำเนินการชำระเงิน...</p>
                  ) : (
                    <PaymentPlanDetails
                      amount={paymentAmount}
                      frequency={paymentFrequency}
                      status={paymentStatus}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="card-footer">
              <Button
                variant="success"
                onClick={handleSubmit}
                disabled={isConfirmed && paymentStatus === "pendeing"}
              >
                {isConfirmed ? "ดำเนินการต่อ" : "ยืนยัน"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default PaymentForm;
