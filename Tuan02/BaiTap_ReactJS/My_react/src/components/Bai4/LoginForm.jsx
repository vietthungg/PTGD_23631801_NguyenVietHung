import React, { useState } from 'react';
import './LoginForm.css';


const LoginForm = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return <div className="text-center mt-5"><button onClick={() => setIsVisible(true)}>Mở lại Login Form</button></div>;

  return (
    <div className="login-overlay">
      <div className="login-container">
        {}
        <span className="close-btn" onClick={() => setIsVisible(false)}>
          &times; 
        </span>

        <h2 className="login-title">Đăng Nhập</h2>

        <form className="login-form">
          {}
          <div className="form-group">
            <label>Username</label>
            <input type="text" placeholder="Nhập tên đăng nhập" className="form-input" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Nhập mật khẩu" className="form-input" />
          </div>

          <button type="button" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;