import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import '../../css/vien/AddEmployeeForm.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "react-datepicker/dist/react-datepicker.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faX} from '@fortawesome/free-solid-svg-icons'
import {addStaff} from '../../api/adminApi'
import ShowWarning from './ShowWarning'
import {getAllStaff} from '../../api/adminApi'
function AddEmployeeForm({setDataa,setShowForm}) {
  const [isVisible, setIsVisible] = useState(true);
  let navigate=useNavigate()
  const [data,setData]=useState({
    name              : "",
    email             : "",
    phone             : "",
    password          : "",
    address           : ""
  })


  function handle(e){
    const newData={...data}
    newData[e.target.id]=e.target.value
    setData(newData)
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      console.log("check");
      const res = await addStaff(data, localStorage.getItem('token'));
      console.log(res);
      alert(res.message);
      setIsVisible(false);
      getAllStaff(localStorage.getItem('token'))
      .then(res => {
        if (res && Array.isArray(res)) {
          setDataa(res);
          setShowForm(false);
        }
      })
      .catch(error => {
        console.log(error);
      });
    } catch (error) {
      console.log(error.response.data);
      alert(error.response.data.error);
    }
  }
  
  
  const [showWarning, setShowWarning] = useState(false);
  const handleShowWarning = () => {
    setShowWarning(true);
  }


  return (
    <>
    {isVisible && (    
    <div className='background'>
      <div className='form'>
        <div className='form_header'>
          <h3 class="can_giua">Add employee</h3>
          <FontAwesomeIcon icon={faX} class="icon" style={{ cursor: 'pointer' }} onClick={handleShowWarning}></FontAwesomeIcon>
          {showWarning && <ShowWarning setIsVisible={setIsVisible} setShowWarning={setShowWarning} showWarning={showWarning} setShowForm={setShowForm}/>}
        </div>
      <Form>
      <Form.Group as={Row} className="mb-3">
        <Col sm="12">
          <Form.Control type="text" onChange={e=>handle(e)} value={data.name} id="name" placeholder="Fullname" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col sm="12">
          <Form.Control type="text" onChange={e=>handle(e)} value={data.email} id="email" placeholder="Email" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col sm="12">
        <Form.Control
          onChange={e=>handle(e)} value={data.phone}
          type="text"
          id = "phone"
          placeholder="Telephone number"
          pattern="[0-9]{10}"
          required
        />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col sm="12">
          <Form.Control type="text" onChange={e=>handle(e)} value={data.password} id="password" placeholder="Password" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
      <Col sm="12">
          <Form.Control type="text" onChange={e=>handle(e)} value={data.address} id="address" placeholder="Address" />
      </Col>
      </Form.Group>

      <Form.Group className="can_giua_add_form">
            <button class="btn btn-success" onClick={e=>handleSubmit(e)}>Save </button>
      </Form.Group>
    </Form>
      </div>
    </div>
    )}
  </>
  );
}

export default AddEmployeeForm;
