import React, {Component} from 'react';
import {mesa} from './mesa';


export default class Mesas extends Component {
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

        if(this.state.mesasLoaded === true){
            this.setState({    
            mesasLoaded: false
            });
        }else{
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
                                   
                        //mensaje de error al cargar mesas del local
                    
                } else{
                        this.setState({    
                            mesas: responseJSON.data,
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
        const {numero, capacidad, mesasLoaded, mesas} = this.state;
        return (
            <div className= "MesasLocal">
                <button 
                    href="#" 
                    onClick={this.loadMesas} 
                    className="btn btn-primary btn-block btn-large">Mesas  
                </button>


                { mesasLoaded ? 
                    <h3>
                        Mesas en Local
                        <ul>
                            {this.state.mesas.map((mesa, i) =>
                                <li key={i}>
                                NUMERO {mesa.numero} <br />
                                CAPACIDAD {mesa.capacidad}<br />
                                </li>
                            )}<br />
                        </ul>
                    </h3>

                    :
                    <div></div>
                }
               
               

                
            </div>
        );
    }
}