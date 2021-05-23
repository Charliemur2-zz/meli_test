import React from 'react';
import shipicon from '../images/ic_shipping.png';

const FreeShipping = ({ shipping }) => {
  if (shipping === true) {
    return (
      <span className="shipping">
        <img className="shipping__icon" src={shipicon} alt="free-shipping" />
      </span>
    )
  } else {
    return (
      <span></span>
    )
  }
}

export default FreeShipping;
