import React, { Component } from 'react'
import Footer from '../dat/Footer';
import Header from '../dat/Header';
class PaymentB extends Component {
  render() {
    return (
      
      <div>
        <Header/>
        <h2>Confirm OTP page</h2>
        <div class="container  col-4 w-25 border p-3 rounded rounded-3 bg-info bg-gradient shadow-lg ">
        <form>
 
  <div class="mb-3 align-items-center">
    <label for="exampleInputOtp" class="form-label">Otp</label>
    <input type="Otp" class="form-control" id="exampleInputOtp"/>
  </div>
  <div class="mb-3 form-check">
    
  </div>
  <button type="submit" class="btn btn-danger">Submit</button>
</form>
        </div>
        
        <Footer/>
      </div>

      
    );
  }
}
export default PaymentB;