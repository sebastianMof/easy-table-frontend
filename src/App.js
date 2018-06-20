import React, { Component } from 'react';
import logo from './logo.svg';
import salty from './salty.gif';

import './App.css';

import Form_login from './Form_login.js';
import Form_registro from './Form_registro.js';
import Form_reserva from './Form_reserva.js';
import Form_liberar from './Form_liberar.js';
import Mesas from './Mesas.js';

class App extends Component {

    constructor(props) {
	super(props);
    	this.state = {
    		fields: []
    	};
    }

    render() {
    	const {fields} = this.state;
    	
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

    			<h1 className="App-intro">

                    <Mesas />
                </h1>
                <br/>
	    		
    	    </div>    
    	);
      }

}

export default App;