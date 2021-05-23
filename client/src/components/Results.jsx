import React from 'react';
import '../scss/styles.scss';
import ProductItem from './ProductItem';


const Results = ({ products }) => {

  const renderProducts = products.map((product) => {
    return <ProductItem product={product} key={product.id}/>
  });
  return (
    <div className="results">
      <div className="wrapper">
        <div className="container">
          {renderProducts}  
        </div>
      </div>
    </div>
  ) 
}

export default Results;
