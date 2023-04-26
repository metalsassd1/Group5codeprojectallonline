import Modal from "react-bootstrap/Modal";
import logo from "./A.png";
import Button from "react-bootstrap/Button";
import logo1 from "./q.png";
import logo2 from "./s.png"
import Form from "react-bootstrap/Form";
import React, { useState, useEffect } from "react";
import swal from "sweetalert"



//////Suphapburut
function PLT() {

  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2000);
  }, []);
  const handleClose = () => setShow(false);
  const [checked, setChecked] = useState(false);

  const [showFirstModal, setShowFirstModal] = useState(true);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [showThirdModal, setShowThirdModal] = useState(false);

  
  const handleShowSecondModal = () => {
    setShowFirstModal(false);
    setShowSecondModal(true);
  };
  const handleShowThirdModal = () => {
    setShowSecondModal(false);
    setShowThirdModal(true);
  };
  const handleCloseThirdModal = () => {
    setShowThirdModal(false);
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


  
  const handleSubmit = event => {
    event.preventDefault();
    var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "id_card": id_card,
    "firstName": firstName,
    "lastName": lastName,
    "address": address,
    "number": number,
    "password": password
  });
  
  var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
  };
  
  fetch("http://localhost:3400/Payment", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result)
    if (result['Status'] === '200') {
      swal({
        icon: "success",
        text: "สมัครสมาชิกเรียบร้อย"
      }).then(() => {
       
      })
    }
   else {
    swal({
      html: <i>{result.Message}</i>,
      icon: 'error'
    })
  }  
  })
  .catch(error => console.log('error', error));
  }
  const [id_card, setId_Card] = useState('');
    const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');

 
 
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
                onClick={handleShowThirdModal}
                disabled={!checked}
              >
                ยอมรับ
              </Button>
              <Button variant="secondary" onClick={handleCloseSecondModal}>
                ปิด
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={showThirdModal} onHide={handleCloseThirdModal}>
            <Modal.Header>
              <Modal.Title></Modal.Title>
              <img src={logo2} alt="logo" width={460} height={150} />
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicid_card">
                  <Form.Label>เลขบัตรประชาชน</Form.Label>
                  <Form.Control
                   autoComplete="id_card"
                   name="id_card"
                   variant="outlined"
                   required
                   fullWidth
                   id="id_card"
                   label="ID Card"
                   onChange={(e) => setId_Card(e.target.value)}
                   autoFocus
                  />
                </Form.Group>
                <Form.Group controlId="formBasicfirstName">
                  <Form.Label>ชื่อ</Form.Label>
                  <Form.Control
                    autoComplete="FirstName"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="FirstName"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasiclastName">
                  <Form.Label>นามสกุล</Form.Label>
                  <Form.Control
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="LastName"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicaddress">
                  <Form.Label>ที่อยู่</Form.Label>
                  <Form.Control
                    variant="outlined"
                    required
                    fullWidth
                    id="address"
                    label="Address"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicNumber">
                  <Form.Label>เบอร์โทรศัพย์</Form.Label>
                  <Form.Control
                    autoComplete="number"
                    name="number"
                    variant="outlined"
                    required
                    fullWidth
                    id="number"
                    label="Number"
                    onChange={(e) => setNumber(e.target.value)}
                    autoFocus
                  />
                </Form.Group>
                <Form.Group controlId="formBasicpassword">
                  <Form.Label>รหัสผ่าน</Form.Label>
                  <Form.Control
                    variant="outlined"
                    required
                    fullWidth
                    type="password"
                    id="password"
                    label="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicReset">
                  <Form.Control input type="reset" />
                </Form.Group>
                <Modal.Footer>
            <Button  
            type="submit"
            fullWidth
            variant="success"
            onClick={handleCloseThirdModal}
           
          >
            ยืนยัน
          </Button>
              <Button variant="secondary" onClick={handleCloseThirdModal} > 
                ปิด
              </Button> </Modal.Footer>
                 </Form>
            </Modal.Body>
          </Modal>


         
        </>

      </>
    </div>
  );
}

export default PLT;