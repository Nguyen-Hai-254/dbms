import React from "react";
import './viewProduct.css'
function ViewProduct(props){
    return (
      <div className="product">
        <img src={props.image} />
        <h6>{props.name}</h6>
        <p className="sale">
          {(parseFloat(props.price) * (1-parseFloat(props.sale_percent)/100)).toLocaleString()}
        </p>
        <p className="not-sale">{props.price.toLocaleString()}</p>
        <div className="foot">
          <button>Xem đánh giá</button>
          <button onClick={props.setEditForm()}>Edit</button>
        </div>
      </div>
    );
}
export default ViewProduct;