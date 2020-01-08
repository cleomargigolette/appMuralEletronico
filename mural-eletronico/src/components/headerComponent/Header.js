import React, {Component } from 'react';
import './Header.css';
import {ButtonHeader} from '../buttonComponent/buttonHeader/buttonHeaderComponent.js';

export class Header extends Component{

    render(){
        return <div className='header'>
            <ButtonHeader name="Cadastrar" route='/cadastro'/>
            <ButtonHeader name="Deletar e Editar" route='/deletar'/>
            <ButtonHeader name="Listar" route='/listar'/>
        </div>
    }
}