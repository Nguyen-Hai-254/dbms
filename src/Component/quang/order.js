import {
  Table,
  Container,
  Row,
  Col
} from "react-bootstrap";
import { useState, useEffect } from "react";
import "./showProduct.css";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import HeaderAdmin from '../vien/HeaderAdmin';
import Left from '../vien/Left';
import {getOrderByStatus} from '../../api/adminApi'
import {getUser} from '../../api/adminApi'
import {viewDetailOrder} from '../../api/adminApi'
import {getProductById} from '../../api/userApi'
import {setOrderStatus} from '../../api/adminApi'
import {deleteOrder} from '../../api/adminApi'
function ShowOrder(props) {
  const [order, setOrder] = useState([]);
  const [customerInfo, setCustomerInfo] = useState([]);
  const [detailOrder, setDetailOrder] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleConfirm = async (id) => {
    try {
      setLoading(true);
      const orderId = id; // Thay YOUR_ORDER_ID bằng ID của đơn hàng bạn muốn chuyển trạng thái
      const status = 'Delivery';
      const token = localStorage.getItem('token'); // Thay YOUR_TOKEN bằng token của bạn

      // Gọi API setOrderStatus
      await setOrderStatus(orderId, status, token);

      // Xử lý logic sau khi gọi API thành công (nếu cần)

    } catch (error) {
      // Xử lý logic khi gọi API gặp lỗi (nếu cần)

    } finally {
      setLoading(false);
    }
  };
  const deleteOrderr = async (id) => {
    try {
      const orderId = id; // Thay YOUR_ORDER_ID bằng ID của đơn hàng bạn muốn chuyển trạng thái
      const token = localStorage.getItem('token'); // Thay YOUR_TOKEN bằng token của bạn

      // Gọi API setOrderStatus
      await deleteOrder(token,orderId);
      const res = await getOrderByStatus("Confirm", localStorage.getItem('token'));
      console.log(res);
      setOrder(res);
      // Xử lý logic sau khi gọi API thành công (nếu cần)

    } catch (error) {
      // Xử lý logic khi gọi API gặp lỗi (nếu cần)

    } finally {
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getOrderByStatus("Confirm", localStorage.getItem('token'));
        const data=res.data;
        console.log(data);
        if (data && Array.isArray(data)) {
          console.log("is array")
          setOrder(data);
          console.log(order)

         
          const customerInfoPromises = data.map(async (order) => {
            console.log("this is check")
            console.log(order)
            const userInfo = await getUser(order.user_id, localStorage.getItem('token'));
            const userData=userInfo.data;
            return {
              id: order.user_id,
              name: userData.name,
              phone: userData.phone,
              email: userData.email,
              address: userData.address
            };
          });
  
          const detailOrderPromises = data.map(async (order) => {
            const detail = await viewDetailOrder(localStorage.getItem('token'), order.id);
            return detail.data.order_detail;
          });
  
          const customerInfo = await Promise.all(customerInfoPromises);
       
          setCustomerInfo(customerInfo);
          console.log(customerInfo);
         
          const detailOrder = await Promise.all(detailOrderPromises);
          
          setDetailOrder(detailOrder);
          console.log(detailOrder)
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    fetchData();
  }, []);
  
  // useEffect(() => {
  //   const updateProductInfo = async () => {
  //     try {
  //       const updatedDetailOrder = await Promise.all(
  //         detailOrder.map(async (order) => {
  //           for (let item of order) {
  //             const productInfo = await getProductById(item.product_id);
  //             if (productInfo) {
  //               const updatedItem = {
  //                 ...item,
  //                 product_name: productInfo.data.name,
  //                 product_price: productInfo.data.price* (100-productInfo.data.sale_percent)/100
  //               };
  //               const index = order.findIndex((detail) => detail.product_id === item.product_id);
  //               if (index !== -1) {
  //                 order[index] = updatedItem;
  //               }
  //             }
  //           }
  //           return order;
  //         })
  //       );
  
  //       setDetailOrder(updatedDetailOrder);
  //     } catch (error) {
  //       console.error('Error updating product info:', error);
  //     }
  //   };
  
  //   if (detailOrder.length > 0) {
  //     updateProductInfo();
  //   }
  // }, [detailOrder]);
  const calculateTotalPrice = (detailOrder)=>{
    console.log(detailOrder)
   return detailOrder.reduce((total, order) => total + order.price, 0).toLocaleString();
  }
  return (
    <div style={{ padding: "0px" }}>
      <HeaderAdmin/>
      <Container style={{ margin: "0px", maxWidth: "100%" }}>
        <Row style={{ width: "100%" }}>
          <Col md={2}>
          <Left/>
          </Col>
          <Col md={10}>
            <div class="manage_search">
              <Nav variant="pills" defaultActiveKey="order">
                <Nav.Item>
                  <Nav.Link href="/adm_man_order" eventKey="order">Xác nhận</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/adm_man_deliver" eventKey="deliver">Giao hàng</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/adm_man_delivered" eventKey="delivered">Đã giao thành công</Nav.Link>
                </Nav.Item>
              </Nav>
              <div class="search">
                <input
                  type="text"
                  class="fill_name"
                  placeholder="Nhập mã đơn hàng"
                />
                <button class="btn btn-primary">Tìm kiếm</button>
              </div>
            </div>

            <Container>
            {order.map((staff,index) => (
              <Row style={{backgroundColor: "lightgrey", marginBottom: "60px", height: "350px", borderRadius: "20px"}}>
                <Col md={6}>
                  <div key={index} style={{padding: "20px 5px"}}>
                    {customerInfo[index] && (
                      <div>
                        <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
                          Tên khách hàng:
                        </span>{" "}
                        {customerInfo[index].name} <br />
                        <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
                          Số điện thoại:
                        </span>{" "}
                        {customerInfo[index].phone} <br />
                        <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
                          Email:
                        </span>{" "}
                        {customerInfo[index].email} <br />
                        <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
                          Địa chỉ:
                        </span>{" "}
                        {customerInfo[index].address} <br />
                      </div>
                    )}
                  </div>         
                </Col>
                <Col style={{ position: "relative" }}>
                <div key={index}>
                  <Table striped bordered hover size="sm" style={{ textAlign: "center", marginTop: "16px", border: "1px" }}>
                    <thead>
                      <tr>
                        <th>Tên sản phẩm</th>
                        <th>Giá tiền</th>
                        <th>Số lượng</th>
                      </tr>
                    </thead>
                    {console.log(detailOrder[index])}
                    {detailOrder[index] && (
                    <tbody>
                      {detailOrder[index].map((detail) => (
                        <tr>
                          <td>{detail.name}</td>
                          <td>{detail.price? detail.price.toLocaleString():''}</td>
                          <td>{detail.count}</td>
                        </tr>
                      ))}
                    </tbody>
                    )}
                  </Table>
                  {/* {staff.sum_price.toLocaleString()} */}
                  <div style={{ position: "absolute", right: "16px" }}>
                   {detailOrder[index] && <p style={{fontWeight: "bold", fontSize: "20px"}}>Tổng tiền:{calculateTotalPrice(detailOrder[index])} </p>}
                      <div style={{display: "flex", flexDirection: "row", gap: "20px"}}>
                      <Button variant="success" href="/adm_man_deliver" onClick={() => handleConfirm(staff.id)} disabled={loading}>Xác nhận</Button>
                      <Button variant="danger" onClick={() => deleteOrderr(staff.id)}>Hủy bỏ</Button>
                      </div>
                  </div>
                </div>
                </Col>
              </Row>
              ))}
            </Container>



          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ShowOrder;
