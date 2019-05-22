import React from 'react';
import logo from './logo-apeach.jpg';
import './App.css';

const App: React.FC = () => {     // function component
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="apeach logo" />
      </header>
      <div>
        test
      </div>
    </div>
  );
}

export default App;
