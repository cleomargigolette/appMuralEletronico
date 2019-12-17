import React, {Component} from 'react';
import './Home.css';
import { Header } from '../../components/headerComponent/Header.js'
import { Cabecario} from '../../components/cabecario/Cabecario.js'

export class Home extends Component{
    render(){
        return <div className='containerPrincipal'>
            <Cabecario name="Painel Eletrônico"/>
            <Header/>
        </div>
    }
}