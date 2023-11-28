import React, {useContext}  from 'react'
import Footer from '../dat/Footer';
import Header from '../dat/Header';
import Product from './product-incart';
import { AddContext } from '../../App';
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
// const Phones = (props) => {
//     // console.log();
//     // props.setState(props.setState)
    
//         let phone = getProductByCategory("CellPhone");
//         props = phone;
//         props.then((resolvedObject) => {
//             const dataArray = resolvedObject.data;
//             //console.log(dataArray)
//           });
//     return (
//         <>
//             <Header/>
//             <div>Phones</div>
//             <div>
//                 {
//                     //console.log(phone)
//                     // data.map((phone,key) => (
//                     //     <Product key={key} phone={phone.data}/>
//                     // ))
                    
//                     //console.log(props)
//                     console.log(dataArray)
//                 }
//             </div>
            
//             <Footer/>
//         </>
//     );
// }

// export default Phones;
const Cart = ({onRemove, cartItems, onAdd, onDecrease}) => {
    // useEffect(() => {
    //   getProductByCategory('CellPhone').then((resolvedObject) => {
    //     const dataArray = resolvedObject.data;
    //     setPhoneData(dataArray);
    //     console.log(dataArray);
    //   });
    // }, []);
    let [TotalAmount, setTotalAmount]= useState(0);
    cartItems= JSON.parse(localStorage.getItem('cart'));
    const navigate = useNavigate();
      const [paymentMethod, setPaymentMethod] = useState('');
    
      const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
      };
    
      const handleCheckout = () => {
        console.log('Checkout');
        if (paymentMethod === 'visa') {
          // Redirect to Visa payment page
          navigate(`/pay-with-card`)
        } else if (paymentMethod === 'paypal') {
          // Redirect to PayPal payment page
          navigate(`/pay-with-momo`)
        }
      };
      const [phoneNumber, setPhoneNumber] = useState('');

      const handlePhoneChange = (event) => {
        const value = event.target.value;
        const numericOnly = /^\d{0,10}$/;
        if (numericOnly.test(value)) {
          setPhoneNumber(value);
        }
      };
      const [firstName, setFirstName] = useState('');
      const [lastName, setLastName] = useState('');
      
    
      const handleFirstNameChange = (event) => {
        const value = event.target.value;
        const lettersOnly = /^[A-Za-z]+$/;
        if (lettersOnly.test(value) || value === '') {
          setFirstName(value);
        }
      };
    
      const handleLastNameChange = (event) => {
        const value = event.target.value;
        const lettersOnly = /^[A-Za-z]+$/;
        if (lettersOnly.test(value) || value === '') {
          setLastName(value);
        }
      };
    
    
    useEffect(()=>{
      let totalAmount = 0;
      for (const item of cartItems) {
        totalAmount += item.quantity * item.price*(100-item.sale_percent)/100;
      }
        setTotalAmount(totalAmount.toLocaleString());
        localStorage.setItem('totalAmount', totalAmount.toLocaleString());
    },[cartItems])
    return (
      <>
        <Header />
        <h1 className='text-center'>This is the cart</h1>
        {(cartItems.length ===0) ?  <h1 className='text-center'>Choose something to buy and comback</h1> 
        
        :<div>
        {/* <div class="row justify-content-center align-items-center g-2">
          <div class="col-4">
            
          {cartItems.map((phone, key) => (
          <Product key={key} phone={phone} />
        ))}
          </div>
          
        </div> */}
        <section class="h-100 gradient-custom">
<div class="container py-5">
  <div class="row d-flex justify-content-center my-4">
    <div class="col-md-8">
      <div class="card mb-4">
        <div class="card-header py-3">
          <h5 class="mb-0">The number of items in your cart: {cartItems.length}</h5>
        </div>
        <div class="card-body">
           
           {/* Single item */}
           {cartItems.map((phone, key) => (
          <Product key={key} phone={phone} onRemove={onRemove} onAdd={onAdd} onDecrease={onDecrease}/>
        ))}

          <hr class="my-4" />

           {/* Single item */}
          
           {/* Single item */}
        </div>
      </div>
      
    </div>
    <div class="col-md-4">
      <div class="card mb-4">
        <div class="card-body">
          <p><strong>Expected shipping delivery</strong></p>
          <p class="mb-0">31.5.2023 - 7.6.2023</p>
        </div>
      </div>
      <div class="card mb-4 mb-lg-0">
        <div class="card-body">
          <p><strong>We accept</strong></p>
          {/* <img class="me-2" width="45px"
            src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
            alt="Visa" />
          <img class="me-2" width="45px"
            src="https://play-lh.googleusercontent.com/dQbjuW6Jrwzavx7UCwvGzA_sleZe3-Km1KISpMLGVf1Be5N6hN6-tdKxE5RDQvOiGRg=w240-h480-rw"
            alt="PayPal acceptance mark" /> */}
      <label className='ms-3'>
        <input
          type="radio"
          name="paymentMethod"
          value="visa"
          checked={paymentMethod === 'visa'}
          onChange={handlePaymentMethodChange}
        />
        <img
          className="me-2"
          width="45px"
          src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
          alt="Visa"
        />
      </label>

      <label className='ms-3'>
        <input
          type="radio"
          name="paymentMethod"
          value="paypal"
          checked={paymentMethod === 'paypal'}
          onChange={handlePaymentMethodChange}
        />
        <img
          className="me-2"
          width="45px"
          src="https://play-lh.googleusercontent.com/dQbjuW6Jrwzavx7UCwvGzA_sleZe3-Km1KISpMLGVf1Be5N6hN6-tdKxE5RDQvOiGRg=w240-h480-rw"
          alt="PayPal acceptance mark"
        />
      </label>

        </div>
      </div>
      <div class="card mt-4 mb-4">
        <div class="card-header py-3">
          <h5 class="mb-0">Summary</h5>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li
              class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
              Products
              <span>{TotalAmount} VND</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center px-0">
              Shipping
              <span>Gratis</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
              <div>
                <strong>Total amount</strong>
                <strong>
                  <p class="mb-0">(including VAT)</p>
                </strong>
              </div>
              <span><strong>{TotalAmount} VND</strong></span>
            </li>
          </ul>


{/* Address */}
    {/* <div class="form-outline">
  
      <input
        type="text"
        id="form7Example1"
        className="form-control"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <label className="form-label" htmlFor="form7Example1">
        First name
      </label>
    </div> */}
      {/* <div className="form-outline">
        <input
          type="text"
          id="form7Example2"
          className="form-control"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <label className="form-label" htmlFor="form7Example2">
          Last name
        </label>
      </div> */}
          {/* <div class="form-outline mb-4">
            <input type="text" id="form7Example4" class="form-control" />
            <label class="form-label" for="form7Example4">Address</label>
          </div> */}
      {/* <div className="form-outline mb-4">
        <input
          type="text"
          id="form7Example6"
          className="form-control"
          value={phoneNumber}
          onChange={handlePhoneChange}
        />
        <label className="form-label" htmlFor="form7Example6">
          Phone
        </label>
      </div> */}
          {/* <div class="form-outline mb-4">
            <textarea class="form-control" id="form7Example7" rows="4"></textarea>
            <label class="form-label" for="form7Example7">Additional information</label>
          </div> */}

              {/* Check out button */}
      <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => !localStorage.getItem('name')? navigate('/login'):handleCheckout()}>
        Go to checkout
      </button>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
<Footer />
      </div>
        
      }
        
        
      </>
    );
  };
  
  export default Cart;