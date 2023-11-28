import { useState} from "react";
import '../../css/vien/Manage_employee.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit} from '@fortawesome/free-solid-svg-icons'
import {faSignOut} from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from 'react-router-dom'
import EditForm from './EditForm'
import LogOut from './LogOut'
function HeaderAdmin() {
  let navigate=useNavigate()
  const [showEditInfo, setShowEditInfo] =  useState(false);
  const [showLogOut, setShowLogOut] = useState(false);
  const showEditForm = async () => {
    await setShowEditInfo(true);
  }
  
  const showLogOutForm = async () => {
    await setShowLogOut(true);
  }
  return (
    <div style={{padding: '0px',minWidth: '100vw'}}>
        <div style={{ backgroundColor: '#eb5b69',color:'#fff',display:'flex',justifyContent:'space-between', textAlign:'center', alignItems:'center',padding:'5px 20px'}}>
          <h4 onClick={()=>{navigate('/')}} style={{cursor: "pointer"}}>Easy Electronic</h4>
          <div class="image_notify1">
            <div class="editinfo1">
            <FontAwesomeIcon icon={faEdit} class="icon-2" onClick={showEditForm}></FontAwesomeIcon>
            </div>
            {showEditInfo && <EditForm setShowEditInfo={setShowEditInfo} showEditInfo={showEditInfo}/>}
            <div class="logout">
            <FontAwesomeIcon icon={faSignOut} class="icon-2" onClick={showLogOutForm}></FontAwesomeIcon>
            </div>
            {showLogOut && <LogOut setShowLogOut={setShowLogOut} showLogOut={showLogOut}/>}
          </div>
        </div>
   
    </div>
  );
}

export default HeaderAdmin;
