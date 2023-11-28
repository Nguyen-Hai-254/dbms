import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import myAvatar from "../../img/image1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import AddProductForm from './addProductForm'
import { getProductByCategory, getAllProduct } from "../../api/userApi";
import './showProduct.css'
import ViewProduct from "./viewProduct/viewProduct";
import HeaderAdmin from '../vien/HeaderAdmin';
import Left from '../vien/Left';
function ShowProduct() {
  const [links, setLinks] = useState([
    { title: "Phone", url: "./adm_man_pro/phone" },
    { title: "Laptop", url: "./adm_man_pro/laptop" },
    { title: "Watch", url: "./adm_man_pro/watch" },
    { title: "Tablet", url: "./adm_man_pro/tablet" }
  ]);

  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const filteredLinks = links.filter(link =>
      link.title.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredLinks.length > 0) {
      const firstLink = filteredLinks[0];
      window.location.href = firstLink.url;
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => {
    setShowForm(true);
  }

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelect = (eventKey) => {
    setSelectedProduct(eventKey);
  };
  const [state, setState] = useState(false);
  const [data, setData] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  let setEditForm = () => {
    setShowEditForm(true);
  }; 
  useEffect(()=>{
    (async () =>{
      let allProduct = await getAllProduct();
      setData(allProduct);
    })();
  }, [state]);
  let product = data.map((element) =>
    <ViewProduct price={element.price} image={element.image} sale_percent={element.sale_percent} name={element.name} setEditForm={setEditForm}/>
  );
  let handleSelectCate = async (cate) => {
    let allProduct = await getProductByCategory(cate);
    setData(allProduct.data);
  }

  if (Number(localStorage.getItem("isAdmin"))===1)
  return (
    <div style={{ padding: "0px" }}>
      <HeaderAdmin/>

      <Container style={{ margin: "0px", maxWidth: "100%" }}>
        <Row style={{ width: "100%" }}>
          <Col md={2}>
           <Left/>
          </Col>
          <Col md={6} className="nav">
            <div class="manage_search">
              <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle>
                  {selectedProduct || "Tất cả sản phẩm"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={()=> setState(!state)} eventKey="All Products">
                    Tất cả
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSelectCate("CellPhone")} eventKey="Phone">
                    Phone
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSelectCate("Tablet")} eventKey="Tablet">
                    Tablet
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSelectCate("Watch")} eventKey="Watch">
                    Watch
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSelectCate("Laptop")} eventKey="Laptop">
                    Laptop
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div class="search">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="fill_name"
                  placeholder="Nhập tên sản phẩm"
                />
                <button class="btn btn-primary" onClick={handleSearch}>
                  Tìm kiếm
                </button>
                <button class="btn btn-primary" onClick={handleShowForm}>
                  Thêm sản phẩm
                </button>
                {showForm && <AddProductForm setShowForm={setShowForm} />}
                {/* {showEditForm && <EditProductForm setShowForm={setShowForm} />} */}
              </div>
            </div>
            <div className="container1">
              {product}
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

export default ShowProduct;
