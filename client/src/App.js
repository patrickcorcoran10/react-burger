import React from 'react';
import Burgerboard from './components/Burgerboard/Burgerboard';
import './App.css';
import Wrapper from './components/Wrapper/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Burgerboard />
      </Wrapper>
    </div>
  );
}

export default App;
