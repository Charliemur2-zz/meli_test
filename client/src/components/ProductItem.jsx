import React from 'react';
import { Link } from 'react-router-dom';



const ProductItem = ({ product }) => {

  let productUrl = `/api/items/${product.id}`;

  return (
    <Link to={productUrl} className="product">
      <div className="product__picture">
        <img src={product.picture} alt="product" />
      </div>
      <div className="product__info">
        <div className="product__price">{product.price.amount}</div>
        <div className="product__title">{product.title}</div>
      </div>
      <div className="product__place">site</div>
    </Link>
  )
};

export default ProductItem;