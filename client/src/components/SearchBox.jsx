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
              <img class="seach__img" src={logo} alt="logo" />
            </a>
          </div>
          <form className="search">
            <input class="search__input" type="text" placeholder="search" name="term" role="term" />
            <button class="search__btn">
              <img src={search} alt="search-icon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
