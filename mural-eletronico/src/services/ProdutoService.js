import axios from 'axios';
import BaseService from './BaseService.js';

export default class PodutoService extends BaseService {

    cadastrarProduto(name, valor) {
        const dados = {
            name: name,
            valor: valor
        }

        return axios.post(`${this.baseUrl}`, dados)

    }

    listarProdutos() {
        return axios.get(`${this.baseUrl}painel`)
    }
}