import React from 'react';

const BreadItem = (category) => {
  return (
    <p className="breadItem">{category.category} &#62;</p>
  )
}

export default BreadItem;
