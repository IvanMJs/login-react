import React, { Component } from "react";
import "../login/login.css";


class inputApellido extends Component {
    render() {
      return (
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
      );
    }
  }
  
  export default inputApellido;