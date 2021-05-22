import React from 'react';

const BreadItem = (category) => {
  return (
    <p className="breadItem">{category.category}</p>
  )
}

export default BreadItem;
