import React, { useState } from 'react';
import '../../css/vien/ShowWarning.css'

import "react-datepicker/dist/react-datepicker.css";

function ShowWarning({setIsVisible,setShowWarning,showWarning,setShowForm}) {

  const handleConfirm = () => {
    setIsVisible(false);
    setShowWarning(false);
    setShowForm(false);
  };
  const handleCancel = () => {
    setIsVisible(true);
    setShowWarning(false);
    setShowForm(true);
  };
  return (
    <>
    {showWarning && (  
    <div className="background">
        <div className='warning'>
        <h3>
            Are you sure you want to exit? 
        </h3>
        <span>     
            All added or modified data will not be saved.
        </span>
        <div class="edit-btn">
            <button type="button" class="btn btn-success" onClick={handleConfirm}>Confirm</button>
            <button type="button" class="btn btn-danger" onClick={handleCancel}>Cancel</button>
        </div>

        </div>
    </div>
    )}
    </>
    );
  }
export default ShowWarning;
