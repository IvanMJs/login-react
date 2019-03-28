import React, { Component } from 'react';
import './login.css';

class Login extends Component {
  
//inicializo state
constructor(props) {
  super(props);
  this.state = {}
  this.connecToServer = this.connecToServer.bind(this)
}

  connecToServer() {
    fetch('/api/frutas')
    .then(res => res.json())
    .then(data => console.log(data));
  }


componentDidMount() {
  this.connecToServer();
}

  render() {
    //console.log(this.state.frutas);
    return (
      <div className="App">
        <header className="App-header">
          
          <h1>
            Desde login.js
          </h1>
          <p>Para ir desde express cambie start:"nodemon src/server" desde el
            Package.json e ir http://localhost:3000/api/frutas <br/>
            Falta conectar el login con express que esta en la carpeta
            server/index.js
             
          </p>
          
        </header>
      </div>
    );
  }
}

export default Login;
