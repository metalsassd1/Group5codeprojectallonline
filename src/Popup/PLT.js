import Modal from "react-bootstrap/Modal";
import logo from "./A.png";
import Button from "react-bootstrap/Button";
import logo1 from "./q.png";
import Form from "react-bootstrap/Form";
import React, { useState, useEffect, useRef } from "react";


//////Suphapburut
function PLT() {
    const handlelogin = () => {
        window.location.href='/loginplt';
      };
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2000);
  }, []);
  const handleClose = () => setShow(false);
  const [checked, setChecked] = useState(false);

  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  };

  const [showFirstModal, setShowFirstModal] = useState(true);
  const [showSecondModal, setShowSecondModal] = useState(false);

  const handleShowSecondModal = () => {
    setShowFirstModal(false);
    setShowSecondModal(true);
  };

  const handleCloseSecondModal = () => {
    setShowSecondModal(false);
  };
  const handleCheck = (event) => {
    setChecked(event.target.checked);
  };

  const handleAccept = () => {
    handleCloseSecondModal();
    console.log("Accepted!");
  };

 
 
  return (
    <div>
      <>
        <Modal       
          show={showFirstModal}
          onHide={() => setShowFirstModal(false)}
          className="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton></Modal.Header>

          <Modal.Body>
            <img
              src={logo}
              alt="Logo"
              style={{ width: "100%", height: "0%", objectFit: "contain" }}
            />
          </Modal.Body>
          <Modal.Footer className="modal-content">
            <Button variant="primary" onClick={handleShowSecondModal}>
              สมัครเลย
            </Button>
          </Modal.Footer>
        </Modal>
        <>
          <Modal show={showSecondModal} onHide={handleCloseSecondModal}>
            <Modal.Header>
              <img src={logo1} alt="logo" width={450} height={100} />
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                1.ผู้สมัครสมาชิกต้องใส่ข้อมูลที่เป็นจริงทุกประการ
                เพื่อประโยชน์ของท่าน
              </p>
              <p>
                2.ผู้สมัครสมาชิกต้องยอมรับเงื่อนไขและข้อตกลงในการบริการของเว็บไซต์
              </p>
              <p>
                3.ผู้สมัครสมาชิกต้องปฏิบัติตามกฎระเบียนและข้อตกลงของเว็บไซต์อย่างเคร่งครัด
                ในกรณีที่ท่านละเมิดกฎทางเว็บไซต์จะยกเลิกการเป็นสมาชิก
              </p>
              <p>
                4.ข้อมูลของท่านจะถูกเก็บเป็นความลับ
                โดยทางเว็บไซต์จะไม่เปิดเผยข้อมูลของสมาชิกเพื่อประโยชน์ด้านอื่นๆ
              </p>
              <p>
                5.เพื่อความเป็นส่วนตัวและปลอดภัยของข้อมูล
                ผู้สมัครจะต้องเก็บรักษาข้อมูลไว้เป็นความรับ
                เพื่อป้องกันไม่ให้ผู้เกี่ยวข้อง
                มากระทำการใดๆอื่นที่อาจก่อให้เกิดความเสียหาย
              </p>
              <p>6.การผ่อนจ่ายสามารถผ่อนได้เฉพาะสินค้าที่ร่วมรายการเท่านั้น </p>
              <p>7.ผู้สมัครสมาชิกต้องมีอายุ 20 ปีบริบูรณ์ </p>
              <p>8.ผู้สมัครสมาชิกต้องเป็นสมาชิกALL ONLINE </p>
              <Form.Check
                type="checkbox"
                label="ยอมรับเงื่อนไขการเป็นสมาชิก"
                checked={checked}
                onChange={handleCheck}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="success"
                onClick={handlelogin}
                disabled={!checked}
              >
                ยอมรับ
              </Button>
              <Button variant="secondary" onClick={handlelogin}>
                ปิด
              </Button>
            </Modal.Footer>
          </Modal>
         
        </>

      </>
    </div>
  );
}

export default PLT;