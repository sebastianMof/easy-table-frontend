import React from 'react';
import '../App.css';
import ReactDOM from 'react-dom';
import {Tabs, Col, Tab, ButtonToolbar, Button, FormGroup, FormControl, ControlLabel, Alert} from 'react-bootstrap'
import usuario from '../usuario';

export class NewAdmin extends React.Component { //tipo_usuario: admin
  state = {
    rut: "",
    tipo_usuario: "Admin",
    nombre: "",
    apellido: "",
    email: "",
    password: ""
  };

onNewAdminSubmit(event) {
  event.preventDefault()
  const { rut, nombre, apellido, email, password } = this.state
  if (rut && password) { //verificar que existe user
    this.props.auth.login(rut, password)
    fetch('http://localhost:5555/usuario')
      .then(result => {
        if (!result.token) {
          this.setState({loginError: result.message})
          return
        }
        this.props.auth.finishAuthentication(result.token)
        this.context.router.push('/usuario') //agregar usuario
      })
  }
}

handleChange(event) {
  this.setState({ [event.target.name]: event.target.value })
}

render(){
  return(
  <div class="Registrarse">
    <form action_page="./Form" method="post">
    <h2> Crear Administrador </h2>
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
    placeholder="email@dom" required="required"
    value={this.state.email}
    onChange={e => this.setState({email: e.target.value})}/>
    <br />
    CONTRASEÑA <input type="password"
    placeholder="password" required="required"
    value={this.state.password}
    onChange={e => this.setState({password: e.target.value})}/>
    <br />
    <br />
<button type="onNewAdminSubmit" class="btn btn-primary btn-block btn-large">Registrarse  </button>

    </form>
    </div>
  );
}
}

export default NewAdmin;
