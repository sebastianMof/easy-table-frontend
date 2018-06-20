import React, {Component} from 'react';
import '../App.css';
import ReactDOM from 'react-dom';
import {browserHistory, Router, Route, Redirect, Link} from 'react-router';

export class mesa extends Component {
  /*  constructor(props) {
        super(props);
        this.state = {
            numero: props.numero,
            capacidad: props.capacidad,
            //rut: props.rut,
            //password: props.password
        }
    }*/
    constructor(props, context) {
  super(props, context)
  this.state = {
    mesas: [],
    numero: props.numero,
    capacidad: props.capacidad,
  }
}

    render() {
        const {numero, capacidad} = this.state;
        return <p>
            {numero}<br/>
            {capacidad}<br/>sjfhdjfhsjk
            <div jasdkljadkslj />
        </p>
    }
}
