import React, { useEffect, useState } from 'react';
import history from '../history';
import axios from 'axios';
import Loader from './Loader';


const ProductDetail = () => {
  const [ state, setState] = useState({ data: [], loading: true});
  const id = history.location.pathname.slice(7);
 /*  let data = []; */
  useEffect(() => {    
    axios.get(`http://localhost:8081/api/items/${id}`)
      .then((res) => {
        setState({ data: res.data, loading: false });
      })
      .catch((error) => {
        console.log('error')
      });
  }, [id])
  if (state.loading) {
    return (<Loader />);
  } else {
    let product = state.data.item;
    let currency = product.price.currency.slice(0, -1);
    let formatedPrice = product.price.amount.toLocaleString(`es-${currency}`);
    let decimals = parseInt(product.price.decimals);

    if (decimals === 0) {
      decimals = String(decimals).padStart(2, '0');
    } else {
      decimals *= 100;
    }
    return (
      <div className="product-detail">
        <div className="wrapper">
          <div className="container">
            <div className="product-detail__picture">
              <img className="product-detail__img" src={product.picture} alt="product" />
            </div>
            <div className="product-detail__info">
              <div className="product-detail__aditional">
                <p className="condition">{product.condition} - </p>
                <p className="sold">{product.sold_quantity} vendidos</p>
              </div>
              <p className="product-detail__title">{product.title}</p>
              <p className="product-detail__price">$ {formatedPrice}<span className="decimals">{decimals}</span></p>
              <div className="cta">
                <a href="https://www.mercadolibre.com.ar/" className="cta__btn">Comprar</a>
              </div>
            </div>
            <div className="product-detail__description">
              <h2 className="description__title">Descripción del Producto</h2>
              <p className="description__text">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default ProductDetail;
