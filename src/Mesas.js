import React, {Component} from 'react';
import {mesa} from './mesa';


export default class Curso extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numero: props.numero,
            capacidad: props.capacidad,
            mesasLoaded: false,
            mesas: []
        }
        this.loadMesas = this.loadMesas.bind(this);
    }

    loadMesas() {
        this.setState({    
            mesasLoaded: true
        });
        fetch('http://localhost:5555/mesa/', {
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
                            mesas: responseJSON.data,
                        });      
                        //mesas cargadas
                }
            })
            .catch(error => {
                console.log(':(', error);
            })
    }

    render() {
        const {numero, capacidad, mesasLoaded, mesas} = this.state;
        return (
            <div className= "MesasLocal">
                <button 
                    href="#" 
                    onClick={this.loadMesas} 
                    className="btn btn-primary btn-block btn-large">Mesas  
                </button>
                
               

                
            </div>
        );
    }
}