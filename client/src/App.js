import React, { useState } from 'react';
import '../src/scss/styles.scss';
import SearchBox from './components/SearchBox';
import Results from './components/Results';
import ProductDetail from './components/ProductDetail';
import {Router, Route} from 'react-router-dom';
import axios from 'axios';
import history from './history';

const App = () => {

  const [products, setProducts] = useState([]);

  const onTermSubmit = async (term) => {
    const response = await axios.get(`http://localhost:8081/api/items?q=${term}`);

    setProducts(response.data.items);
  }
  return (
    <Router history={history}>
      <SearchBox onFormSubmit={onTermSubmit}/>
      <Route exact path="/items">
        <Results products={products}/>
      </Route>
      <Route exact path="/api/items/:id">
        <ProductDetail />
      </Route>
    </Router>
  )
}

export default App;
