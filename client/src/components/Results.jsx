import React from 'react';
import '../scss/styles.scss';
import ProductItem from './ProductItem';


const Results = ({ products }) => {

  const renderProducts = products.map((product) => {
    return <ProductItem product={product}/>
  });
  return (
    <div>{renderProducts}</div>  
  ) 
}

export default Results;
