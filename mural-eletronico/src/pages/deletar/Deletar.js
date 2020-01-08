import React, { Component } from "react";
import "./Deletar.css";
import { Cabecario } from "../../components/cabecario/Cabecario.js";
import { Header } from '../../components/headerComponent/Header.js';
import { ButtonFormulario } from "../../components/buttonComponent/buttonFormulario/ButtonFormulario.js"
import { InputFormulario } from '../../components/inputsComponents/InputFormulario.js';
import ProdutoService from '../../services/ProdutoService.js';
import Swal from 'sweetalert'

export class DeletarProduto extends Component{
    constructor(){
        super();
        this.state={
            listaProdutos:[],
            id:'',
            name: '',
            valor:'',
            setor:'',
            categoria:'',
            promocao:'',
            editar:false
        }
    }

    componentDidMount() {
        this.produtoService = new ProdutoService()
        this.produtoService.listarProdutos().then((response) => {
            this.setState({
                listaProdutos: response.data
            })
        })
    }

    handleChange = (event) => {
        const target = event.target
        this.setState({
            [target.name]: target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.produtoService.editarProduto(this.state.id,this.state.name.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }),this.state.valor,
        this.state.setor.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }),
            this.state.categoria.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }),this.state.promocao)
            .then((response) => {
                this.setState({ id:'', name:'',valor:'',setor:'',categoria:'' ,promocao:''})
                Swal('Sucesso','Seu produto foi editado com sucesso','success')
            }).catch(err => {
                Swal('Atenção','Algo não saiu como esperado tente de novo!','error')
            })
            


    }

    deletarProduto(id){
        this.produtoService.deletarProduto(id).then(() => {
            Swal('Sucesso','Seu produto foi excluído!','success')
            this.produtoService.listarProdutos().then((response) => {
                this.setState({
                    listaProdutos: response.data
                })
            })
            this.renderContent()
        })
       
    }

    editarProduto= (id,name,valor,categoria,setor) => {
        this.state.editar?this.setState({
            editar:false}):
        this.setState({
            editar:true,
            id:id,
            name:name,
            valor:valor,
            categoria:categoria,
            setor:setor
            
        })
    }

    criarPromocao= (id,name,valor,categoria,setor,promocao) => {
        if(promocao==='Promoção'){

            this.produtoService.criarPromocao(this.state.id,this.state.name.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }),this.state.valor,
            this.state.setor.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }),
            this.state.categoria.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }),"true")
            .then((response) => {
                this.setState({ id:'', name:'',valor:'',setor:'',categoria:'' ,promocao:''})
                Swal('Sucesso','Seu produto está na promoção.','success')
            }).catch(err => {
                Swal('Atenção','Algo não saiu como esperado tente de novo!','error')
            })

        }else{
            this.produtoService.editarProduto(this.state.id,this.state.name.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }),this.state.valor,
            this.state.setor.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }),
            this.state.categoria.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }),"false")
            .then((response) => {
                this.setState({ id:'', name:'',valor:'',setor:'',categoria:'' ,promocao:''})
                Swal('Sucesso','Seu produto não está mais na promoção.','success')
            }).catch(err => {
                Swal('Atenção','Algo não saiu como esperado tente de novo!','error')
            })
        }
        
        
    }

    renderContent() {
        return this.state.listaProdutos.map((item, key) => {
            return <div key={item.id} >
                <ul className='lista'>
                    <li>{item.name.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); })}</li>
                    <li>{item.valor}</li>
                    <li>{item.categoria.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); })}</li>
                    <li>{item.promocao?'Promação':'Não Promoção'}</li>
                    <button className='buttonDeletar' onClick={this.deletarProduto.bind(this,item.id)}>Deletar</button>
                    <button className='buttonEditar' onClick={this.editarProduto.bind(this,item.id,item.name,item.valor,item.categoria,item.setor)} >Editar</button>
                    <button className='buttonPromocao' onClick={this.criarPromocao.bind(this,item.id,item.name,item.valor,item.categoria,item.setor)} >Promoção</button>
                </ul>
            </div>
        })
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
                <ButtonFormulario type='reset' onClick={this.editarState} name="Cancelar"/>
            </div>    
        </form>
    }

    render(){
        return(
            <div className='deletar'>
                <Cabecario name="Deletar e Editar Produtos"/>
                <Header/>
                {this.state.editar?this.renderFormulario():<div>
                    {this.renderContent()}
                </div>}

                
            </div>
        )
    }
}