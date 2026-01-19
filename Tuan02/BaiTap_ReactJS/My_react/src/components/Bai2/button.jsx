import React from 'react';
import './Button.css';

// Component nhận vào 2 props:
// 1. children: Nội dung chữ bên trong nút (Ví dụ: "Lưu lại", "Xóa")
// 2. type: Loại nút ("primary", "danger", "success")
function Button({ children, type }) {
  
  // Logic ghép class:
  // Nếu type="danger" -> className sẽ là "btn btn-danger"
  const className = `btn btn-${type}`;

  return (
    <button className={className}>
      {children}
    </button>
  );
}

export default Button;