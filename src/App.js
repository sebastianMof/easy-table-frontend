import React, { Component } from 'react';
import logo from './logo.svg';
import salty from './salty.gif';
import './App.css';

import Form from './Form.js'

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


/*
    state = {
        fields: {}
    };

    onChange = updatedValue => {
        this.setState({
            fields: {
                ...this.state.fields,
                ...updatedValue
            }
        });
    };

    componentDidMount() {
        fetch('http://localhost:5555')//api.github.com is working
            .then(response => response.json())
            .then(responseJSON => {
                console.log('Respuesta del Backend', responseJSON);
                
                
            })
            .catch(error => {
                console.log('Te odio', error);
            })
    };

    render() {
      return (
         <div className="App">
            <header className="App-header">    
                <h1 className="App-title">Easy Table</h1>
                <img src={logo} className="App-logo" alt="logo" />
            </header>  

            <Form onChange={fields => this.onChange(fields)} />
            <p>
                {JSON.stringify(this.state.fields, null, 2)}
            </p>

         </div>
        );
    }*/









}

export default App;