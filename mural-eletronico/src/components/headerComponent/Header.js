import React, {Component } from 'react';
import './Header.css';
import {ButtonHeader} from '../buttonComponent/buttonHeaderComponent.js'

export class Header extends Component{
    render(){
        return <div className='header'>
            <ButtonHeader name="Cadastrar Produto"/><a></a>
            <ButtonHeader name="Editar Produto"/>
            <ButtonHeader name="Deletar Produto"/>
            <ButtonHeader name="Listar Produtos" />
        </div>
    }
}