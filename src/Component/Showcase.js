import React from 'react'
import Footer from './dat/Footer';
import Header from './dat/Header';
import Product from './Product/product';

const Phones = (props) => {
  
    return (
      <>
        <Header handleItem={props.setPhone}/>
        <h1 className='text-center m-1'>Display of products</h1>
        <div>
          <div class="row justify-content-center align-items-center g-2">
            <div class="col-4">
            {props.phone.map((phone, key) => (
            <Product key={key} phone={phone} />
          ))}
            {!props.phone.length && <div style={{
              fontSize: "30px",
              margin: "50px 0",
              textAlign: "center"
            }}>No products found....</div>}
            </div>
            <div class="col-4">
            {props.phone.reverse().map((phone, key) => (
            <Product key={key} phone={phone} />
          ))}
            
            </div>
          </div>

          
        </div>
        <Footer />
      </>
    );
  };
  
  export default Phones;