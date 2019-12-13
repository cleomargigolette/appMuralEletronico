import React, { Component} from 'react';
import './Cadastro.css';
import { Header } from '../../components/headerComponent/Header.js';
import { Cabecario } from '../../components/cabecario/Cabecario.js';


export class Cadastro extends Component{
    render(){
        return <div className="cadastro">
           <Cabecario/>
           <Header/>
           <form className="formCadastro">
               <legend>Cadastro</legend>
               <label className='labelCadastro'>Nome Produto:</label>
               <input autoComplete name='nomeProduto'/>
               <label className='labelCadastro'>Valor Produto:</label>
               <input autoComplete name='valorProduto'/>
               <label className='labelCadastro'>Categoria Produto:</label>
               <input autoComplete name='categoriaProduto'/>
               <label className='labelCadastro'>Setor Produto:</label>
               <input autoComplete name='setorProduto'/>
               <button type="btn_submit" value="Enviar"/>
           </form>
        </div>
    }
}
