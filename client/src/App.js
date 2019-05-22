import React from 'react';
import Burgerboard from './components/Burgerboard/Burgerboard';
import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
// import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Burgerboard />
        <hr/>

        {/* <Footer /> */}
      </Wrapper>
    </div>
  );
}

export default App;
