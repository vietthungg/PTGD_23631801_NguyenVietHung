import React, { useState } from 'react';
import './Alert.css'; 

const Alert = () => {

  const [alertStatus, setAlertStatus] = useState(null);

  const renderAlertContent = () => {
    switch (alertStatus) {
      case 'success':
        return 'This is a Success alert';
      case 'warning':
        return 'This is a Warning alert';
      case 'error':
        return 'This is an Error alert';
      default:
        return null; 
    }
  };

  return (
    <div className="wrapper">
      {}
      {alertStatus && (
        <div className={`alert-box ${alertStatus}`}>
            {renderAlertContent()}
        </div>
      )}

      {}
      <div className="control-panel">
        <p>Chọn loại thông báo:</p>
        <button 
            className="btn btn-success" 
            onClick={() => setAlertStatus('success')}
        >
            Success
        </button>
        
        <button 
            className="btn btn-warning" 
            onClick={() => setAlertStatus('warning')}
        >
            Warning
        </button>
        
        <button 
            className="btn btn-error" 
            onClick={() => setAlertStatus('error')}
        >
            Error
        </button>
      </div>
    </div>
  );
};

export default Alert;