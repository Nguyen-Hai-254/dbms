import { Table,Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import '../../css/vien/Manage_user.css'
import InfoUser from './InfoUser'
import DeleteUser from './DeleteUser'
import {getAllUser} from '../../api/adminApi'
import {getUserByPhone} from '../../api/adminApi'
import HeaderAdmin from "./HeaderAdmin";
import Left from './Left'
function Manage_user() {
  const [data, setData] = useState([]);
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [showInfoForm, setShowInfoForm] = useState(false);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const [selectedEmployeeId1, setSelectedEmployeeId1] = useState(null);
  const [showLogOut, setShowLogOut] = useState(false);
  const [showEditInfo, setShowEditInfo] =  useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const handleShowDeleteForm = (id) =>{
    setSelectedEmployeeId(id);
    setShowDeleteForm(true);
  }
  const handleOrder = (id) =>{
    localStorage.setItem('user_id', id);
  }
  const handleInfoForm = (id) =>{
    setSelectedEmployeeId1(id);
    setShowInfoForm(true);
  }
  const showEditForm = () => {
    setShowEditInfo(true);
  }
  const showLogOutForm = () =>{
    setShowLogOut(true);
  }
  useEffect(() => {
    getAllUser(localStorage.getItem('token'))
      .then(res => {
        if (res && Array.isArray(res)) {
          setData(res);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const handleSearchClick = async () => {
    const phone = document.getElementById("phone-input").value;
    const token = localStorage.getItem('token');
    if (phone === "") {
      const res = await getAllUser(token);
      setData(res);
    }
    else{
      const res = await getUserByPhone(token, phone);
      setData(res);
    }
  };
  const totalPage = Math.ceil(data.length / perPage);
  const indexOfLastStaff = currentPage * perPage;
  const indexOfFirstStaff = indexOfLastStaff - perPage;
  const currentStaffs = data.slice(indexOfFirstStaff, indexOfLastStaff);
  const pageNumbers = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }
  localStorage.setItem('tag', 1);
  if (Number(localStorage.getItem("isAdmin"))===1)
  return (
    <div>
      <HeaderAdmin />
      <Container style={{ margin: "0px", maxWidth: "100%" }}>
        <Row style={{ width: "100%" }}>
          <Col md={2}>
            <Left />
          </Col>
          <Col md={10} className="edit-right">
            <div class="manage_search1">
              <div class="employee_list">Customer list</div>
              <div class="search1">
                <input
                  class="fill_telephone1"
                  type="tel"
                  id="phone-input"
                  placeholder="Enter a phone number"
                />
                <button class="btn btn-primary" onClick={handleSearchClick}>
                  Search
                </button>
              </div>
            </div>
            <Table striped bordered hover className="table-container">
              <thead>
                <tr>
                  <th>Full name</th>
                  <th>Email</th>
                  <th>Telephone number</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentStaffs.map((staff) => (
                  <tr key={staff.id}>
                    <td>{staff.name}</td>
                    <td>{staff.email}</td>
                    <td>{staff.phone}</td>
                    <td>
                      <a href="/adm_order">
                        <button
                          type="button"
                          class="btn btn-info dieu_chinh"
                          onClick={() => handleOrder(staff.id)}
                        >
                          Show orders
                        </button>
                      </a>
                      <button
                        type="button"
                        class="btn btn-success dieu_chinh"
                        onClick={() => handleInfoForm(staff.id)}
                      >
                        Show info
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger dieu_chinh"
                        onClick={() => handleShowDeleteForm(staff.id)}
                      >
                        Delete
                      </button>
                    </td>
                    {showDeleteForm && selectedEmployeeId === staff.id && (
                      <DeleteUser
                        showDeleteForm={showDeleteForm}
                        setShowDeleteForm={setShowDeleteForm}
                        Id_emp={staff.id}
                      />
                    )}
                    {showInfoForm && selectedEmployeeId1 === staff.id && (
                      <InfoUser
                        showInfoForm={showInfoForm}
                        setShowInfoForm={setShowInfoForm}
                        Id_emp={staff.id}
                      />
                    )}
                  </tr>
                ))}
              </tbody>
            </Table>
            <div class="paging">
              {pageNumbers.map((number) => {
                return (
                  <button
                    key={number}
                    onClick={() => setCurrentPage(number)}
                    className={currentPage === number ? "current" : ""}
                  >
                    {number}
                  </button>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  ) 
  else{
    return(
      <h1>you are not authorized to access this site.</h1>
    )
  };
}

export default Manage_user;
