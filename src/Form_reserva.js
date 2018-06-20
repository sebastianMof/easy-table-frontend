import React from 'react';
import './App.css';
import urlcodeJson from 'urlcode-json';
import moment from 'moment';

export default class Form_reserva extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            rut: "",
            fecha_inicio_reserva: "",
            fecha_fin_reserva:"",
            capacidad: "",
            mesa: "",
            hora_inicio_reserva:"",
            hora_fin_reserva:"",
            loginError: '',
            url:''
        };

        this.crearReserva = this.crearReserva.bind(this);
    }


    //Crear usuario
    crearReserva(event) {
        event.preventDefault()
        const { rut, fecha_inicio_reserva, fecha_fin_reserva, capacidad, mesa, hora_fin_reserva, hora_inicio_reserva} = this.state
        const data = {
            rut : this.state.rut,
            fecha_inicio_reserva : this.state.fecha_inicio_reserva,
            fecha_fin_reserva : this.state.fecha_fin_reserva,
            hora_inicio_reserva : this.state.hora_inicio_reserva,
            hora_fin_reserva : this.state.hora_fin_reserva,
            capacidad : this.state.capacidad,
            mesa : this.state.mesa
        }

        if (rut && fecha_inicio_reserva && fecha_fin_reserva &&hora_inicio_reserva&&hora_fin_reserva && (capacidad ||mesa)) { 

            console.log(JSON.stringify(data));
            fetch('http://localhost:5555/reserva/', {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body : 
                    JSON.stringify(data),

                })
                .then(response => response.json())
                .then(responseJSON => {
                    console.log('Respuesta backend', responseJSON);
                   
                    if (responseJSON.status !== 200) {
                        this.setState({loginError: responseJSON.message});
                        console.log(this.state.loginError);
                        //mensaje de no disponibilidad
                    
                     } else{
                        //redireccionar a mensaje de creado
                        const url = '/reserva'
                        this.setState(url)
                        
                     }
                  
                }).catch(e =>{
                  console.log(e);
                })
        }
    }

    render(){
        return(
        <div className="Reservar">
            <form method="post">
                <h2> Reservar
                </h2>

                <br />

                FECHA INICIO RESERVA <input type ="date"
                    required="required"
                    value={this.state.fecha_inicio_reserva}
                    onChange={e => this.setState({fecha_inicio_reserva: e.target.value})}/>
                <br />
                HORA INICIO RESERVA <input type ="time"
                    required="required"
                    value={this.state.hora_inicio_reserva}
                    onChange={e => this.setState({hora_inicio_reserva: e.target.value})}/>
                <br />

                FECHA FIN RESERVA <input type ="date"
                    required="required"
                    value={this.state.fecha_fin_reserva}
                    onChange={e => this.setState({fecha_fin_reserva: e.target.value})}/>
                <br />
                HORA FIN RESERVA <input type ="time"
                    required="required"
                    value={this.state.hora_fin_reserva}
                    onChange={e => this.setState({hora_fin_reserva: e.target.value})}/>
                <br />

                RUT <input type ="text"
                    placeholder="12345678-9" required="required"
                    value={this.state.rut}
                    onChange={e => this.setState({rut: e.target.value})}/>
                <br />
                CAPACIDAD <input type ="text"
                    placeholder="4" required="required"
                    value={this.state.capacidad}
                    onChange={e => this.setState({capacidad: e.target.value})}/>
                <br />
                NUMERO DE MESA <input type ="text"
                    placeholder="7" required="required"
                    value={this.state.mesa}
                    onChange={e => this.setState({mesa: e.target.value})}/>
                <br />

                
                <button 
                    href="reserva" 
                    onClick={this.crearReserva} 
                    className="btn btn-primary btn-block btn-large">Crear Reserva  
                </button>

            </form>
        </div>
        );
    }
}