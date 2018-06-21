import React from 'react';
import './App.css';
import urlcodeJson from 'urlcode-json';
import {BrowserRouter as Router, Link, NavLink, Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';


export default class Form_login extends React.Component{
  
    constructor(props){
        super(props);
        this.state = {
            rut: '',
            password:  '',
            loginStatus: false
            
        };

        this.onLoginSubmit = this.onLoginSubmit.bind(this);
    }

//Iniciarsesion
    onLoginSubmit(event) {
        event.preventDefault()
        const { rut, password , loginStatus} = this.state
        var str_1 = urlcodeJson.encode( { 
            "rut" : this.state.rut , 
            "password" : this.state.password 
            } , true );
       
        if (rut && password) { 
          fetch('http://localhost:5555/usuario/login?' + str_1 ,{
                method:'GET',
                headers: {
                    'Content-Type': 'application/json'
                },

            })
            .then(response => response.json())
            .then(responseJSON => {
                console.log('Respuesta backend', responseJSON);
                console.log(responseJSON.status);
                if (responseJSON.status !== 1) {
                    
                    console.log('Revisar datos');
                 } else{
                    //redireccionar a mensaje de logeado

                    this.setState({loginStatus: true});
    

                 }  
            }).catch(e =>{
              console.log('catch',e);
            })
        }
    }

    render(){
        return(
        
        <div className="Iniciarsesion">
            <form method="get">
                <h2> Iniciar sesión 
                </h2>

                <br />
                RUT <input type ="text"
                    placeholder="12345678-9" required="required"
                    value={this.state.rut}
                    onChange={e => this.setState({rut: e.target.value})}/>
                <br />
                CONTRASEÑA <input type="password"
                    placeholder="password" required="required"
                    value={this.state.password}
                    onChange={e => this.setState({password: e.target.value})}/>
                <br /> 
                <br />
                <button href="usuario" 
                    onClick={this.onLoginSubmit}
                    className="btn btn-primary btn-block btn-large">Continuar
                </button>
                {
                    this.state.loginStatus ? (<Redirect to='/reserva/capacidad' />) : <div></div>
                }
                

            </form>
            <br />
            
        </div>

        );
    }
}