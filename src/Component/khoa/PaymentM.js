import React, { Component } from 'react'
import Footer from '../dat/Footer';
import Header from '../dat/Header';
import sample from '../../img/sample.jpg';
class PaymentM extends Component {
  render() {
    return (
      
      <div>
        <Header/>
        <h2>Scan QR 4 payment page</h2>
        <div class="card" >
  <img src={sample} class="card-img-top" alt="qrcode"/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
        <Footer/>
      </div>

      
    );
  }
}
export default PaymentM;