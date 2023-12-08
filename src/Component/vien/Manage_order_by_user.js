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
import { getOrderByUser, setOrderStatus } from '../../api/adminApi'


function OrderByUser(props) {
    console.log("check props.user", props.user);
    const [order, setOrder] = useState([]);
    const [customerInfo, setCustomerInfo] = useState([]);
    const [detailOrder, setDetailOrder] = useState([]);
    const [loading, setLoading] = useState(false);

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

    useEffect(async () => {
        const token = localStorage.getItem('token');
        const userId = 7
        const res = await getOrderByUser(token, userId, null)
        console.log("this res", res);
        if (res.data !== undefined) {
            setOrder(res.data);
        }
        else
            setOrder([]);
    }, []);

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
                                    <Nav.Link href="/adm_man_order" eventKey="order">Xác nhận</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/adm_man_deliver" eventKey="deliver">Giao hàng</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/adm_man_delivered" eventKey="delivered">Đã giao thành công</Nav.Link>
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
                            {order.map((staff, index) => (
                                <Row style={{ backgroundColor: "lightgrey", marginBottom: "60px", height: "350px", borderRadius: "20px" }}>
                                    <Col md={6}>
                                        <div key={index} style={{ padding: "20px 5px" }}>
                                            {customerInfo[index] && (
                                                <div>
                                                    <span className="fontWeight_fontStyle" > Tên khách hàng: </span>
                                                    {customerInfo[index].name} <br />
                                                    <span className="fontWeight_fontStyle"> Số điện thoại: </span>
                                                    {customerInfo[index].phone} <br />
                                                    <span className="fontWeight_fontStyle"> Email: </span>
                                                    {customerInfo[index].email} <br />
                                                    <span className="fontWeight_fontStyle">  Địa chỉ: </span>
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
                                                                <td>{detail.price ? detail.price.toLocaleString() : ''}</td>
                                                                <td>{detail.count}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                )}
                                            </Table>

                                            <div style={{ position: "absolute", right: "16px" }}>
                                                {detailOrder[index] && <p style={{ fontWeight: "bold", fontSize: "20px" }}>Tổng tiền: </p>}
                                                <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                                                    <Button
                                                        variant="success"
                                                        href="/adm_man_deliver"
                                                        onClick={() => handleConfirm(staff.id)}
                                                        disabled={loading}>
                                                        Xác nhận
                                                    </Button>
                                                    <Button variant="danger" >Hủy bỏ</Button>
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

export default OrderByUser;
