import React from 'react';
import Footer from './Footer';
import Header from './Header';
import '../../css/AddItemToCart.css'
import product from '../../img/img-product.jpg'
function AddItemToCart() {
    return (
        <React.Fragment>
            <Header/>

            <div class="AddItemToCart ">
              <div class="container">
                  <div class="row fs-3 pt-3">Điện thoại Samsung Galaxy S21 FE 5G (6GB/128GB)</div>
                  <div class="row ">
                      <div class="col ">
                        <img src={product} alt="" width="100%"/>
                      </div>
                      <div class="col ps-5 ">
                        <div class="row mt-5">
                          <div class="col-3 border-end border-1 border-dark ps-0">   
                              4.9
                              <i class="fa-solid fa-star text-warning"></i>
                              <i class="fa-solid fa-star text-warning"></i>
                              <i class="fa-solid fa-star text-warning"></i>
                              <i class="fa-solid fa-star text-warning"></i>
                              <i class="fa-solid fa-star text-warning"></i>
                          </div>
                          <div class="col-3 border-end border-1 border-dark"> 15.1K Evaluate</div>
                          <div class="col-3">1K Sold </div>
                        </div>                        
                        <div class="row mt-2 fs-3 fw-bold text-danger">21.000.000Đ</div>
                        <div class="row mt-3 fs-5">Choose color</div>
                        <div class="row mt-2">
                          <div class="col-2 ps-0">
                            <button type="button" class="btn btn-secondary ">White</button>
                          </div>
                          <div class="col-2">
                            <button type="button" class="btn btn-secondary">Black</button>
                          </div>
                      </div>
                      <div class="row mt-5 ps-0">
                        <div class="col-5 ps-0">
                          <button type="button " class="btn btn-secondary p-3 bg-info border-0 fw-bold">Add to Cards</button>
                        </div>
                      </div>
                      </div>   
                  </div>
                  <div class="row decreption mt-4 pb-5">
                    <h2>PRODUCT DESCRIPTION</h2>
                    <p class="mt-2">Samsung Galaxy S21 FE 5G (6GB/128GB) was launched by Samsung with trendy appearance, strong configuration, 
                      beautiful photos with a set of 3 quality cameras, enough battery life for daily use and what else? We invite
                      you to explore the following content right away.<br/>
                      Elegant appearance, fashion color
                      Galaxy S21 FE 5G has a slim and light design with a thickness of 7.9 mm , a weight of only 177 grams , rounded 
                      edges for a harmonious and soft feel, combining trendy colors including purple, green, gray and white makes it 
                      easy for you to create your own personal style.
                    </p>
                  </div>
              </div>
            </div>        
            <Footer/>

        </React.Fragment>
     
    );
}

export default AddItemToCart;
