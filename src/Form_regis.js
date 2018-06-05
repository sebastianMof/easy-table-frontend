import React from 'react';
import ReactDOM from 'react-dom';
import {Tabs, Col, Tab, ButtonToolbar, Button, FormGroup, FormControl, ControlLabel, Alert} from 'react-bootstrap'
//import Form from './Form';
import Form from './Form_regis';

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
    <form action_page="./Form" method="post">
<fieldset>
    <p> RUT <input type ="text"
    placeholder="rut"
    value={this.state.rut}
    onChange={e => this.setState({rut: e.target.value})}/> </p>

    <p> NOMBRE <input type ="text"
    placeholder="nombre"
    value={this.state.nombre}
    onChange={e => this.setState({nombre: e.target.value})}/> </p>

    <p> APELLIDO <input type ="text"
    placeholder="apellido"
    value={this.state.apellido}
    onChange={e => this.setState({apellido: e.target.value})}/> </p>

    <p> EMAIL <input type ="email"
    placeholder="email"
    value={this.state.email}
    onChange={e => this.setState({email: e.target.value})}/> </p>


    <p> CONTRASEÑA <input type="password"
    placeholder="password"
    value={this.state.password}
    onChange={e => this.setState({password: e.target.value})}/> </p>

<input type="submit" value="Registrarse"/>
</fieldset>
    </form>
  );
}
}
