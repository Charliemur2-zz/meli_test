import React, { useState } from 'react';
import '../src/scss/styles.scss';
import SearchBox from './components/SearchBox';
import Results from './components/Results';
import ProductDetail from './components/ProductDetail';
import BreadCrumb from './components/BreadCrumb';
import {Router, Route} from 'react-router-dom';
import axios from 'axios';
import history from './history';


const App = () => {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const onTermSubmit = async (term) => {
    axios.get(`http://localhost:8081/api/items?q=${term}`)
    .then((res) => {
      setProducts(res.data.items);
      setCategories(res.data.categories);
    })
    .catch((error) => {
      console.log('error');
    });
  }
  return (
    <Router history={history}>
      <SearchBox onFormSubmit={onTermSubmit}/>
      <BreadCrumb categories={categories} />
      <Route exact path="/items">
        <Results products={products}/>
      </Route>
      <Route exact path="/items/:id">
        <ProductDetail />
      </Route>
    </Router>
  )
}

export default App;
