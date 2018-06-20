import React from 'react';
import './App.css';
import urlcodeJson from 'urlcode-json';


export default class Form extends React.Component{
  
    constructor(props){
        super(props);
        this.state = {
            rut: '',
            password:  '',
            loginError: '',
            url:''
        };

        this.onLoginSubmit = this.onLoginSubmit.bind(this);
    }

//Iniciarsesion
    onLoginSubmit(event) {
        event.preventDefault()
        const { rut, password } = this.state
        var str_1 = urlcodeJson.encode( { 
            "rut" : this.state.rut , 
            "password" : this.state.password 
            } , true );
       
        if (rut && password) { 
          fetch('http://localhost:5555/usuario/login?' + str_1)
            .then(result => {
              if (result.status !== 200) {
                this.setState({loginError: result.message});
                console.log('loging');
                
              } else{
                //redireccionar a donde corresponda cuanto login es exitoso
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
                <br />

                CONTRASEÑA <input type="password"
                    placeholder="password" required="required"
                    value={this.state.password}
                    onChange={e => this.setState({password: e.target.value})}/>

                <br /> 
                <br /> 
                <br />

                <button href="usuario" 
                    onClick={this.onLoginSubmit} 
                    className="btn btn-primary btn-block btn-large">Continuar
                </button>

            </form>
            <br />
            <span className="App-sub" >
                <a href="Form_regis" 
                    style={{color: '#000'}} 
                    //redireccionar a Form_regis
                    onClick={() => this.crearUsuario()}>Crear Cuenta
                </a> 
            </span>  
        </div>

        );
    }
}