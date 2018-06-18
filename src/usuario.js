import React, {Component} from 'react';

export class usuario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rut: props.nombre,
            tipo_usuario: props.tipo_usuario,
            nombre: props.rut,
            apellido: props.apellido,
            email: props.email,
            //telefono: props.telefono,
            password: props.password
        }
    }

    render() {
        const {rut, tipo_usuario, nombre, apellido, email} = this.state;
        return <p>
            {rut}<br/>
            {tipo_usuario}<br/>
            {nombre}<br/>
            {apellido}<br/>
            {email}<br/>
        </p>
    }
}
