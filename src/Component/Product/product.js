import React from 'react';
import { useNavigate } from 'react-router-dom'
import './product.css'
 const Product = ({phone}) => {
  const navigate=useNavigate();
  return (
    // style={{width: '18rem'}}
<>

    <div className="card text-start edit" onClick={()=>{navigate(`/product/${phone.id}`)}} >
      <img className="card-img-top" src={phone.image} width="370" height="450" alt="TOTF"/>
      <div className="card-body">
        <h4 className="card-title name">{phone.name}</h4>
        <p className="card-text">Color style:  {phone.color}</p>
        <p className="card-text">{(phone.price * (100-phone.sale_percent)/100).toLocaleString()} VND</p>
        <p className="card-text text-decoration-line-through text-danger">{phone.price.toLocaleString()} VND</p>
        <a href="#" class="btn btn-primary">Click for more detail</a>
      </div>
    </div>
</>
  );
}
export default Product;