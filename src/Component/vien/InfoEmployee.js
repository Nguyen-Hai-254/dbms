import React, { useState, useEffect } from 'react';
import '../../css/vien/AddEmployeeForm.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "react-datepicker/dist/react-datepicker.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faX} from '@fortawesome/free-solid-svg-icons'
import {getUser} from '../../api/adminApi'
function InfoEmployee({showInfoForm,setShowInfoForm,Id_emp}) {
  const [user, setUser] = useState(null);
  const handleCancel = () => {
    setShowInfoForm(false);
  };
  useEffect(() => {
    console.log("check use effect")
    const fetchData = async () => {
      const result = await getUser(Id_emp,localStorage.getItem('token'));
      setUser(result[0]); // lưu trữ kết quả trả về vào state user
    };
    fetchData();
  },[]);
  return (
    <>
    {showInfoForm && (
    <div className='background'>
      <div className='form'>
        <div className='form_header'>
          <h3>Employee Information</h3>
          <FontAwesomeIcon icon={faX} class="icon" style={{ cursor: 'pointer' }} onClick={handleCancel}></FontAwesomeIcon>
        </div>
      <Form>
      <Form.Group as={Row} className="mb-3">
        <Col sm="12">
          {user && 
          <Form.Control type="text" value={user.name} id="name" placeholder="Fullname" readOnly/>
          }
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col sm="12">
        {user && 
          <Form.Control type="text" value={user.email} id="email" placeholder="Email" readOnly/>
        }
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col sm="12">
        {user && 
        <Form.Control
          value={user.phone}
          type="text"
          id = "phone"
          placeholder="Telephone number"
          pattern="[0-9]{10}"
          required
          readOnly
        />
        }
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col sm="12">
        {user && 
          <Form.Control type="text" value={user.address} id="address" placeholder="Address" readOnly/>
        }
          </Col>
      </Form.Group>
    </Form>
      </div>
    </div>
 )}
 </>
 );
}

export default InfoEmployee;
