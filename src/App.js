import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./Form";
import Form_regis from "./Form_regis";
import {usuario} from './usuario'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        usuario: []
    };
}
  onSubmitCrear = (fields)=>{
    console.log("Form_regis",fields);
  }
  onSubmit = (fields)=>{
  console.log("App", fields);
}



  render() {
    const {usuario} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenido a Easy Table</h1>
          <h2 className="App-title">La manera más fácil de reservar</h2>
          <div className="App-intro">
</div>

        </header>
        <br/>
        <p className="App-intro">
          <h1> Iniciar sesión</h1>
          <Form onSubmit={fields => this.onSubmit(fields)}/>
        </p>
      </div>
    );
  }
}

export default App;
