import React, { Component } from 'react'
import "../login/login.css";

class inputIngresar extends Component {
  render() {
    return (
        <div className="createAccount">
        <button type="submit">Ingresar</button>
        <small>Ya tienes cuenta?</small>
      </div>
    )
  }
}

export default inputIngresar;