import React, { Component } from "react";
import "../login/login.css";


class inputContraseña extends Component {
    render() {
      return (
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
      );
    }
  }
  
  export default inputContraseña;