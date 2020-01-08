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
        this.produtoService.cadastrarProduto(this.state.name.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }),this.state.valor,
        this.state.setor.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }),
            this.state.categoria.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }))
            .then((response) => {
                this.setState({ name:'',valor:'',setor:'',categoria:'' })
                swal('Sucesso','Seu produto foi alterado.','success')

            }).catch(err => {
                swal('Atenção','Algo não saiu como esperado tente de novo!','error')
            })
            this.renderFormulario()

    }

    renderFormulario(){
        return  <form className="formCadastro" onSubmit={this.onSubmit}>
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
                <ButtonFormulario type='submit' name="Salvar"/>
            </div>    
        </form>
    }

    render(){
        return <div className="cadastro">
           <Cabecario name="Cadatro de Produtos"/>
           <Header/>
           {this.renderFormulario()}          
        </div>
    }
}
