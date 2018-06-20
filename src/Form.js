import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import {usuario} from "./usuario";
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
    //<form  onSubmit={this.onLoginSubmit.bind(this)}>
    <div class="Iniciarsesion">
      <form method="post">
      <h2> Iniciar sesión </h2>

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
      <br /> <br /> <br />
      <button href="usuario" onClick={this.onLoginSubmit} class="btn btn-primary btn-block btn-large">Continuar</button>
      </form>
      <br />
      <span className="App-sub" >
          <a href="Form_regis" style={{
              color: '#000'
          }} onClick={() => this.CrearUsuario()}>Crear Cuenta</a> </span>
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
      <span className="App-sub" >
              <a href="recuperar" style={{
                  color: '#000'
              }} onClick={() => this.Recuperar_contraseña()}>Recuperar Contraseña</a></span>

/*              if(this.state.url !== ''){
                
                <Redirect to = {this.state.url}/>
              }*/

              
</div>

    /*<input type="submit" value="Continuar"/>

    </form>*/

  );
}
}