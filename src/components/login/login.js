import React, { Component } from "react";
import "./login.css";

class Login extends Component {
  //inicializo state
  constructor(props) {
    super(props);
    this.state = {};
    this.connecToServer = this.connecToServer.bind(this);
  }

  connecToServer() {
    fetch("/api/frutas")
      .then(res => res.json())
      .then(data => console.log(data));
  }

  componentDidMount() {
    this.connecToServer();
  }

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Crear cuenta</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div class="firstName">
              <label htmlFor="firstName">Nombre</label>
              <input
                type="text"
                className=""
                placeholder="Nombre"
                name="firstname"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div class="lastName">
              <label htmlFor="lastName">Apellido</label>
              <input
                type="text"
                className=""
                placeholder="Apellido"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div class="email">
              <label htmlFor="email">Correo</label>
              <input
                type="email"
                className=""
                placeholder="Correo"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div class="password">
              <label htmlFor="password">Contraseña</label>
              <input
                type="text"
                className=""
                placeholder="Contraseña"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="createAccount">
              <button type="submit">Ingresar</button>
              <small>Ya tienes cuenta?</small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
