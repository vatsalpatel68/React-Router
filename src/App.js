import React from 'react';
import {BrowserRouter , Route ,Link} from 'react-router-dom';
import Component1 from './Component/Component1.js';
import Component2 from './Component/Component2.js';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
          <Route path='/' exact component={Component2} />
          <Route path='/:name/:age'  component = {Component1}></Route>

      </BrowserRouter>
    </div>
  );
}

export default App;
