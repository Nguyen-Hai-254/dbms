import React from 'react';
import Footer from './Footer';
import Header from './Header';
import '../../css/Order.css'
import product from '../../img/img-product.jpg'
function Order() {
    return (
        <React.Fragment>
            <Header/>
            <div class="Order mb-2">
                <div class="container">
                    <div class="pt-2 me-0"><i class="fa-solid fa-arrow-left me-3"></i>Quay lại mua thêm sản phẩm khác</div>
                    <div class="row mt-2 justify-content-around ">
                        <div class="col-5  bg-white px-4">
                            <div class="fs-5">Your cart</div>
                            <div class="">
                                <input class="form-check-input" type="checkbox" value="order" id="1"/>
                                <div class="product row mb-5" >
                                    <div class="col-4">
                                        <img src={product} alt="" width="100%"/>
                                    </div>
                                    <div class="col-8">
                                        <div>Laptop Acer Aspire 7 Gaming A715 42G R05G R5 5500U/8GB/512GB/4GB GTX1650/144Hz/Win11 (NH.QAYSV.007)</div>
                                        <div class="fs-5 mt-2 text-danger">15.000.000Đ</div>
                                        <div class="text-secondary text-end"><i class="fa-solid fa-trash me-2 "></i>Delete</div>
                                        <div class="float-end text-end mt-3">
                                            <span class="text-dark me-2" id="basic-addon1">quantity</span>
                                            <input class="w-50"type="text" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="">
                                <input class="form-check-input" type="checkbox" value="order" id="1"/>
                                <div class="product row mb-5" >
                                    <div class="col-4">
                                        <img src={product} alt="" width="100%"/>
                                    </div>
                                    <div class="col-8">
                                        <div>Laptop Acer Aspire 7 Gaming A715 42G R05G R5 5500U/8GB/512GB/4GB GTX1650/144Hz/Win11 (NH.QAYSV.007)</div>
                                        <div class="fs-5 mt-2 text-danger">15.000.000Đ</div>
                                        <div class="text-secondary text-end"><i class="fa-solid fa-trash me-2 "></i>Delete</div>
                                        <div class="float-end text-end mt-3">
                                            <span class="text-dark me-2" id="basic-addon1">quantity</span>
                                            <input class="w-50"type="text" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="">
                                <input class="form-check-input" type="checkbox" value="order" id="1"/>
                                <div class="product row mb-5" >
                                    <div class="col-4">
                                        <img src={product} alt="" width="100%"/>
                                    </div>
                                    <div class="col-8">
                                        <div>Laptop Acer Aspire 7 Gaming A715 42G R05G R5 5500U/8GB/512GB/4GB GTX1650/144Hz/Win11 (NH.QAYSV.007)</div>
                                        <div class="fs-5 mt-2 text-danger">15.000.000Đ</div>
                                        <div class="text-secondary text-end"><i class="fa-solid fa-trash me-2 "></i>Delete</div>
                                        <div class="float-end text-end mt-3">
                                            <span class="text-dark me-2" id="basic-addon1">quantity</span>
                                            <input class="w-50"type="text" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-6 bg-white px-4">
                            <div class="fs-5">Customer information</div>
                            <div class="col-12 mt-3">
                                <input class="me-2" type="radio" name="gender" />
                                <span class="me-5" >Male</span>
                                <input class="me-2" type="radio" name="gender" />
                                <span class="" >Female</span>
                            </div>
                            <div class="row mt-4 ">
                                <div class="col-6">
                                    <input class="p-1 rounded w-100"type="text" placeholder='Surname & firstname'/>
                                </div>
                                <div class="col-6">
                                    <input class="p-1 rounded w-100"type="text" placeholder='Phone number'/>
                                </div>
                            </div>
                            <div class="col-12 mt-3">
                                <textarea class="p-1 rounded w-100" rows='5' type="text" placeholder='Addtional Notes (optional)'></textarea>
                            </div>
                            <div class="mt-5 fs-6">Address</div>
                            <div class="row mt-2">
                                <div class="col-6">
                                    <input class="p-1 rounded w-100"type="text" placeholder='Province/City'/>
                                </div>
                                <div class="col-3">
                                    <input class="p-1 rounded w-100"type="text" placeholder='District'/>
                                </div>
                                <div class="col-3">
                                    <input class="p-1 rounded w-100"type="text" placeholder='Ward'/>
                                </div>
                                
                            </div>
                            <div class="row mt-3">
                                 <div class="col-12">
                                    <input class="p-1 rounded w-100"type="text" placeholder='Enter address'/>
                                </div>
                            </div>
                            <div class="row mt-5">
                                <div class="">
                                    <input class="btn btn-primary w-100" type="button" value="Order"/>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>        
            <Footer/>

        </React.Fragment>
     
    );
}

export default Order;
