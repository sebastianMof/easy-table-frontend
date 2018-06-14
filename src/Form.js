import React, { Component } from 'react';


class Form extends Component {

    state ={
        nombre :'',
        apellido :'',
        email :'',
        rut : '',
        password :''
    }

    change = e => {
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    onSubmit =(e)=>{
        e.preventDefault();
        //this.props.onSubmit();
        this.setState({
            nombre :'',
            apellido :'',
            email :'',
            rut : '',
            password :''
        });
        this.props.onChange({
            nombre :'',
            apellido :'',
            email :'',
            rut : '',
            password :''
        });
    }




    render() {
        return(
            <form>
                <input 
                    name = 'nombre'
                    placeholder = "Nombre"
                    value={this.state.nombre} 
                    onChange ={e => this.change(e) } 
                />
                <br />
                <input 
                    name = 'apellido'
                    placeholder = "Apellido" 
                    value={this.state.apellido} 
                    onChange ={e => this.change(e) } 
                />
                <br />
                <input 
                    name = 'email'
                    placeholder = "ejemplo@correo.cl" 
                    value={this.state.email} 
                    onChange ={e => this.change(e) } 
                />
                <br />
                <input 
                    name = 'rut'
                    placeholder = "11111111-1" 
                    value={this.state.rut} 
                    onChange ={e => this.change(e) } 
                />
                <br />
                <input 
                    name = 'password'
                    type =  'password'
                    placeholder = "Contraseña"
                    value={this.state.password} 
                    onChange ={e => this.change(e) } 
                />
                <br />
                

                <button onClick={e => this.onSubmit(e)} > 
                    Submit 
                </button>


            </form>
        );
    }

}


export default Form;

