import React, { Component} from 'react';
import './Cadastro.css';
import { Header } from '../../components/headerComponent/Header.js';
import { Cabecario } from '../../components/cabecario/Cabecario.js';
import { ButtonFormulario } from "../../components/buttonComponent/buttonFormulario/ButtonFormulario.js"
import { InputFormulario } from '../../components/inputsComponents/InputFormulario.js';
import ProdutoService from '../../services/ProdutoService.js'

export class Cadastro extends Component{

    constructor(){
        super();
        this.state = {
            name: "",
            valor:''
        }
        
    }

    componentDidMount() {
        this.produtoService = new ProdutoService()

    }

    handleChange = (event) => {
        const target = event.target
        this.setState({
            [target.name]: target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.produtoService.cadastrarProduto(this.state.name,this.state.valor)
            .then((response) => {
                this.setState({ id: response.data.id })
                alert('Produto cadastro com sucesso!')
            }).catch(err => {
                console.log("ESTOU AQUI");
                alert('Algo não saiu como esperado tente de novo!')
            })

    }
    
    render(){
        return <div className="cadastro">
           <Cabecario name="Cadatro de Produtos"/>
           <Header/>
           <form className="formCadastro" onSubmit={this.onSubmit}>
               <label className='labelCadastro'>Nome Produto:</label>
               <InputFormulario name='name' tipo={'text'} value={this.state.name} onChange={this.handleChange}/>
               <label className='labelCadastro'>Valor Produto:</label>
               <InputFormulario name="valor" tipo={'number'} value={this.state.valor} onChange={this.handleChange}/> 
               <label className='labelCadastro'>Categoria Produto:</label>
               <select >
                   <option value=" "> </option>
                    <option value="bovino" >BOVINO</option>
                    <option value="suino" >SUÍNO</option>
                    <option value="ave" >AVE</option>
                </select>
               <label className='labelCadastro'>Setor Produto:</label>
               <select>
                   <option value=" "></option>
                    <option value="acougue" >AÇOUGUE</option>
                    <option value="padaria" >PADARIA</option>
                    <option value="loja" >LOJA</option>
                </select>
                <div>
                    <ButtonFormulario name="Salvar"/>
                    <ButtonFormulario name="Cancelar"/>
                </div>    
           </form>
        </div>
    }
}
