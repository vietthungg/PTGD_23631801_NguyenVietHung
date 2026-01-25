import React from 'react';
import './ProductList.css';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Laptop Gaming', price: '20.000.000đ'  },
    { id: 2, name: 'iPhone 15', price: '25.000.000đ' },
    { id: 3, name: 'Tai nghe Bluetooth', price: '1.000.000đ' },
    { id: 4, name: 'Bàn phím cơ', price: '2.500.000đ' },
    { id: 5, name: 'Chuột không dây', price: '500.000đ' },
    { id: 6, name: 'Màn hình 4K', price: '10.000.000đ' },
  ];

  return (
    <div className="container-bai5">
      <h2>Danh sách sản phẩm (Responsive)</h2>
      
      {}
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            {/* <img src={product.img} alt={product.name} className="product-img" /> */}
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <button>Mua ngay</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;