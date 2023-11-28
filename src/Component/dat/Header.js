import {useNavigate} from 'react-router-dom'
import logo from '../../img/logo.jpg'
import '../../css/Header.css';
import { Fragment, useState } from 'react';
import {searchItem} from '../../api/userApi'
function Header(props) {
    let cartItems = JSON.parse(localStorage.getItem('cart'));
    if (!cartItems) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
    localStorage.setItem("numberItem",
    cartItems.reduce(function(total, obj) {
        return total + obj.quantity;
    }, 0));
    
    let navigate=useNavigate()

    const handleSignup=()=>{
        navigate('/signup')
    }

    const handleLogin=()=>{
        navigate('/login')
    }

    const handeLogout=()=>{
        localStorage.removeItem("name");
        localStorage.removeItem("token");
        localStorage.removeItem("isAdmin");
        localStorage.removeItem("user_id");
        localStorage.removeItem("userId");
        localStorage.removeItem("tag");
        navigate('/login')
    }
    const [searchContent, setSearchContent] = useState('');
    function handleInputChange(event) {
        setSearchContent(event.target.value);
    }
    function search(){
        searchItem(searchContent).then((rs)=>{
            props.handleItem(rs.data);
        })
    }
  return (
    <div className="bg-info header d-flex justify-content-center text-white ">
        <div className="container container-header">
            <div className="row d-flex" >
                <div className="col-4 d-flex justify-content-start">
                <div className="d-inline-block pe-lg-5 pe-sm-2">Get the app</div>
                <div className="d-inline-block pe-lg-5 pe-sm-2">Connect <i className="ms-1 fa-brands fa-facebook"></i>  <i className="ms-1 fa-brands fa-square-instagram"></i></div>
                </div>
                <div className="col-8 d-flex justify-content-end">
                    <div className="d-inline-block ps-lg-5 ps-sm-2"><i className="me-1 fa-sharp fa-solid fa-bell"></i> Notification</div>
                    <div className="d-inline-block ps-lg-5 ps-sm-2"><i className="me-1 fa-solid fa-question"></i> Support</div>
                    <div className="d-inline-block ps-lg-5 ps-sm-2"><i className="me-1 fa-solid fa-globe"></i> Vietnamese</div>
                    {
                        localStorage.getItem("name")?
                                <Fragment>
                                    <div className="d-inline-block ps-lg-5 ps-sm-2 user"><i className="me-1 fa-solid fa-user"></i> {localStorage.getItem("name")}
                                    <ul className=''>
                                        <li onClick={handeLogout}>Log Out</li>
                                        <li onClick={()=>{navigate('/inforuser')}}>My Account</li>
                                        {Number(localStorage.getItem("isAdmin"))===1?<li onClick={()=>{navigate('/adm_man_user')}}>Management</li>:<></>}
                                    </ul>
                                    </div>
                                </Fragment>:
                                <Fragment>
                                    <div role="button" className="d-inline-block ps-lg-5 ps-sm-2" onClick={handleSignup}>Signup</div>
                                    <div role="button" className="d-inline-block ps-lg-5 ps-sm-2" onClick={handleLogin}>Login</div>
                                </Fragment>
                    }
                </div>

                
                
            </div>
            <div className="row mt-3 d-flex justify-content-center">
                <div onClick={()=>{navigate('/')}} className="col-4 fs-3 header-name-shop text-end">
                    <img src={logo} alt="" width="45px" />
                    Easyelectronics
                </div>
                <div className="col-6 ">
                    <div className="input-group ">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="What are you looking for..."
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            value={searchContent}
                            onChange={handleInputChange}
                        />
                        <span className="input-group-text" id="basic-addon2" style={{cursor: "pointer"}} onClick={search}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        </span>
                        </div>                   
                </div>
                <div className="col-1">
                    <i className="fs-3 mt-2 fa-sharp fa-solid fa-cart-shopping" onClick={()=>{navigate('/cart-pro')}} style={{position: "relative"}}>
                    <span  className={"rounded"}style={{position: "absolute", right: "0px", bottom:"0", fontSize: "10px", backgroundColor: "red", padding: "3px 6px"}}>{localStorage.getItem('numberItem')}</span>
                    </i>
                
                </div>
            </div>
            <div className="row  mt-3 justify-content-center category">
                <div className="col-1 d-hover-btn" onClick={()=>{navigate('/cellphones')}}>Phone</div>
                <div className="col-1 d-hover-btn" onClick={()=>{navigate('/laptop')}}>Laptop</div>
                <div className="col-1 d-hover-btn" onClick={()=>{navigate('/ipad')}}>Tablet</div>
                <div className="col-1 d-hover-btn">Accessory</div>
                <div className="col-1 d-hover-btn" onClick={()=>{navigate('/watch')}}>SmartWatch</div>
                <div className="col-1 d-hover-btn">Clock</div>
                <div className="col-2 d-hover-btn">Sims,Scratch Cards</div>
            </div>
        </div>
    </div>  
  );
}

export default Header;