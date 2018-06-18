import React, { Component } from 'react';
import logo from './salty.gif';
import './App.css';

import Form from './Form.js'

class App extends Component {

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
    }
}

export default App;