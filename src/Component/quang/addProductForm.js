import React, { useState, useEffect } from "react";
import "./addProductForm.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Dropdown } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import {message} from 'antd'

import { getAllCategory } from "../../api/userApi";
import {addProduct} from "../../api/adminApi"
function AddProductForm(props) {
  const [form, setForm] = useState({
    code: '',
    name: '',
    category_id: '',
    color: '',
    sale_percent: '',
    price: '',
    manufacturer: '',
    html: '',
    image: '',
    key: [],
    value: []
  });
  const [showWarning, setShowWarning] = useState(false);
  const handleShowWarning = () => {
    setShowWarning(true);
  };

  const [category, setCategory] = useState(null);
  const [color, setColor] = useState(null);
  const [state, setState] = useState(null);
  const handleCategory = (eventKey) => {
    setCategory(eventKey);
    let val = 4;
    if (eventKey === "Phone")
      val = 1;
    else if (eventKey === "Laptop") val = 2;
    else if (eventKey === "Tablet") val = 3;
    setForm({
      ...form,
      ["category_id"]: val
    });    
  };
  const handleColor = (eventKey) => {
    setColor(eventKey);
    setForm({
      ...form,
      ["color"]: eventKey
    });
  }
  const handleChangeText = (event) => {
    if (event.target.name === "html"){
      setForm({
        ...form,
        [event.target.name]: event.target.files[0]});
    }
    else{
      setForm({
        ...form,
        [event.target.name]: event.target.value,
    });
  }
  };

  useEffect(()=>{
    if (state !== null){
      (async()=>{
        console.log(form);
        let rs = await addProduct(form, localStorage.getItem("token"));
        return rs;
      })().then(()=>{
        message.success("Add product successfully!")
      }).catch((err)=>{
        message.error("Add product failed!")
      });
    }
  }, [state]);
  return (
    <div className="background">
      <div className="form">
        <div className="form_header">
          <h3>Add Product</h3>
          <FontAwesomeIcon
            className="icon"
            icon={faX}
            onClick={() => {props.setShowForm(false); setState(null);}}
          ></FontAwesomeIcon>
        </div>
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Col>
              <Form.Control type="text" placeholder="Product code" name="code" onChange={handleChangeText} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col>
              <Form.Control type="text" placeholder="Name" name="name" onChange={handleChangeText}/>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm="3">
              <Dropdown onSelect={handleCategory} name="category_id">
                <Dropdown.Toggle variant="dark" id="account-type-dropdown">
                  {category || "Category"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Phone">Phone</Dropdown.Item>
                  <Dropdown.Item eventKey="Tablet">Tablet</Dropdown.Item>
                  <Dropdown.Item eventKey="Laptop">Laptop</Dropdown.Item>
                  <Dropdown.Item eventKey="Watch">Watch</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col sm="3">
              <Form.Control type="text" placeholder="Price" name="price" onChange={handleChangeText}/>
            </Col>
            <Col sm="3">
              <Form.Control type="text" placeholder="Sale Percent" name="sale_percent" onChange={handleChangeText}/>
            </Col>
            <Col sm="3">
              <Dropdown onSelect={handleColor}>
                <Dropdown.Toggle variant="dark" id="account-type-dropdown" name="color">
                  {color || "Color"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Black">Black</Dropdown.Item>
                  <Dropdown.Item eventKey="Red">Red</Dropdown.Item>
                  <Dropdown.Item eventKey="Pink">Pink</Dropdown.Item>
                  <Dropdown.Item eventKey="Blue">Blue</Dropdown.Item>
                  <Dropdown.Item eventKey="Grey">Grey</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm="5">
              <Form.Control type="text" placeholder="Manufacturer" name="manufacturer" onChange={handleChangeText}/>
            </Col>
            <Col sm="7">
              <Form.Control type="file" placeholder="Description Html" name="html" onChange={handleChangeText} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col>
              <Form.Control type="text" placeholder="Image" name="image" onChange={handleChangeText}/>
            </Col>
          </Form.Group>
          <Form.Group>
            <button
              class="btn btn-success"
              type="button"
              onClick={(event)=>{setState(!state)}}
            >
              Save
            </button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default AddProductForm;
//props.setShowForm(false);