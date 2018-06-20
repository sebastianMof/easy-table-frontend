import React, { Component } from 'react';
import logo from './logo.svg';
import salty from './salty.gif';

import './App.css';

import Form from './Form.js';
import Form_regis from './Form_regis.js';
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
                    <Form_regis onSubmit={fields => this.onSubmit(fields)}/>
                </h1>
	    		<Mesas/>
    	    </div>    
    	);
      }

}

export default App;