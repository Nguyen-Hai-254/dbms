import { useState ,useEffect} from 'react';
import React from 'react';
import {message} from 'antd'

import {editProfile,getProfile} from '../../api/userApi'
import '../../css/EditInfor.css'
import LayoutUser from './LayoutUser';



function EditInfor() {

    const [data,setData]=useState({
        phone    : "",
        email    : "",
        password : "",
        address  : "",
    })

    useEffect(()=>{
        getProfile(localStorage.getItem("token")).then((res)=>{
            
            setData(res)
          }).catch((error)=>{
            console.log(error)
        })
    },[])
    
    
    const handle=(e)=>{
      const newData={...data}
      newData[e.target.id]=e.target.value
      setData(newData)
    }
    
    function handleSubmit(e){
      e.preventDefault()
      const FormData={...data}
      editProfile(localStorage.getItem("token"),FormData).then((res)=>{
        message.success("Update user information successfully")
      }).catch((error)=>{
        console.log(error)
    })
    }
    return (
        <React.Fragment>
            <div className="EditInfor">
                <LayoutUser>
                    <h3 className='pb-3  pt-3 border-bottom pb-4'>Edit information</h3>
                    <form onSubmit={e=>handleSubmit(e)}>                        
                        <table className='mt-4'>
                            <tbody>
                                <tr className='mt-3'>
                                    <td className='text-end text-secondary'>Name</td>
                                    <td className='ps-4'>
                                        <input type="text" onChange={e=>handle(e)} value={data.name} id='name' className="form-control"  />
                                    </td>
                                </tr>
                                <tr className='pb-3'>
                                    <td className='text-end text-secondary'>Phone</td>
                                    <td className='ps-4'>
                                        <input type="text"onChange={e=>handle(e)} value={data.phone} id='phone' className="form-control"  />
                                    </td>
                                </tr >
                                <tr className='pb-3 '>
                                    <td className='text-end text-secondary'>Email</td>
                                    <td className='ps-4'>
                                        <input type="text" onChange={e=>handle(e)} value={data.email} id='email' className="form-control"/>
                                    </td>
                                </tr>
                                <tr className='pb-3'>
                                    <td className='text-end text-secondary'>Address</td>
                                    <td className='ps-4'>
                                        <input type="text" onChange={e=>handle(e)} value={data.address||''} id='address' className="form-control"  />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="btn btn-primary rounded-pill w-75 my-4">Update</button>
                    </form>
                </LayoutUser>                      
            </div>               
        </React.Fragment>
     
    );
}

export default EditInfor;