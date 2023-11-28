import React, { useState } from 'react';
import '../../css/vien/AddUserForm.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {Dropdown } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faX} from '@fortawesome/free-solid-svg-icons'
import ShowWarning from './ShowWarning'
function AddEmployeeForm() {
  const [showWarning, setShowWarning] = useState(false);
  const handleShowWarning = () => {
    setShowWarning(true);
  }
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [selectedGender, setSelectedGender] = useState("");
  const handleDayChange = (event) => {
    setDay(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };
  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };
  const [selectedAccountType, setSelectedAccountType] = useState(null);

  const handleSelect = (eventKey) => {
    setSelectedAccountType(eventKey);
  };

  return (
    
    <div className='background'>

      <div className='form'>
        <div className='form_header'>
          <h3>Thêm thành viên</h3>
          <FontAwesomeIcon icon={faX} class="icon" onClick={handleShowWarning}></FontAwesomeIcon>
          {showWarning && <ShowWarning />}
        </div>
      <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Col sm="6">
          <Form.Control type="text" placeholder="Họ" />
        </Col>
        <Col sm="6">
          <Form.Control type="text" placeholder="Tên" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Col sm="12">
          <Form.Control type="text" placeholder="User" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="">
        <Col sm="4">
        <Form.Control
          type="tel"
          placeholder="Số điện thoại"
          pattern="[0-9]{10}"
          required
        />
        </Col>
        <Col sm="8">
          <Form.Control type="text" placeholder="Email" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Col sm="12">
          <Form.Control type="text" placeholder="Password" />
        </Col>
      </Form.Group>

      <div style={{display:'flex',justifyContent:'left'}}>Sinh nhật</div>
      <Form.Group as={Row} className="mb-3">
        <Col sm={4}>
          <Form.Control as="select" value={day} onChange={handleDayChange}>
            <option value="">Ngày</option>
            {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </Form.Control>
        </Col>
        <Col sm={4}>
          <Form.Control as="select" value={month} onChange={handleMonthChange}>
            <option value="">Tháng</option>
            {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </Form.Control>
        </Col>
        <Col sm={4}>
        <Form.Control as="select" value={month} onChange={handleYearChange}>
            <option value="">Năm</option>
            {Array.from({ length: 120 }, (_, i) => 1900 + i).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </Form.Control>
        </Col>
      </Form.Group>
      <div style={{display:'flex',justifyContent:'left'}}>Giới tính</div>
      <Form.Group  as={Row} className="mb-3">
        <Col sm={4}>
          <Form.Check
            type="radio"
            label="Nam"
            name="gender"
            id="male"
            value="Nam"
            checked={selectedGender === "Nam"}
            onChange={handleGenderChange}
          />
        </Col>
        <Col sm={4}>
        <Form.Check
            type="radio"
            label="Nữ"
            name="gender"
            id="female"
            value="Nữ"
            checked={selectedGender === "Nữ"}
            onChange={handleGenderChange}
          />
        </Col>
        <Col sm={4}>
        <Form.Check
            type="radio"
            label="Khác"
            name="gender"
            id="other"
            value="Khác"
            checked={selectedGender === "Khác"}
            onChange={handleGenderChange}
          />
        </Col>
        </Form.Group>
        <Form.Group>
              <button class="btn btn-success">Lưu thông tin</button>
        </Form.Group>
    </Form>
      </div>
    </div>
  );
}

export default AddEmployeeForm;
