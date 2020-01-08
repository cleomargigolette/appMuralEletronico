import React, { Component } from 'react';
import { Cadastro } from '../src/pages/cadastro/Cadastro.js';
import { Home } from './pages/home/Home.js';
import { DeletarProduto } from './pages/deletar/Deletar.js';
import { Listar } from '../src/pages/listar/ListarProduto.js';
import { Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
          <Route component={Home} path='/' exact />
          <Route component={Cadastro} path='/cadastro'/>
          <Route component={DeletarProduto} path='/deletar'/>
          <Route component={Listar} path='/listar'/>
          
      </div>
    );
  }
}

export default App;
