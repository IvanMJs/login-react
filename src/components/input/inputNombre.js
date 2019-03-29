import React, { Component } from "react";
import "../login/login.css"


class Input extends Component {

    render() {
        return (
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
        );
    }
}

export default Input;