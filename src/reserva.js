import React, {Component} from 'react';
import {usuario} from './usuario';
import {mesa} from './mesa';

export class reserva extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: [],
            mesa: [],
            fecha_inicio_reserva: props.fecha_inicio_reserva,
            fecha_fin_reserva: props.fecha_fin_reserva,
            estado: false
        }
    }

    loadmesa() {
        this.setState({
            estado: true
        });
        fetch('http://localhost:5555/class/' +
            this.state.fecha_inicio_reserva+
            '/' +
            this.state.fecha_fin_reserva)
            .then(response => response.json())
            .then(responseJSON => {
                console.log('Respuesta easyTable', responseJSON);
                this.setState({
                    listarmesaPressed: true,
                    usuario: responseJSON.data.usuario,
                    mesa: responseJSON.data.mesa
                });
            })
            .catch(error => {
                console.log(':(', error);
            })
    }

    render() {
        const {usuario, mesa, fecha_inicio_reserva,fecha_fin_reserva, estado} = this.state;
        return <div>
         <p>
              <a href='#' onClick= {() => this.loadmesa()}>
                  {usuario}<br/>
                  {mesa}<br/>
                  {fecha_inicio_reserva}<br/>
                  {fecha_fin_reserva}<br/>
                  {estado}<br/>
              </a>
        </p>
    }
}
