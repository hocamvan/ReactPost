import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Film from './Film';
import Employee from './Employee';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Film/> 
        {/* <Employee/> */}
      </div>
    );
  }
}

export default App;
