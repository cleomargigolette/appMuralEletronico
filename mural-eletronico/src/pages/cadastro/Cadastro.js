import React, { Component} from 'react';
import './Cadastro.css';
import { Header } from '../../components/headerComponent/Header.js';
import { Cabecario } from '../../components/cabecario/Cabecario.js';
import { ButtonFormulario } from "../../components/buttonComponent/buttonFormulario/ButtonFormulario.js"
import { InputFormulario } from '../../components/inputsComponents/InputFormulario.js';
import ProdutoService from '../../services/ProdutoService.js';
import swal from 'sweetalert'

export class Cadastro extends Component{

    constructor(){
        super();
        this.state = {
            name: "",
            valor:'',
            setor:"",
            categoria:''
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
        this.produtoService.cadastrarProduto(this.state.name,this.state.valor,this.state.setor,
            this.state.categoria)
            .then((response) => {
                this.setState({ id: response.data.id })
                swal('Sucesso','Seu produto foi cadastrado com sucesso','success')
            }).catch(err => {
                swal('Atenção','Algo não saiu como esperado tente de novo!','error')
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
               <select name="categoria" value={this.state.categoria} onChange={this.handleChange}>
                   <option value=" "> </option>
                    <option value="bovino" >BOVINO</option>
                    <option value="suino" >SUÍNO</option>
                    <option value="ave" >AVE</option>
                </select>
               <label className='labelCadastro'>Setor Produto:</label>
               <select name="setor" value={this.state.setor} onChange={this.handleChange}>
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
