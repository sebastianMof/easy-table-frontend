import React from 'react';
import './App.css';
import urlcodeJson from 'urlcode-json';


export default class Form_reserva_numero extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            rut: "",
            fecha_inicio_reserva: "",
            fecha_fin_reserva:"",
            mesa: "",
            hora_inicio_reserva:"",
            hora_fin_reserva:""
        };

        this.crearReserva = this.crearReserva.bind(this);
    }


    //Crear usuario
    crearReserva(event) {
        event.preventDefault()
        const { rut, fecha_inicio_reserva, fecha_fin_reserva, mesa, hora_fin_reserva, hora_inicio_reserva} = this.state
        const data = {
            rut : this.state.rut,
            fecha_inicio_reserva : this.state.fecha_inicio_reserva,
            fecha_fin_reserva : this.state.fecha_fin_reserva,
            hora_inicio_reserva : this.state.hora_inicio_reserva,
            hora_fin_reserva : this.state.hora_fin_reserva,
            mesa : this.state.mesa
        }

        if (rut && fecha_inicio_reserva && fecha_fin_reserva &&hora_inicio_reserva&&hora_fin_reserva && mesa) { 

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
                   
                    if (responseJSON.status !== 1) {
                        this.setState({loginError: responseJSON.message});

                        //mensaje de no disponibilidad
                    
                     } else{
                        //redireccionar a mensaje de creado
                        console.log(':D');
                        
                     }
                  
                }).catch(e =>{
                  console.log(e);
                })
        }
    }

    render(){
        return(
        <div className="Reservar por número de mesa">
            <form method="post">
                <h2> Reservar
                </h2>

                <br />

                FECHA INICIO RESERVA <input type ="date"
                    min="2018-06-21" max="2019-06-21"
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