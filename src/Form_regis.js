import React from 'react';
import ReactDOM from 'react-dom';
import {Tabs, Col, Tab, ButtonToolbar, Button, FormGroup, FormControl, ControlLabel, Alert} from 'react-bootstrap'
import Form from './Form';

export default class Form_regis extends React.Component{
  state = {
    rut: "",
    nombre: "",
    apellido: "",
    email: "",
    password:""
  };

render(){
  return(
  <div class="Registrarse">
    <form action_page="./Form" method="post">
         RUT <input type ="text"
        placeholder="12345678-9" required="required"
        value={this.state.rut}
        onChange={e => this.setState({rut: e.target.value})}/>

    <br />
    NOMBRE <input type ="text"
    placeholder="nombre" required="required"
    value={this.state.nombre}
    onChange={e => this.setState({nombre: e.target.value})}/>
    <br />
    APELLIDO <input type ="text"
    placeholder="apellido" required="required"
    value={this.state.apellido}
    onChange={e => this.setState({apellido: e.target.value})}/>
    <br />
    EMAIL <input type ="email"
    placeholder="email" required="required"
    value={this.state.email}
    onChange={e => this.setState({email: e.target.value})}/>
    <br />
    CONTRASEÑA <input type="password"
    placeholder="password" required="required"
    value={this.state.password}
    onChange={e => this.setState({password: e.target.value})}/>
    <br />
    <br />
<button type="onLoginSubmit" class="btn btn-primary btn-block btn-large">Registrarse  </button>

    </form>
    </div>
  );
}
}
