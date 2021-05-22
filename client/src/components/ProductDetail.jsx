import React from 'react';
import history from '../history';
import axios from 'axios';


const ProductDetail = () => {
  /* const [ detail, setDetail] = useState([]); */
  const id = history.location.pathname.slice(11);
  const response = axios.get(`http://localhost:8081/api/items/${id}`)
    .then((res) => {
      return(res);
    })
    .catch((error) => {
      console.log('error');
    });

  console.log(response);
  return (
    <div className="product-detail">
      {/* <div className="product-detail__picture">
        <img src={product.picture} alt="product" />
      </div>
      <div className="product-detail__info">
        <div className="product-detail__price">{product.price.amount}</div>
        <div className="product-detail__title">{product.title}</div>
      </div>
      <div className="product-detail__place">site</div> */}
      {/* Product detail of item {product.id} */}
    </div>
  )
};

export default ProductDetail;
