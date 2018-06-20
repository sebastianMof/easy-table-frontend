import React from 'react';
import '../App.css';
import ReactDOM from 'react-dom';
import {Tabs, Col, Tab, ButtonToolbar, Button, FormGroup, FormControl, ControlLabel, Alert} from 'react-bootstrap'
import Form from '../Form';
import mesa from './mesa';
import usuario from '../usuario'

export default class NewMesa extends React.Component {
  state = {
    numero: "",
    capacidad: ""
  };

onNewMesaSubmit(event) {
  event.preventDefault()
  const { numero, capacidad } = this.state
    fetch('http://localhost:5555/mesa')
      .then(result => {
        if (!result.token) {
          this.setState({loginError: result.message})
          return
        }
        this.props.auth.finishAuthentication(result.token)
        this.context.router.push('/mesa') //agregar mesa
      })
  }


render(){
  return(
  <div class="Registrarse">
    <form action_page="./NewMesa" method="post">
    <h2> Crear Mesa </h2>

    <br />
    NUMERO <input type ="number" min="1"
    placeholder="numero mesa" required="required"
    value={this.state.numero}
    onChange={e => this.setState({numero: e.target.value})}/>
    <br />
    CAPACIDAD <input type ="number" min="2" max="12"
    placeholder="capacidad" required="required"
    value={this.state.capacidad}
    onChange={e => this.setState({capacidad: e.target.value})}/>
    <br />
    <br />
<button type="onNewMesaSubmit" class="btn btn-primary btn-block btn-large">Crear Mesa  </button>

    </form>
    </div>
  );
}
}
