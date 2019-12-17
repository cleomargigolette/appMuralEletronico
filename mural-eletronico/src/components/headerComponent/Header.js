import React, {Component } from 'react';
import './Header.css';
import {ButtonHeader} from '../buttonComponent/buttonHeader/buttonHeaderComponent.js'

export class Header extends Component{


    onclick(){
        
    }

    render(){
        return <div className='header'>
            <ButtonHeader name="Cadastrar Produto"/>
            <ButtonHeader name="Editar Produto"/>
            <ButtonHeader name="Deletar Produto"/>
            <ButtonHeader name="Listar Produtos" />
        </div>
    }
}