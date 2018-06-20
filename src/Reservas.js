import React, {Component} from 'react';
import {reserva} from './reserva';


export default class Reservas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            fecha_inicio_reserva: props.fecha_inicio_reserva,
            fecha_fin_reserva: props.fecha_fin_reserva,
            estado: props.estado,
            mesaNumero: props.mesaNumero,
            usuarioRut: props.usuarioRut,
            reservas: []
        }
        this.loadReservas = this.loadReservas.bind(this);
        this.loadReservasActivas = this.loadReservasActivas.bind(this);

    }

    loadReservas() {
        this.setState({    
            reservasLoaded: true
        });
        fetch('http://localhost:5555/reserva/', {
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
                            reservas: responseJSON.data,
                        });
                        //console.log(this.state.mesas[0].numero)      
                        //mesas cargadas
                }
            })
            .catch(error => {
                console.log(':(', error);
            })
    }

    loadReservasActivas() {
        this.setState({    
            reservasLoaded: true
        });
        fetch('http://localhost:5555/reserva/activas', {
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
                            reservas: responseJSON.data,
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
        const {id, fecha_inicio_reserva, fecha_fin_reserva, estado, mesaNumero, usuarioRut, reservasLoaded, reservas} = this.state;
        return (
            <div className= "Reservas">
                <button 
                    href="#" 
                    onClick={this.loadReservas} 
                    className="btn btn-primary btn-block btn-large">Reservas  
                </button>
                <br />
                <button 
                    href="#" 
                    onClick={this.loadReservasActivas} 
                    className="btn btn-primary btn-block btn-large">Reservas Actvas 
                </button>
               <ul>
                    {this.state.reservas.map((reserva, i) =>
                        <li key={i}>{reserva.id} - {reserva.fecha_inicio_reserva} - {reserva.fecha_fin_reserva}  - {reserva.estado} -{reserva.mesaNumero} - {reserva.usuarioRut}  </li>
                    )}
                </ul>
               

                
            </div>
        );
    }
}