import axios from 'axios';
import BaseService from './BaseService.js';

export default class PodutoService extends BaseService {

    cadastrarProduto(name, valor, setor, categoria) {
        const dados = {
            name: name,
            valor: valor,
            setor:setor,
            categoria:categoria

        }

        return axios.post(`${this.baseUrl}`, dados)

    }

    listarProdutos() {
        return axios.get(`${this.baseUrl}`)
    }

    deletarProduto(id){
        return axios.delete(`${this.baseUrl}/`+id)
    }

    editarProduto(id,name, valor, setor, categoria) {
        const dados = {
            id: id,
            name: name,
            valor: valor,
            setor:setor,
            categoria:categoria

        }

        return axios.put(`${this.baseUrl}/`+id, dados)

    }

    criarPromocao(id,name, valor, setor, categoria,promocao) {
        const dados = {
            id: id,
            name: name,
            valor: valor,
            setor:setor,
            categoria:categoria,
            promocao:promocao

        }

        return axios.put(`${this.baseUrl}/`+id, dados)

    }
}