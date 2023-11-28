import React from 'react';
import { useState } from 'react';
import {useNavigate,Link} from 'react-router-dom'
import {message} from 'antd'

import '../../css/Login.css';
import {signIn} from '../../api/userApi'

function Login() {

  let navigate=useNavigate()
  const [data,setData]=useState({
    username : "",
    password : "",
  })


  const handle=(e)=>{
    const newData={...data}
    newData[e.target.id]=e.target.value
    setData(newData)
  }

  function handleSubmit(e){
    e.preventDefault()
    const FormData={
      password:data.password,
    }

    if (data.username.search('@')>=0)  FormData.email=data.username
    else                            FormData.phone=data.username
    signIn(FormData).then((res)=>{
      message.success("Logged in successfully")
      localStorage.setItem("name",res.user.name);
      localStorage.setItem("token",res.token);
      localStorage.setItem("isAdmin",res.user.isAdmin);
      if (Number(res.user.isAdmin)===0) navigate('/')
      else                              navigate('/adm_man_user')
      
    }).catch((error)=>{
      message.error("Login failed")
      console.log(error)
  })
  }

  

  return (   
        <div className="Login  d-flex justify-content-center align-items-center ">
          <div className="container d-flex justify-content-center align-items-center ">
              <div className="content col-4 p-5 rounded rounded-3">
                  <h1  className="text-center mb-5">Log in</h1>  
                  <form onSubmit={(e)=>handleSubmit(e)} >
                    <input type="text" onChange={(e)=>handle(e)} value={data.username} id='username' className="form-control mb-4" placeholder="Enter email or phone" />
                    <input type="password" onChange={(e)=>handle(e)}  value={data.password} id='password' className="form-control mb-4" placeholder="Enter password" />
                    <button  className="btn  rounded-pill w-100 my-4">Login</button>
                  </form>
                  <div className="d-inline-block float-end mb-2"><Link className='link' to="/forgotpass"> forgot password</Link></div>                
                  <div className="d-inline-block text-start"><Link className='link' to="/signup"> sign up</Link></div> 
                  <div className='mt-4'><Link className='link' to="/"><i class="fa-solid fa-arrow-left me-2"></i> back to home page</Link></div>                
              </div>
          </div>
        </div>  
  );
}

export default Login;
