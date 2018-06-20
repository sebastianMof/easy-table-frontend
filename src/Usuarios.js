import React, {Component} from 'react';
import {mesa} from './usuario';


export default class Usuarios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rut: props.rut,
            password: props.password,
            nombre: props.nombre,
            apellido: props.apellido,
            email: props.email,
            tipo_usuario: props.tipo_usuario,
            usuariosLoaded: false,
            usuarios: []
        }
        this.loadUsuarios = this.loadUsuarios.bind(this);
    }

    loadUsuarios() {
        this.setState({    
            usuariosLoaded: true
        });
        fetch('http://localhost:5555/usuario/', {
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
            },})
            .then(response => response.json())
            .then(responseJSON => {
                console.log('Respuesta backend', responseJSON);
                
                if (responseJSON.status !== 1) {
                        this.setState({loginError: responseJSON.message});                        
                        //mensaje de error al cargar mesas del local
                    
                } else{
                        this.setState({    
                            usuarios: responseJSON.data,
                        });
                        //console.log(this.state.mesas[0].numero)      
                        //mesas cargadas
                }
            })
            .catch(error => {
                console.log(':(', error);
            })
    }

    render() {
        const {rut, password, nombre, apellido, email, tipo_usuario, usuariosLoaded, usuarios} = this.state;
        return (
            <div className= "Usuarios">
                <button 
                    href="#" 
                    onClick={this.loadUsuarios} 
                    className="btn btn-primary btn-block btn-large">Usuarios 
                </button>
               <ul>
                    {this.state.usuarios.map((usuario, i) =>
                        <li key={i}>{usuario.rut} - {usuario.nombre} - {usuario.apellido} - {usuario.email} - {usuario.tipo_usuario}</li>
                    )}
                </ul>
               

                
            </div>
        );
    }
}