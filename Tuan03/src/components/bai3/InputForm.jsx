import React, { useState } from "react";


function InputForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    

    const handleChangeName = (event) =>{
        setName(event.target.value);
    };

    const handleChangeEmail = (event) =>{
        setEmail(event.target.value);
    };
  return (
    <div>
      <h2>Form Nhập Liệu (Controlled)</h2>

      <div>
        <label>Họ và Tên:</label>
        <input 
          type="text" 
          value={name}              
          onChange={handleChangeName} 
          placeholder="Nhập tên của bạn..."
        />
      </div>

      <div className="input-group">
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={handleChangeEmail}
          placeholder="Nhập email..."
        />
      </div>

      <div className="result-box">
        <h3>Dữ liệu thời gian thực:</h3>
        <p><strong>Tên:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
    </div>
  );
};

export default InputForm;