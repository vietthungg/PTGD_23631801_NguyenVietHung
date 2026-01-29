import React, { useState } from 'react'
import './Bai4.css';

function StatusBadge({status}) {
  return (
    <div>
        <span className={`badge ${status}`}>
            {status}
        </span>
    </div>
  )
}



function Bai4() {
  const [currentStatus, setStatus] = useState('offline');

  return (
    <div>
      <h3>Bài 4: Dynamic Status</h3>

      <div>
        <StatusBadge status={currentStatus} />
      </div>

      <div>
        <button 
            onClick={() => setStatus('online')}
        >
            Online
        </button>
        
        <button 
            onClick={() => setStatus('busy')}
        >
            Busy
        </button>
        
        <button 
            onClick={() => setStatus('offline')}
        >
            Offline
        </button>
      </div>
    </div>
  );
}

export default Bai4;