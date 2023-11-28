import React, { useState } from 'react';
import '../../css/vien/ShowWarning.css'

import "react-datepicker/dist/react-datepicker.css";

function ShowWarning1({setIsVisible,setShowWarning,showWarning}) {

  const handleConfirm = () => {
    setIsVisible(false);
    setShowWarning(false);
  };
  const handleCancel = () => {
    setIsVisible(true);
    setShowWarning(false);
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
            All data cannot Saved!
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
export default ShowWarning1;
