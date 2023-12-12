import {
    Table,
    Container,
    Row,
    Col
} from "react-bootstrap";
import { useState, useEffect } from "react";
import "./order_by_user.css";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import HeaderAdmin from './HeaderAdmin';
import Left from './Left';
import { getOrderByUser, getUser, setOrderStatus } from '../../api/adminApi'
import { useLocation, useParams } from 'react-router-dom'


function OrderByUser(props) {
    const { userId } = useParams();
    let [orderList, setOrderList] = useState([]);
    let [customer, setCustomer] = useState();
    const [loading, setLoading] = useState(false);

    const calculateTotalPrice = (detailOrder) => {
        return detailOrder.toLocaleString();
    }

    const handleConfirm = async (id) => {
        try {
            setLoading(true);
            const orderId = id;
            const status = 'Delivery';
            const token = localStorage.getItem('token');

            await setOrderStatus(orderId, status, token);
        } catch (error) {

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        try {
            const fetch = async () => {
                const token = localStorage.getItem('token');
                const res = await getOrderByUser(token, userId)
                // console.log('this res', res.data)
                if (res.data !== undefined) {
                    setOrderList(res.data);
                    orderList = res.data;
                    // console.log('order', orderList)
                }
                else {
                    setOrderList([]);
                }

                const user = await getUser(userId, token);
                if (res.data !== undefined) {
                    setCustomer(user.data);
                    customer = user.data
                }
            }

            fetch();
        } catch (e) {
            console.log(e)
        }
    }, []);


    const handleClickConfirm = async (status) => {
        try {
            const token = localStorage.getItem('token');
            const res = await getOrderByUser(token, userId, status)
            if (res.data !== undefined) {
                setOrderList(res.data);
                orderList = res.data;
            }
            else {
                setOrderList([]);
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div style={{ padding: "0px" }}>
            <HeaderAdmin />
            <Container style={{ margin: "0px", maxWidth: "100%" }}>
                <Row style={{ width: "100%" }}>
                    <Col md={2}>
                        <Left />
                    </Col>
                    <Col md={10}>
                        <div className="manage_search">
                            <Nav variant="pills" defaultActiveKey="order">
                                <Nav.Item>
                                    <Nav.Link onClick={() => handleClickConfirm('Confirm')} eventKey="order">Xác nhận</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link onClick={() => handleClickConfirm('Delivery')} eventKey="deliver">Giao hàng</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link onClick={() => handleClickConfirm('Sucessfully')} eventKey="delivered">Đã giao thành công</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <div className="search">
                                <input
                                    type="text"
                                    className="fill_name"
                                    placeholder="Nhập mã đơn hàng"
                                />
                                <button className="btn btn-primary">Tìm kiếm</button>
                            </div>
                        </div>

                        <Container>
                            {orderList.length !== 0 ? orderList.map((order, index) => (
                                <Row style={{ backgroundColor: "lightgrey", marginBottom: "60px", height: "350px", borderRadius: "20px" }}>
                                    <Col md={6}>
                                        <div key={index} style={{ padding: "20px 5px" }}>
                                            <div>
                                                <span className="fontWeight_fontStyle" > Tên khách hàng: </span>
                                                {customer && customer.name ? customer.name : ''} <br />
                                                <span className="fontWeight_fontStyle"> Số điện thoại: </span>
                                                {customer && customer.phone ? customer.phone : ''} <br />
                                                <span className="fontWeight_fontStyle"> Email: </span>
                                                {customer && customer.email ? customer.email : ''} <br />
                                                <span className="fontWeight_fontStyle">  Địa chỉ: </span>
                                                {customer && customer.address ? customer.address : ''} <br />
                                            </div>
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
                                                {order.order_detail.map((orderDetail, orderIndex) => (
                                                    <tbody>
                                                        <tr key={orderIndex}>
                                                            <td>{orderDetail.name}</td>
                                                            <td>{orderDetail.price ? orderDetail.price.toLocaleString() : ''}</td>
                                                            <td>{orderDetail.count}</td>
                                                        </tr>
                                                    </tbody>
                                                ))}
                                            </Table>

                                            <div style={{ position: "absolute", right: "16px" }}>
                                                {order.total_payment && <p style={{ fontWeight: "bold", fontSize: "20px" }}>Tổng tiền:  {calculateTotalPrice(order.total_payment)} </p>}
                                                <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                                                    <Button
                                                        variant="success"
                                                        href="/adm_man_deliver"
                                                        onClick={() => handleConfirm(order.id)}
                                                        disabled={loading}>
                                                        Xác nhận
                                                    </Button>
                                                    <Button variant="danger" >Hủy bỏ</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            )) :
                                <h1>The customer hasn't orders with this status</h1>
                            }
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default OrderByUser;
