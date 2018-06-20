import React from 'react';
import './App.css';
import urlcodeJson from 'urlcode-json';

export default class Form_regis extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            rut: "",
            nombre: "",
            apellido: "",
            email: "",
            password:"",
            loginError: '',
            url:''
        };

        this.crearUsuario = this.crearUsuario.bind(this);
    }


    //Crear usuario
    crearUsuario(event) {
        event.preventDefault()
        const { rut, password, nombre, apellido, email} = this.state
        const data = {
           "rut" : this.state.rut,
            "tipo_usuario" : 'Cliente',
            "password" : this.state.password,
            "nombre" : this.state.nombre,
            "apellido" : this.state.apellido,
            "email" : this.state.email
        }

        if (rut && password && nombre && apellido &&email) { 
            console.log(this.state.rut);
            fetch('http://localhost:5555/usuario/', {
                method:'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body :JSON.stringify(data)})
                .then(response => response.json())
                .then(responseJSON => {
                    console.log('Respuesta backend', responseJSON);
                   
                    if (responseJSON.status !== 200) {
                        this.setState({loginError: responseJSON.message});
                        console.log(this.state.loginError);
                    
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
        <div className="Registrarse">
            <form  method="post">
                RUT <input type ="text"
                    placeholder="12345678-9" required="required"
                    value={this.state.rut}
                    onChange={e => this.setState({rut: e.target.value})}/>
                <br />
                NOMBRE <input type ="text"
                    placeholder="nombre" required="required"
                    value={this.state.nombre}
                    onChange={e => this.setState({nombre: e.target.value})}/>
                <br />
                APELLIDO <input type ="text"
                    placeholder="apellido" required="required"
                    value={this.state.apellido}
                    onChange={e => this.setState({apellido: e.target.value})}/>
                <br />
                EMAIL <input type ="email"
                    placeholder="email" required="required"
                    value={this.state.email}
                    onChange={e => this.setState({email: e.target.value})}/>
                <br />
                CONTRASEÑA <input type="password"
                    placeholder="password" required="required"
                    value={this.state.password}
                    onChange={e => this.setState({password: e.target.value})}/>
                <br />
                <br />
                <button 
                    href="usuario" 
                    onClick={this.crearUsuario} 
                    className="btn btn-primary btn-block btn-large">Registrarse  
                </button>

            </form>
        </div>
      );
    }
}