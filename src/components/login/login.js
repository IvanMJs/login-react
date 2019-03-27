import React, { Component } from 'react';
import './login.css';

class Login extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1>
            Pantalla de login.js
          </h1>
          <p>Para ir desde express cambie start:"nodemon src/server" desde el
            Package.json e ir http://localhost:3000/Api 
          </p>
          
        </header>
      </div>
    );
  }
}

export default Login;
