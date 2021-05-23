import React from 'react';
import BreadItem from './BreadItem';

const BreadCrumb = ({ categories }) => {
  
  if (categories) {
    const renderBreadItems = categories.map((category, i) => {
      return <BreadItem category={category} key={i} />
    });
    return (
      <div className="BreadCrumb">
        <div className="wrapper">
          <div className="container">
            {renderBreadItems}  
          </div>
        </div>
      </div>
    ) 
  } else {
    return (
      <div className="BreadCrumb">

      </div>
    )
  }

}

export default BreadCrumb;
