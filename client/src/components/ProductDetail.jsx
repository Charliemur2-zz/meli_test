import React, { useEffect, useState } from 'react';
import history from '../history';
import axios from 'axios';


const ProductDetail = () => {
  const [ state, setState] = useState({ data: [], loading: true});
  const id = history.location.pathname.slice(11);
 /*  let data = []; */
  useEffect(() => {    
    axios.get(`http://localhost:8081/api/items/${id}`)
      .then((res) => {
        console.log(res);
        setState({ data: res.data, loading: false });
      })
      .catch((error) => {
        console.log('error');
      });
  }, [id])
  if (state.loading) {
    return ('loading');
  } else {
    console.log(state.data);
    let product = state.data.item;
    return (
      <div className="product-detail">
        <div className="product-detail__picture">
          <img src={product.picture} alt="product" />
        </div>
        <div className="product-detail__info">
          <div className="product-detail__aditional">
            <p className="condition">{product.condition}</p>
            <p className="sold">{product.sold_quantity} vendidos</p>
          </div>
          <div className="product-detail__price">{product.price.amount}</div>
          <div className="product-detail__title">{product.title}</div>
          <div className="cta">
            <a href="https://www.mercadolibre.com.ar/" className="cta">Comprar</a>
          </div>
        </div>
        <div className="product-detail__description">
          <h2 className="description__title">Descripción del Producto</h2>
          <p className="description__text">
            {product.description}
          </p>
        </div>
      </div>
    )
  }
};

export default ProductDetail;
