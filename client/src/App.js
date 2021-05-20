import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../src/scss/styles.scss';
import SearchBox from './components/SearchBox';
import Results from './components/Results';

const App = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    const fetchData = async () =>  {
      const result = await axios(
        'https://api.mercadolibre.com/items/MLA919739960'
      );
      setState(result.data);
    };
    fetchData();
    console.log(state);
  }, []);    
  return (
    <div className="App">
      <SearchBox />
      <Results data={state}/>

    </div>
  );
}

export default App;
