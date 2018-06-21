import React, {Component} from 'react';
import {reserva} from './reserva';
import moment from 'moment';


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
            reservasLoaded: false,
            reservas: []
        }
        this.loadReservas = this.loadReservas.bind(this);
        this.loadReservasActivas = this.loadReservasActivas.bind(this);

    }

    loadReservas() {
        if(this.state.reservasLoaded === true){
            this.setState({    
                reservasLoaded: false
            });
        }else{
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
    }

    loadReservasActivas() {
        if(this.state.reservasLoaded === true){
            this.setState({    
                reservasLoaded: false
            });
        }else{

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
                    className="btn btn-primary btn-block btn-large">Reservas Activas 
                </button>
                <br />
                {reservasLoaded ? 
                    <ul>
                        {this.state.reservas.map((reserva, i) =>
                            <li key={i}> 
                                ID: {reserva.id}<br />
                                NUMERO MESA: {reserva.mesaNumero}<br />
                                USUARIO: {reserva.usuarioRut}<br /> 
                                INICIO: {reserva.fecha_inicio_reserva}<br />
                                FIN: {reserva.fecha_fin_reserva}<br />
                            </li>
                        )}
                    </ul>
                    : 
                    <div></div>
                }
   
            </div>
        );
    }
}