import React from 'react';
import { useNavigate } from 'react-router-dom'
import Header from '../dat/Header';
import Footer from '../dat/Footer';
import {addOrder} from '../../api/userApi'
import {message} from 'antd'

 const PayWMomo = ({phone}) => {
  const navigate=useNavigate();
  let TotalAmount =  localStorage.getItem('totalAmount');
  const containerStyle = {
    maxWidth: '540px',
  };
  const cartItems = JSON.parse(localStorage.getItem('cart'));
  function addOrderUser(){
    let form = {
      voucher_id: 1,
      payment_id: 1,
      shipping_id: 1,
      notice: "None",
      sum_price: parseInt(TotalAmount.replace(/\./g, "")),
      order_detail: cartItems.map((ele) => {return {product_id: ele.id, count: ele.quantity}})
    }
    localStorage.setItem('cart', JSON.stringify([]));
    addOrder(localStorage.getItem('token'), form).then(() => {message.success("Order Successfully!")}).catch(() => {message.error("Order Failed!")});
  }
  return (
    
<>
<Header/>
<div class="row justify-content-center align-items-center g-2">
    <div class="col-4"><div className="card text-start " >
      <img className="card-img-top " src="https://www.saigonchildren.com/wp-content/uploads/2020/04/MM_QR_CODE_MOMOTUUM20191113-saigonchildren.png"  alt="QR code"/>
      <div className="card-body">
        <h4 className="card-title">Momo payment option</h4>
        <p class="mb-5" style={{textAlign: "center"}}>Total amount to be pay: <span style={{color: "red", fontWeight: "600px"}}>{TotalAmount} VND</span></p>
        <div style={{
          display:'flex',
          justifyContent: 'space-around',
          }}>
          <h5 class="fw-bold btn btn-warning col-4 rounded" onClick={()=>{navigate(`/cart-pro`)}}>
            <a><i class="fas fa-angle-left me-2"></i>Back to shopping</a>
          </h5>
          <a onClick={()=>{ addOrderUser();navigate(`/thank-you`);}} class="btn btn-primary col-4">Confirm you have paid</a>
        </div>
        
      </div>
    </div></div>
    
</div>

    

<Footer/>
</>
  );
}
export default PayWMomo;