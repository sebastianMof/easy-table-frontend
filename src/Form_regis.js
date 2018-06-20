import React from 'react';
import './App.css';
import Form from './Form';
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

        this.onLoginSubmit = this.onLoginSubmit.bind(this);
    }
    //Iniciarsesion
  onLoginSubmit(event) {
    event.preventDefault()
    const { rut, password } = this.state
    var str_1 = urlcodeJson.encode( { "rut" : this.state.rut , "password" : this.state.password } , true );
   
    if (rut && password) { //verificar que existe user
      
      fetch('http://localhost:5555/usuario/login?' + str_1)
        .then(result => {
          if (result.status !== 200) {
            this.setState({loginError: result.message});
            console.log('loging');
            
          } else{
            //redireccionar
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
            <form action_page="./Form" method="post">
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
                <button type="onLoginSubmit" 
                    class="btn btn-primary btn-block btn-large">Registrarse  
                </button>

            </form>
        </div>
      );
    }
}