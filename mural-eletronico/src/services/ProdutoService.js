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
}