import React, { Component } from 'react';
import './App.css';
import Login from './components/login/login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <p>
            Desde app.js
          </p>

          <Login />
          
        </header>
      </div>
    );
  }
}

export default App;
