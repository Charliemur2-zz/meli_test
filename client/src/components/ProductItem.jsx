import React from 'react';
import { Link } from 'react-router-dom';
import FreeShipping from './FreeShipping';



const ProductItem = ({ product }) => {

  let productUrl = `/items/${product.id}`;
  let currency = product.price.currency.slice(0, -1);
  let formatedPrice = product.price.amount.toLocaleString(`es-${currency}`);
  return (
    <Link to={productUrl} className="product__link">
      <div className="product">
        <div className="product__picture">
          <img className="product__img" src={product.picture} alt="product" />
        </div>
        <div className="product__info">
          <p className="product__price">$ {formatedPrice} <FreeShipping shipping={product.free_shipping} /></p>
          <p className="product__title">{product.title}</p>
        </div>
        <div className="product__place">Argentina</div>
      </div>
    </Link>
  )
};

export default ProductItem;