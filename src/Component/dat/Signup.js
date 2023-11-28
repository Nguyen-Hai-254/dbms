import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {message} from 'antd'

import '../../css/Signup.css';
import {signUp} from '../../api/userApi'

function Signup() {
  let navigate=useNavigate()
  const [data,setData]=useState({
    name              : "",
    phone             : "",
    email             : "",
    password          : "",
    confirmPassword   : ""
  })

function handle(e){
  const newData={...data}
  newData[e.target.id]=e.target.value
  setData(newData)
}

function handleSubmit(e){
  
  e.preventDefault()

  signUp(data).then((res)=>{
    message.success("Sign Up successfully")
    navigate('/login')
  }).catch((error)=>{
    console.log(error)
})

}



  return (
    <div className="Signup  d-flex align-items-center">
        <div className="container d-flex justify-content-center align-items-center ">
            <div className=" content form-sign-up col-4  border p-5 rounded rounded-3 ">
                <h1 className="text-center mb-5">Sign up </h1>
                <form onSubmit={e=>handleSubmit(e)} >
                  <input type="text" onChange={e=>handle(e)} value={data.name} id='name' className="form-control mb-4 " placeholder="Enter name" />
                  <input type="text" onChange={e=>handle(e)} value={data.phone} id='phone' className="form-control mb-4 " placeholder="Enter phone" />
                  <input type="text" onChange={e=>handle(e)} value={data.email}  id='email' className="form-control mb-4 " placeholder="Enter email" />
                  <input type="password" onChange={e=>handle(e)} value={data.password} id='password' className="form-control mb-4 " placeholder="Enter password" />
                  <input type="password" onChange={e=>handle(e)} value={data.confirmPassword} id='confirmPassword'className="form-control mb-4 " placeholder="Enter password again" />
                  <button className="btn rounded-pill w-100 my-4">Sign up</button>
                </form>
                <div className="text-center">You have account?<Link className='link' to="/login"> Log in</Link></div>

            </div>
        </div>
    </div>  
  );
}

export default Signup;
