import React from 'react';
import './ProductCard.css'; 

function ProductCard() {
  return (
    <div className="product-card">
      <img 
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop" 
        alt="Giày Nike" 
        className="product-image" 
      />
      <h3 className="product-name">Giày Nike Red</h3>
      <p className="product-price">2.500.000 VNĐ</p>
      <button className="add-to-cart-btn">Add to cart</button>
    </div>
  );
}

export default ProductCard;