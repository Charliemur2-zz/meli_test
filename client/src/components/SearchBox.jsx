import React from 'react';
import '../scss/styles.scss';
import logo from '../images/logo_ml.png';
import search from '../images/search.png';

const SearchBox = () => {
  return (
    <div className="search-box" role="search">
      <div className="wrapper">
        <div className="container">
          <div className="search-box__logo">
            <a href="https://www.mercadolibre.com.co/" className="search-box__link">
              <img className="seach__img" src={logo} alt="logo" />
            </a>
          </div>
          <form className="search">
            <input className="search__input" type="text" placeholder="search" name="term" role="term" />
            <button className="search__btn">
              <img className="search__btn-icon" src={search} alt="search-icon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
