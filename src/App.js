import React, { useState } from 'react';
import './App.css';

import Page1 from './components/page1/Page1';
import Page2 from './components/page2/Page2';

function App(props) {
  console.log('pageAPP render', props)

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <br/>
      <button onClick={ () => setCount(count + 1) }>click count: { count }</button>
      <br/>
      <br/>
      <Page1/>
      <br/>
      <Page2/>
    </div>
  );
}

export default App;
