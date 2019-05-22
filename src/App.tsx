import React from 'react';
import TextInputForm from './components/TextInputForm';

import logo from './logo-apeach.jpg';
import './App.css';

const App: React.FC = () => {     // function component
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="apeach logo" />
      </header>
      <div>
        <TextInputForm/>
      </div>
    </div>
  );
}

export default App;
