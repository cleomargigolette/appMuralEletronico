import React, {Component, Fragment} from 'react';
import './Home.css';
import { Header } from '../../components/headerComponent/Header.js';
import { Cabecario} from '../../components/cabecario/Cabecario.js';
import { Redirect } from 'react-router-dom';

export class Home extends Component{
    constructor(){
        super();
        this.state={
            redirectCadastro:false,
            redirectLista:false,
            redirectEditar:false,
            redirectDeletar:false
        }
    }

    cadastrar(){
        this.setState.redirectCadastro = true;
    }

    render(){
        return( 
        <Fragment> 
            {this.state.redirectCadastro} ?<Redirect to='/cadastro' />
            <div className="containerPrincipal">
                <Cabecario name="Painel Eletrônico"/>
                <Header />
            </div>
        </Fragment>)
    }
}