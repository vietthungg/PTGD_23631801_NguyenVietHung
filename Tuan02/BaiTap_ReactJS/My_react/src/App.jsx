
import React from 'react';
// import ProductCard from './components/Bai1/ProductCard';
// import Button from './components/Bai2/button';
import Alert from './components/bai3/Alert';
import LoginForm from './components/Bai4/LoginForm';
function App() {
  return (
    // bài 1
    // <ProductCard /> 

    

    // bài 2
    // <div style={{ display: 'flex', justifyContent: 'center', padding: '50px', gap: '20px' }}>
    //   <Button type="primary">Đăng nhập</Button>
    //   <Button type="success">Thanh toán</Button>
    //   <Button type="danger">Xóa tài khoản</Button>

    // </div>
    // bài 3
    <>
    <div className="App">
      <label htmlFor="">Bai tập 3</label>
       {}
      <Alert/>
    </div>
    <hr />
    <div className="App">
      <label htmlFor="">Bai tập 4</label>
       <LoginForm />
    </div>
    </>

  );
}

export default App;