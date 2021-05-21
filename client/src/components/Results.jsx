import React from 'react';
import '../scss/styles.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Results = ({term}) => {
  console.log(term);
  let uri = 'http://localhost:8081/api/items';
  if (term) {
    uri += `?q=${term}`;
  }
  console.log(uri);
  const [state, setState] = useState([]);
  useEffect(() => {
    const fetchData = async () =>  {
      const result = await axios(uri);
      setState(result.data);
    };
    fetchData();
    console.log(state);
  }, [uri, state]);    
  return (
    <main className="main">

    </main>
  )
}

export default Results;
