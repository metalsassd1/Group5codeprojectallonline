import React, { useState } from 'react';
import './ph.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../../Chachaphong/header/Search"
import Navnar1 from "../../Metha/sup-compo/navbar/navbarMain"



function ButtonPage() {
  const [product,setproduct] = useState({})
  return (
    <div>
      <Navbar/>
      <Navnar1/>
    
    <div className="button-page">
      <h2 className='fff'>สรุปรายการสินค้า</h2>
      <h1 className='ff' >ผ่อนชำระผ่าน</h1>
       <div className='hhh'>
      <p> 
        <img src={product.image} alt="product image"/> 
      </p> 
        <p>
           <strong>สินค้า: </strong> {product.name} 
        </p> 
        <p> 
          <strong>ราคา: </strong> {product.price} บาท 
        </p>
       </div>
      <ul>
        <li>
        <button
  className="btn1"
  style={{
    backgroundImage: `url(${product.image})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100px', // adjust the height to your liking
    width: '50%', // set the width to 100% to fill the button
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px'
  }}
>
  <img
    src="/images/phhhh/visa.jpg"
    alt="Visa logo"
    style={{
      height: '50px', // set the height of the image
      marginRight: '10px' // add some space between the image and text
    }}
  />
  ชำระเงินด้วยบัตรเครดิต หรือ บัตรเดบิต
</button>
        </li>
        <li>
        <button
  className="btn2"
  style={{
    backgroundImage: `url(${product.image})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100px', // adjust the height to your liking
    width: '50%', // set the width to 100% to fill the button
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px'
  }}
>
  <img
    src="/images/phhhh/hee.png"
    alt="Visa logo"
    style={{
      height: '50px', // set the height of the image
      marginRight: '10px' // add some space between the image and text
    }}
  />
  ชำระเงินด้วยทรูมันนี่ วอลเล็ท
</button>

        </li>
        <li>
        <button
  className="btn3"
  style={{
    backgroundImage: `url(${product.image})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100px', // adjust the height to your liking
    width: '50%', // set the width to 100% to fill the button
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px'
  }}
>
  <img
    src="/images/phhhh/eeeeeaa.jpg"
    alt="Visa logo"
    style={{
      height: '50px', // set the height of the image
      marginRight: '10px' // add some space between the image and text
    }}
  />
  ชำระเงินสด ที่ร้านเซเว่นอีเลฟเว่น 7-11
</button>

        </li>
      </ul>
      <button className='btn4'>สั่งซื้อ</button>

    </div>
  </div>
  );
}

export default ButtonPage;

  

