import React, { Component } from "react";
import "../login/login.css";

class inputCorreo extends Component {
  render() {
    return (
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
    );
  }
}

export default inputCorreo;
