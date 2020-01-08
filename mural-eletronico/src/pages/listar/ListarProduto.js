import React, { Component } from 'react';
import './ListarProduto.css';
import ProdutoService from '../../services/ProdutoService.js';

export class Listar extends Component {
    constructor(){
        super();
        this.state={
            listaProdutos:[],
            listasProdutos:[]
        }
    }
    componentDidMount(){
        this.produtoService = new ProdutoService();
        this.produtoService.listarProdutos().then((response) => {
            this.setState({
                listaProdutos: response.data
            })
        })
    }
    
    render(){
        return(this.state.listaProdutos.map((item, key) => {
            return(
            <div key={item.id} >
                <ul className='listar'>
                    <li>{item.name.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); })}</li>
                    <li>R$ {item.valor}</li>
                </ul>
            </div>
        )}))
    }
}