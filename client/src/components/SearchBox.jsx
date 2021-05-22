import React, { useState } from 'react';
import '../scss/styles.scss';
import logo from '../images/logo_ml.png';
import search from '../images/search.png';
import history from '../history';

const SearchBox = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    history.push(`/items?q=${term}`);

    onFormSubmit(term);
  }

  const onClick = event => {
    event.preventDefault();
    history.push(`/items?q=${term}`);

    onFormSubmit(term);
  }
  return (
      <div className="search-box" role="search">
        <div className="wrapper">
          <div className="container">
            <div className="search-box__logo">
              <a href="https://www.mercadolibre.com.co/" className="search-box__link">
                <img className="seach__img" src={logo} alt="logo" />
              </a>
            </div>
            <form className="search" onSubmit={onSubmit}>
              <input 
                className="search__input" 
                type="text" 
                placeholder="search" 
                value={term} 
                role="term" 
                onChange={(event) => setTerm(event.target.value)}/>
              <button className="search__btn" onClick={onClick}>
                <img className="search__btn-icon" src={search} alt="search-icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default SearchBox;
