import React, { Component } from 'react'
import Footer from '../dat/Footer';
import Header from '../dat/Header';
import sample from '../../img/sample.jpg';
import Contact from '../contact/contact';
import { Carousel } from "react-bootstrap";
import styles from '../../css/khoa/homepage.module.css';
import  '../../css/khoa/carousel.css';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate=useNavigate();
    return (
      
      <div style={{backgroundColor:'#F3F3F3'}}>
        <Header/>
        <h2 className='text-center'>Wellcome!</h2>
        <div className="container bg-light">
        <div class="row p-3">
        <div class="col-6">
            <div class="card w-100">
              {/* <!-- card-header --> */}
              <Carousel style={ {
                                    width: "100%",
                                    height: "100%"
                              } }>
                                    <Carousel.Item>
                                          <img
                                                className={ `d-block w-100 ${ styles.img }` }
                                                src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/4/14_1_9_2_9.jpg"
                                                alt="First"
                                          />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                          <img
                                                className={ `d-block w-100 ${ styles.img }` }
                                                src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/_/e/_en_2_5.jpg"
                                                alt="Second"
                                          />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                          <img
                                                className={ `d-block w-100 ${ styles.img }` }
                                                src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/x/n/xnnah_kas_3.png"
                                                alt="Third"
                                          />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                          <img
                                                className={ `d-block w-100 ${ styles.img }` }
                                                src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/t/r/tr_ng_5.jpg"
                                                alt="Fourth"
                                          />
                                    </Carousel.Item>
                              </Carousel>
            </div>
    </div>
    <div class="col-6">
            <div class="card w-100" >
              {/* card-header  */}
              <div class="card-header">Modern smart phones are just a click aways!</div>
              {/* <!-- card-body --> */}
              <div class="card-body">
                {/* <!-- card-title --> */}
                <h5 class="card-title">Cutting edge technologies!</h5>
                {/* <!-- card-text --> */}
                <p class="card-text">
                Don't settle for outdated technology when the future is so close at hand. Upgrade to the world of modern smartphones today and discover a universe of possibilities, all just a click away. Step into the future, embrace innovation, and let our smartphones empower you to live your best, connected life!

Visit our store or explore our online selection now and experience the magic of modern smartphones – your gateway to a limitless future!
                </p>
                <a  onClick={()=>{navigate('/cellphones')}} class="btn btn-primary ">Explore more items</a>
              </div>
              {/* <!-- card-footer --> */}
      
            </div>
          </div>
    
  </div>
  
  <div class="row p-3">
  <div class="col-6">
            <div class="card w-100" >
              {/* card-header  */}
              <div class="card-header">State of the art productivity machine!</div>
              {/* <!-- card-body --> */}
              <div class="card-body">
                {/* <!-- card-title --> */}
                <h5 class="card-title">Faster than you can render this page!</h5>
                {/* <!-- card-text --> */}
                <p class="card-text">
                No more waiting around for files to transfer or programs to load. With ultra-fast storage options, our laptops ensure rapid access to your data, enabling you to stay in the flow of your work without interruption. Save valuable time and focus on what truly matters – accomplishing your tasks with precision and efficiency.

Designed with the modern professional in mind, our laptops offer sleek and lightweight designs that are perfect for on-the-go productivity. Whether you're working from the office, a coffee shop, or your favorite co-working space, our laptops provide the portability you need without compromising on performance.
                </p>
                <a  onClick={()=>{navigate('/laptop')}} class="btn btn-primary ">Explore more items</a>
              </div>
              {/* <!-- card-footer --> */}
      
            </div>
          </div>
          <div class="col-6">
            <div class="card w-100">
              {/* <!-- card-header --> */}
              <Carousel style={ {
                                    width: "100%",
                                    height: "100%"
                              } }>
                                    <Carousel.Item>
                                          <img
                                                className={ `d-block w-100 ${ styles.img }` }
                                                src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/a/i/air_m2.png"
                                                alt="First"
                                          />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                          <img
                                                className={ `d-block w-100 ${ styles.img }` }
                                                src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/l/a/laptop-hp-gaming-victus-15-fa0031dx-6503849-6.jpg"
                                                alt="Second"
                                          />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                          <img
                                                className={ `d-block w-100 ${ styles.img }` }
                                                src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/e/text_ng_n_3__1_71.png"
                                                alt="Third"
                                          />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                          <img
                                                className={ `d-block w-100 ${ styles.img }` }
                                                src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/4/h/4h43.png"
                                                alt="Fourth"
                                          />
                                    </Carousel.Item>
                              </Carousel>
            </div>
    </div>
    
  </div>
  <div class="row p-3">
  <div class="col-6 ">
            <div class="card w-100">
              {/* <!-- card-header --> */}
              <Carousel style={ {
                                    width: "100%",
                                    height: "100%"
                              } }>
                                    <Carousel.Item>
                                          <img
                                                className={ `d-block w-100 ${ styles.img }` }
                                                src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/i/p/ipad-10-2-2021-2_6_1.png"
                                                alt="First"
                                          />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                          <img
                                                className={ `d-block w-100 ${ styles.img }` }
                                                src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/9/_/9_10_71_1_1.jpg"
                                                alt="Second"
                                          />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                          <img
                                                className={ `d-block w-100 ${ styles.img }` }
                                                src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/a/tab_s8_2.jpg"
                                                alt="Third"
                                          />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                          <img
                                                className={ `d-block w-100 ${ styles.img }` }
                                                src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/a/tab_s8_ultra.jpg"
                                                alt="Fourth"
                                          />
                                    </Carousel.Item>
                              </Carousel>
            </div>
    </div>
    <div class="col-6">
            <div class="card w-100" >
              {/* card-header  */}
              <div class="card-header">Portable TVs!</div>
              {/* <!-- card-body --> */}
              <div class="card-body">
                {/* <!-- card-title --> */}
                <h5 class="card-title">Watching movies has never been easier!</h5>
                {/* <!-- card-text --> */}
                <p class="card-text">
                Say goodbye to lagging programs and hello to lightning-fast performance. Equipped with powerful processors, our laptops effortlessly handle even the most demanding tasks, allowing you to breeze through your work with unmatched efficiency. Experience seamless multitasking, run resource-intensive applications, and watch your productivity soar to unprecedented heights.

Immerse yourself in stunning visuals and crystal-clear displays that bring your projects to life. Whether you're editing videos, designing graphics, or analyzing complex data, our laptops deliver vibrant colors and sharp details that make every pixel count. Witness the difference as your creativity flourishes and your work stands out from the crowd.
                
                </p>
                <a  onClick={()=>{navigate('/ipad')}} class="btn btn-primary ">Explore more items</a>
              </div>
              {/* <!-- card-footer --> */}
      
            </div>
          </div>
    
  </div>

  <div class="row p-3">
  <div class="col-6">
            <div class="card w-100" >
              {/* card-header  */}
              <div class="card-header">Boost productivity 1000% with our watches</div>
              {/* <!-- card-body --> */}
              <div class="card-body">
                {/* <!-- card-title --> */}
                <h5 class="card-title">Don't settle for less</h5>
                {/* <!-- card-text --> */}
                <p class="card-text">
                Security is a top priority in the digital age, and our watches have you covered. With advanced features like biometric authentication and robust encryption, your sensitive data remains safe from prying eyes, giving you peace of mind as you tackle your important projects.

We understand that every individual has unique needs, which is why our watches range offers a diverse selection of models, each tailored to cater to specific requirements. From high-performance workstations to sleek ultrabooks, we have the perfect match for your professional journey.
                </p>
                <a  onClick={()=>{navigate('/watch')}} class="btn btn-primary ">Explore more items</a>
              </div>
              {/* <!-- card-footer --> */}
      
            </div>
          </div>
          <div class="col-6">
            <div class="card w-100">
              {/* <!-- card-header --> */}
              <Carousel style={ {
                                    width: "100%",
                                    height: "100%"
                              } }>
                                    <Carousel.Item>
                                          <img
                                                className={ `d-block w-100 ${ styles.img }` }
                                                src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/t/gts-2.jpg"
                                                alt="First"
                                          />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                          <img
                                                className={ `d-block w-100 ${ styles.img }` }
                                                src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/w/a/watch-se.jpg"
                                                alt="Second"
                                          />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                          <img
                                                className={ `d-block w-100 ${ styles.img }` }
                                                src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/t/gts-2.jpg"
                                                alt="Third"
                                          />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                          <img
                                                className={ `d-block w-100 ${ styles.img }` }
                                                src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/2/s23-ultra-tim.png"
                                                alt="Fourth"
                                          />
                                    </Carousel.Item>
                              </Carousel>
            </div>
    </div>
    
  </div>
        </div>

      <div class="row justify-content-center align-items-center g-2">
        <div class="col-3">
          <h6>Please give use your feedback!</h6>
          <Contact/>
        </div>
      </div>
        
        <Footer/>
      </div>

      
    );
  }

