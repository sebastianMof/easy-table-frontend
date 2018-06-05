import React, {Component} from 'react';

export class mesa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numero: props.numero,
            capacidad: props.capacidad,
            //rut: props.rut,
            //password: props.password
        }
    }

    render() {
        const {numero, capacidad} = this.state;
        return <p>
            {numero}<br/>
            {capacidad}<br/>
        </p>
    }
}
