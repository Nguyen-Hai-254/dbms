import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'
import { AddContext } from '../../App';
import { useContext } from 'react';

 const Product = ({phone, onRemove, onAdd, onDecrease}) => {
  const navigate=useNavigate();  
  return (
    
<>
    <div class="row" style={{paddingBottom: '10px'}}>
      <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
        <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
          <img src={phone.image}
            class="w-100" alt="Blue Jeans Jacket" />
          <a href="#!">
            <div class="mask" ></div>
          </a>
        </div>
      </div>

      <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
          {/* Data */}
        <p onClick={()=>{navigate(`/product/${phone.id}`)}}><strong>{phone.name}</strong></p>
        <p>Color style:  {phone.color}</p>
        <p>Place holder</p>
        
        {/* <button type="button" class="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
          title="Move to the wish list">
          <i class="fas fa-heart"></i>console.log
        </button> */}

          {/* Data */}
      </div>

              <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                 {/* Quantity */}
                <div class="d-flex mb-4" >
                  <button class="btn btn-primary px-3 me-2"
                    onClick={()=>{
                      if(phone.quantity>1) onDecrease(phone);}}>
                    <i class="fas fa-minus"></i>
                  </button>

                  <div class="form-outline" style={{textAlign: 'center'}}>
                    <input style={{textAlign:"center"}} id="form1" min="0" name="quantity" value={phone.quantity} type="disabled" class="form-control" />
                    <label class="form-label" for="form1">Quantity</label>
                  </div>

                  <button class="btn btn-primary px-3 ms-2"
                    onClick={()=>{onAdd(phone);}}>
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
                 {/* Quantity */}

                 {/* Price */}
                <p class="text-start text-md-center">
                  <strong>{(phone.quantity * phone.price*(100-phone.sale_percent)/100).toLocaleString() } VND</strong>
                  <br/>
                  <strong className='text-decoration-line-through text-danger'>{(phone.quantity * phone.price).toLocaleString() } VND</strong>

                </p>
                 {/* Price */}
                 <button type="button" style={{
                  float: 'right',
                 }} class="btn btn-danger btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                  title="Remove item" onClick={()=>{onRemove(phone)}}>
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>
            
</>
  );
}
export default Product;