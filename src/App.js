import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import Form from "./Form";
import Form_regis from "./Form_regis";
//import Form_reser from "./Form_reser";
import Form_rec from './Form_rec';
import usuario from './usuario';
import recuperar from './recuperar';


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
          <Form onSubmit={fields => this.onSubmit(fields)}/>
        </p>
      </div>
    );
  }
}

export default App;


//date---  npm install moment --save
