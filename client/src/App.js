import React, {useState} from 'react';
import '../src/scss/styles.scss';
import SearchBox from './components/SearchBox';
import Results from './components/Results';

const App = () => {
  const [term, setTerm] = useState('');
  return (
    <div className="App">
      <SearchBox setTerm={setTerm}/>
      <Results term={term}/>

    </div>
  );
}

export default App;
