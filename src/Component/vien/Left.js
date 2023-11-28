import '../../css/vien/Manage_employee.css'
import myAvatar from '../../img/image1.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faBagShopping} from '@fortawesome/free-solid-svg-icons'
import {faChartLine} from '@fortawesome/free-solid-svg-icons'
import {faUsers} from '@fortawesome/free-solid-svg-icons'
function Left() {

  return (
    <div>
        <div style={{backgroundColor: 'rgba(243, 244, 246, 1)',height:'100%', position:'relative'}}>
            <div class="image_info_arrow">
            <div class="image_info">
                <div class="image">
                    <img src={myAvatar} class="myAvatar" alt="mô tả hình ảnh" />
                </div>
                <div class="info">
                    Hello Admin
                </div>
            </div>
            <div>
                <FontAwesomeIcon icon={faArrowLeft} class="icon"></FontAwesomeIcon>
            </div>
            </div>     
            <div class="manage-item">

            <a href='/adm_man_user'>
                <div className={`edit-item ${localStorage.getItem('tag') === '1' ? 'manage-employee' : ''}` + " rounded"} onClick={()=>{localStorage.setItem("tag", "1");}}>
                <FontAwesomeIcon icon={faUser} class="icon-1"></FontAwesomeIcon>
                Customer Manager
                </div>
            </a>
            <a href='/adm_man_product'>
                <div className={`edit-item ${localStorage.getItem('tag') === '2' ? 'manage-employee' : ''}` + " rounded"} onClick={()=>{localStorage.setItem("tag", "2");}}>
                <FontAwesomeIcon icon={faBars} class="icon-1"></FontAwesomeIcon>
                   Product Manager
                </div>
            </a>
            <a href='/adm_man_order'>
                <div className={`edit-item ${localStorage.getItem('tag') === '3' ? 'manage-employee' : ''}` + " rounded"} onClick={()=>{localStorage.setItem("tag", "3");}}>
                <FontAwesomeIcon icon={faBagShopping} class="icon-1"></FontAwesomeIcon>
                Order Manager
                </div>
            </a>
            <a href='/adm_man_emp'>
                <div className={`edit-item ${localStorage.getItem('tag') === '5' ? 'manage-employee' : ''}` + " rounded" } onClick={()=>{localStorage.setItem("tag", "5");}}>
                <FontAwesomeIcon icon={faUsers} class="icon-1"></FontAwesomeIcon>
                Employee Manager
                </div>
            </a>
            </div>
        </div>
    </div>
  );
}

export default Left;
