import React, { Component } from 'react';
import './Cabecario.css'

export class Cabecario extends Component{
    render(){
        return <div className='cabecario'>{this.props.name}</div>
    }
} 