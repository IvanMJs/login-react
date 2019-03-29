import React, { Component } from "react";
import InputNombre from "../input/inputNombre";
import InputCorreo from "../input/inputCorreo";
import InputApellido from "../input/inputApellido";
import InputContra from "../input/inputContraseña";
import SubIngreso from "../submit/submitIngreso";
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
            <InputNombre />
            <InputApellido />
            <InputCorreo />
            <InputContra />
            <SubIngreso />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
