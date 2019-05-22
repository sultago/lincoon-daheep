import React from 'react';
import { Helmet } from 'react-helmet'

import TextInputForm from './components/TextInputForm';

import logo from './logo-apeach.jpg';
import './App.css';

const App: React.FC = () => {     // function component
  return (
    <div className="App">
        <Helmet>
            <meta charSet="utf-8" />
            <title>텍스트를 저장해보아요!!</title>
        </Helmet>

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
