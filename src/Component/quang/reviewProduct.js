import {
  Table,
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { useState } from "react";
import "../../css/quang/showProduct.css";
import myAvatar from "../../img/image1.png";
import productImage15 from "../../img/applewatch.png";
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
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ProgressBar from "react-bootstrap/ProgressBar";

function ReviewProduct(props) {
  return (
    <div style={{ padding: "0px" }}>
      <div
        style={{
          backgroundColor: "#eb5b69",
          color: "#fff",
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
          alignItems: "center",
          padding: "5px 20px",
        }}
      >
        <h4>Siêu thị điện thoại</h4>

        <div class="image_notify">
          <div class="notify">
            <FontAwesomeIcon icon={faBell} class="icon-2"></FontAwesomeIcon>
          </div>
          <div class="setting">
            <FontAwesomeIcon icon={faGear} class="icon-2"></FontAwesomeIcon>
          </div>
        </div>
      </div>

      <Container style={{ margin: "0px", maxWidth: "100%" }}>
        <Row style={{ width: "100%" }}>
          <Col md={2}>
            <div
              style={{
                backgroundColor: "rgba(243, 244, 246, 1)",
                height: "100%",
                position: "relative",
              }}
            >
              <div class="image_info_arrow">
                <div class="image_info">
                  <div class="image">
                    <img src={myAvatar} class="myAvatar" alt="mô tả hình ảnh" />
                  </div>
                  <div class="info">Hello Admin</div>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    class="icon"
                  ></FontAwesomeIcon>
                </div>
              </div>
              <div class="manage-item">
                <div class="edit-item">
                  <FontAwesomeIcon
                    icon={faHome}
                    class="icon-1"
                  ></FontAwesomeIcon>
                  Trang chủ
                </div>
                <div class="edit-item">
                  <FontAwesomeIcon
                    icon={faUser}
                    class="icon-1"
                  ></FontAwesomeIcon>
                  Quản lý thành viên
                </div>
                <a href='./adm_man_pro'>
                <div class="edit-item manage-product">
                  <FontAwesomeIcon
                    icon={faBars}
                    class="icon-1"
                  ></FontAwesomeIcon>
                  Sản phẩm
                </div>
                </a>
                <a href='./adm_ord'>
                <div class="edit-item">
                  <FontAwesomeIcon
                    icon={faBagShopping}
                    class="icon-1"
                  ></FontAwesomeIcon>
                  Đơn hàng
                </div>
                </a>
                <div class="edit-item">
                  <FontAwesomeIcon
                    icon={faChartLine}
                    class="icon-1"
                  ></FontAwesomeIcon>
                  Thống kê
                </div>
                <div class="edit-item">
                  <FontAwesomeIcon
                    icon={faUsers}
                    class="icon-1"
                  ></FontAwesomeIcon>
                  Quản lý nhân viên
                </div>
              </div>
            </div>
          </Col>
          <Col md={10}>
            <div class="manage_search">
              <div class="title">Đánh giá sản phẩm</div>
              <div class="search">
                <input
                  type="text"
                  class="fill_name"
                  placeholder="Nhập tên sản phẩm"
                />
                <button class="btn btn-primary">Tìm kiếm</button>
              </div>
            </div>

            <Container style={{ margin: "0px", maxWidth: "100%" }}>
              <Row>
                <Col xs={4} style={{ textAlign: "center" }}>
                  <img src={productImage15} style={{ width: "80%" }} />
                </Col>

                <Col xs={8}>
                  <h1>Apple Watch SE 2022 40mm</h1>
                  <p
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      fontSize: "25px",
                    }}
                  >
                    7.490.000đ{" "}
                    <span
                      style={{
                        fontSize: "20px",
                        textDecorationLine: "line-through",
                        color: "gray",
                      }}
                    >
                      7.990.000đ
                    </span>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum non obcaecati error cumque dolor cum. Quam, impedit,
                    consequatur maiores dolore earum, eum odio iste tenetur
                    dolorem assumenda mollitia quisquam eveniet?
                  </p>
                </Col>
              </Row>
              <br />

              <Row>
                <Col style={{ backgroundColor: "lightgrey" }}>
                  <h4 style={{ fontWeight: "bold" }}>
                    Đánh giá & nhận xét Samsung Galaxy A04 | Chính hãng VN/A
                  </h4>
                </Col>
              </Row>

              <Row>
                <Col
                  style={{ textAlign: "center", border: "1px solid lightgray" }}
                >
                  <h1 style={{ fontWeight: "bold" }}>5.0/5</h1>
                  <div>
                    <FontAwesomeIcon
                      icon={faStar}
                      size="2xl"
                      style={{ color: "#eeff00" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="2xl"
                      style={{ color: "#eeff00" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="2xl"
                      style={{ color: "#eeff00" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="2xl"
                      style={{ color: "#eeff00" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="2xl"
                      style={{ color: "#eeff00" }}
                    />
                  </div>
                  <br />
                  <p style={{ fontSize: "25px" }}>82 đánh giá và nhận xét.</p>
                </Col>

                <Col style={{ border: "1px solid lightgray" }}>
                  <Container style={{ margin: "0px" }}>
                    <Row>
                      <Col md={1}>
                        5{" "}
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#eeff00" }}
                          size="lg"
                        />
                      </Col>

                      <Col>
                        <ProgressBar now={100} style={{ margin: "3px" }} />
                      </Col>
                    </Row>

                    <Row>
                      <Col md={1}>
                        4{" "}
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#eeff00" }}
                          size="lg"
                        />
                      </Col>

                      <Col>
                        <ProgressBar now={0} style={{ margin: "3px" }} />
                      </Col>
                    </Row>

                    <Row>
                      <Col md={1}>
                        3{" "}
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#eeff00" }}
                          size="lg"
                        />
                      </Col>

                      <Col>
                        <ProgressBar now={0} style={{ margin: "3px" }} />
                      </Col>
                    </Row>

                    <Row>
                      <Col md={1}>
                        2{" "}
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#eeff00" }}
                          size="lg"
                        />
                      </Col>

                      <Col>
                        <ProgressBar now={0} style={{ margin: "3px" }} />
                      </Col>
                    </Row>

                    <Row>
                      <Col md={1}>
                        1{" "}
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#eeff00" }}
                          size="lg"
                        />
                      </Col>

                      <Col>
                        <ProgressBar now={0} style={{ margin: "3px" }} />
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>

              <Row>
                <Container style={{borderBottom: "1px solid lightgray"}}>
                  <Row>
                    <Col md={2}>
                      <img src={myAvatar} />
                      <span style={{ fontWeight: "bold" }}>Ervin Howell</span>
                    </Col>
                    <Col md={4}>
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#eeff00" }}
                        size="xl"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#eeff00" }}
                        size="xl"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#eeff00" }}
                        size="xl"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#eeff00" }}
                        size="xl"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#eeff00" }}
                        size="xl"
                      />
                    </Col>
                    <Col style={{ textAlign: "right" }}>
                      15:08:07 05/05/2023
                    </Col>
                  </Row>
                  <br />

                  <Row>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </Row>

                  <Row style={{textAlign: "right"}}>
                      <Col md={9}></Col>
                      <Col>
                        <Button variant="link">Phản hồi</Button>
                      </Col>
                      <Col>
                        <Button variant="link">Xóa</Button>
                      </Col>
                  </Row>
                </Container>

                <Container style={{borderBottom: "1px solid lightgray"}}>
                  <Row>
                    <Col md={2}>
                      <img src={myAvatar} />
                      <span style={{ fontWeight: "bold" }}>Ervin Howell</span>
                    </Col>
                    <Col md={4}>
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#eeff00" }}
                        size="xl"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#eeff00" }}
                        size="xl"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#eeff00" }}
                        size="xl"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#eeff00" }}
                        size="xl"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#eeff00" }}
                        size="xl"
                      />
                    </Col>
                    <Col style={{ textAlign: "right" }}>
                      15:08:07 05/05/2023
                    </Col>
                  </Row>
                  <br />

                  <Row>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </Row>

                  <Row style={{textAlign: "right"}}>
                      <Col md={9}></Col>
                      <Col>
                        <Button variant="link">Phản hồi</Button>
                      </Col>
                      <Col>
                        <Button variant="link">Xóa</Button>
                      </Col>
                  </Row>
                </Container>

                <Container style={{borderBottom: "1px solid lightgray"}}>
                  <Row>
                    <Col md={2}>
                      <img src={myAvatar} />
                      <span style={{ fontWeight: "bold" }}>Ervin Howell</span>
                    </Col>
                    <Col md={4}>
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#eeff00" }}
                        size="xl"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#eeff00" }}
                        size="xl"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#eeff00" }}
                        size="xl"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#eeff00" }}
                        size="xl"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#eeff00" }}
                        size="xl"
                      />
                    </Col>
                    <Col style={{ textAlign: "right" }}>
                      15:08:07 05/05/2023
                    </Col>
                  </Row>
                  <br />

                  <Row>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </Row>

                  <Row style={{textAlign: "right"}}>
                      <Col md={9}></Col>
                      <Col>
                        <Button variant="link">Phản hồi</Button>
                      </Col>
                      <Col>
                        <Button variant="link">Xóa</Button>
                      </Col>
                  </Row>
                </Container>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ReviewProduct;
