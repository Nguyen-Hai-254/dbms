import React, { Component } from 'react'
import Footer from '../dat/Footer';
import Header from '../dat/Header';
class OrderMan extends Component {
  render() {
    return (
      <div>
        <Header/>
        <h2 className='text-center'>Order Management page</h2>
        <div class="container">
        <table class="table table-bordered md-8">
        <thead>
    <tr className='bg-secondary'>
      <th scope="col">Order ID</th>
      <th scope="col">Created</th>
      <th scope="col">Products</th>
      <th scope="col">Shipper</th>
      <th scope="col">Status</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Mark</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Mark</td>
      <td>Mark</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Larry the Bird</td>
      <td>@twitter</td>
      <td>Mark</td>
      <td>Mark</td>
      <td>Mark</td>

    </tr>
  </tbody>
</table>
        </div>
        
        <Footer/>
      </div>

      
    );
  }
}
export default OrderMan;