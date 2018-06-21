import React, { Component } from 'react';
import Sidebar from 'react-sidebar';

import logo from './logo.svg';
import salty from './salty.gif';

import './App.css';

//forms
import Form_login from './Form_login.js';
import Form_registro from './Form_registro.js';
import Form_reserva from './Form_reserva.js';
import Form_liberar from './Form_liberar.js';
//data
import Mesas from './Mesas.js';
import Reservas from './Reservas.js';
import Usuarios from './Usuarios.js'


class App extends Component {

    constructor(props) {
	super(props);
    	this.state = {
    		fields: [],
            sidebarOpen: false
    	};

        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({sidebarOpen: open});
    }

    render() {
    	const {fields, SidebarOpen} = this.state;

    	return (
            <Sidebar sidebar={<b>Sidebar content</b>}
               open={this.state.sidebarOpen}
               onSetOpen={this.onSetSidebarOpen}>
                
                <div className="App">
        	        <header className="App-header">
        		        <img src={logo} className="App-logo" alt="logo" />
        		    	<h1 className="App-title">Bienvenido a Easy Table</h1>
        		    	<h2 className="App-title">La manera más fácil de reservar</h2>	
        		    </header>
        			<br/>
        			<h1 className="App-intro">
                        <Form_login />
                    </h1>
                    <br/>
    	    		
        	    </div>
            </Sidebar>    
    	);
    }

}

export default App;