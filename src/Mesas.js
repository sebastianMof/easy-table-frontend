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
        fetch('http://localhost:5555/mesa/')
            .then(response => response.json())
            .then(responseJSON => {
                console.log('Respuesta backend', responseJSON);
                this.setState({    
                    mesas: responseJSON.data.mesas,

                });
                console.log(responseJSON.data.mesas);
            })
            .catch(error => {
                console.log(':(', error);
            })
    }

    render() {
        const {numero, capacidad, mesasLoaded, mesas} = this.state;
        return (
            <div>
                <button 
                    href="mesa" 
                    onClick={this.loadMesas} 
                    className="btn btn-primary btn-block btn-large">Mesas  
                </button>
                
            </div>
        );
    }
}