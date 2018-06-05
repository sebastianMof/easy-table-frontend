import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import {Tabs, Col, Tab, ButtonToolbar, Button, FormGroup, FormControl, ControlLabel, Alert} from 'react-bootstrap'
//import Form_regis from "./Form_regis";
//import {Tabs, Col, Tab, ButtonToolbar, Button, FormGroup, FormControl, ControlLabel, Alert} from 'react-bootstrap'
//import AuthService from 'utils/AuthService'
//import styles from './styles.module.css'

export default class Form extends React.Component{
  state = {
    rut: "",
    password:""
  };

  onLoginSubmit(event) {
    event.preventDefault()
    const { rut, password } = this.state
    if (rut && password) { //verificar que existe user
      this.props.auth.login(rut, password)
        .then(result => {
          if (!result.token) {
            this.setState({loginError: result.message})
            return
          }
          this.props.auth.finishAuthentication(result.token)
          this.context.router.push('/Form_regis')
        })
    }
  }

  /*onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);*/

  //  this.props.onSubmit(this.state=>"window.location.href='/Form_regis'");
    //console.log(this.state);
  //};
      //---------------funciones

      //Form_regis( rut, password){
      //  fetch('https://localhost:555/Form_regis')
    //  }

    onSignupSubmit(event) {
      event.preventDefault()
      const { rut, nombre, apellido, email, password } = this.state
      /*if (rut && nombre && apellido && email && password) {
        this.props.auth.signup(rut, nombre, apellido, email, password)
          .then(result => {
            if (!result.token) {
              this.setState({signupError: result.message})
              return
            }
            this.props.auth.finishAuthentication(result.token)
            //this.context.router.push('/Form_regis')
          })
      }*/
      this.context.router.push('/Form')
    }

    onSubmitCrear = (fields)=>{
      console.log("Form_regis",fields);
    }
    onSubmit = (fields)=>{
    console.log("App", fields);
  }

  CrearUsuario() {
      fetch('http://localhost:5555/usuario/')
          .then(response => response.json())
          .then(responseJSON => {
              console.log("Form_regis", responseJSON);
              this.setState({
                  usuario: responseJSON.data
              });
          })
          .catch(error => {
              console.log(':(', error);
          })
      //
  }

  Recuperar_contraseña() {
      fetch('http://localhost:5555/usuario/')
          .then(response => response.json())
          .then(responseJSON => {
              console.log("Form_regis", responseJSON);
              this.setState({
                  usuario: responseJSON.data
              });
          })
          .catch(error => {
              console.log(':(', error);
          })
      //
  }



render(){
  return(
    //<form  onSubmit={this.onLoginSubmit.bind(this)}>
    <div class="Iniciarsesion">
      <form method="post">
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
      <br /> <br />
      <button type="onLoginSubmit" class="btn btn-primary btn-block btn-large">Continuar</button>
      </form>
      <br />
      <span className="App-sub" >
          <a href="usuario" style={{
              color: '#000'
          }} onClick={() => this.CrearUsuario()}>Crear Cuenta</a> </span>
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
      <span className="App-sub" >
              <a href="recuperar" style={{
                  color: '#000'
              }} onClick={() => this.Recuperar_contraseña()}>Recuperar Contraseña</a></span>

</div>
    /*<input type="submit" value="Continuar"/>

    </form>*/

  );
}
}


/*
-----------
linea 70   //  onChange={e => this.setState({rut: e.target.value})}/>
linea 77   onChange={e => this.setState({password: e.target.value})}/>
<button onClick={e => this.onSubmit(e)}>Continue</button>
<input type="submit" value="Iniciar sesión"/>
<a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Primary link</a>
-----------
<button onClick={e => this.onSubmit(e)}>Iniciar Sesión</button>
<button onClick={e => this.onSubmit(e)}>Submit</button>
<p> <input type="submit" value="Iniciar sesión"/></p>
<br />
<input type="submit" value="Registrarse"/> <input type="submit" value="Recuperar contraseña"/>
*/

/*-----------------fecha-------------------- https://www.w3schools.com/Html/tryit.asp?filename=tryhtml_input_date_max_min
<form action="/action_page.php">
Enter a date before 1980-01-01:<br>
<input type="date" name="bday" max="1979-12-31"><br><br>
Enter a date after 2000-01-01:<br>
<input type="date" name="bday" min="2000-01-02"><br><br>
<input type="submit">
</form>*/
