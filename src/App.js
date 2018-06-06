import React, { Component } from 'react';
import logo from './salty.gif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">    
          <h1 className="App-title">Easy Table</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>    
      </div>
    );
  }
}


export default App;

