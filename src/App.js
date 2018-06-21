import React, { Component } from 'react';
import Sidebar from 'react-sidebar';

import {BrowserRouter as Router, Link, NavLink, Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';

import logo from './logo.svg';
import salty from './salty.gif';

import './App.css';

//forms
import Form_login from './Form_login.js';
import Form_registro from './Form_registro.js';
import Form_reserva_capacidad from './Form_reserva_capacidad.js';
import Form_reserva_numero from './Form_reserva_numero.js';
import Form_mesa from './Form_mesa.js';
import Form_liberar from './Form_liberar.js';
import Form_delete_user from './Form_delete_user';
import Form_delete_mesa from './Form_delete_mesa';
import Form_delete_reserva from './Form_delete_reserva';

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
            <Router>
                <Sidebar sidebar={<b>Sidebar content</b>}
                   open={this.state.sidebarOpen}
                   onSetOpen={this.onSetSidebarOpen}>
                    
                    <div className="App">
            	        <header className="App-header">
            		        <img src={logo} className="App-logo" alt="logo" />
            		    	<h1 className="App-title">Bienvenido a Easy Table</h1>
            		    	<h2 className="App-title">La manera más fácil de reservar</h2>	

                            <NavLink to ="/" exact activeStyle ={{color:'#ffffff',fontWeight: 'bold'}}>Login</NavLink>&emsp; 
                            <NavLink to ="/registro" activeStyle ={{color:'#ffffff',fontWeight: 'bold'}}>Registrarse</NavLink>&emsp;
                            <NavLink to ="/usuario/delete" activeStyle ={{color:'#ffffff',fontWeight: 'bold'}}>Borrar Usuario</NavLink>&emsp;
                            <NavLink to ="/usuarios" activeStyle ={{color:'#ffffff',fontWeight: 'bold'}}>Ver Usuarios</NavLink>&emsp;&emsp;&emsp;&emsp;&emsp;

                            <NavLink to ="/reserva/capacidad" activeStyle ={{color:'#ffffff',fontWeight: 'bold'}}>Reservar Capacidad</NavLink>&emsp;
                            <NavLink to ="/reserva/numero" activeStyle ={{color:'#ffffff',fontWeight: 'bold'}}>Reservar Número</NavLink>&emsp;
                            <NavLink to ="/reservas" activeStyle ={{color:'#ffffff',fontWeight: 'bold'}}>Ver Reservas</NavLink>&emsp;
                            <NavLink to ="/liberar" activeStyle ={{color:'#ffffff',fontWeight: 'bold'}}>Liberar Mesa</NavLink>&emsp;
                            <NavLink to ="/reserva/delete" activeStyle ={{color:'#ffffff',fontWeight: 'bold'}}>Borrar Reserva</NavLink>&emsp;&emsp;&emsp;&emsp;&emsp;
                            
                            <NavLink to ="/mesas"       activeStyle ={{color:'#ffffff',fontWeight: 'bold'}}>Ver Mesas</NavLink>&emsp;
                            <NavLink to ="/mesa/create"        activeStyle ={{color:'#ffffff',fontWeight: 'bold'}}>Crear Mesa</NavLink>&emsp;
                            <NavLink to ="/mesa/delete" activeStyle ={{color:'#ffffff',fontWeight: 'bold'}}>Borrar Mesa</NavLink>&emsp;
                            
                
            		    </header>
            			<br/>

            			<h1 className="App-contenido">
                            <Route path='/' exact component={Form_login}/>
                            <Route path='/registro' exact component={Form_registro}/>
                            <Route path='/usuario/delete' exact component={Form_delete_user}/>
                            <Route path='/usuarios' exact component={Usuarios}/>

                            <Route path='/reserva/capacidad' exact component={Form_reserva_capacidad}/>
                            <Route path='/reserva/numero' exact component={Form_reserva_numero}/>
                            <Route path='/liberar' exact component={Form_liberar}/>
                            <Route path='/reservas' exact component={Reservas}/>
                            <Route path='/reserva/delete' exact component={Form_delete_reserva}/>

                            <Route path='/mesa/create' exact strict component={Form_mesa}/>
                            <Route path='/mesas' exact component={Mesas}/>
                            <Route path='/mesa/delete' exact component={Form_delete_mesa}/>

                        </h1>
                        <br/>
	    		
            	    </div>
                </Sidebar> 
            </Router>   
    	);
    }

}

export default App;