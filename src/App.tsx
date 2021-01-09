import React from 'react';
import acady from './acady.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>You just made a <a href="https://reactjs.org" target="_blank" className="App-link">React</a> app with the help of <a href="https://acady.io/" className="App-link">acady</a>!</h2>
        <img src={acady} alt="acady" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
