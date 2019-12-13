import React, { Component } from 'react';
import { Home } from './pages/home/Home.js';
import { Cadastro } from '../src/pages/cadastro/Cadastro.js';

class App extends Component {
  render() {
    return (
      <div>
          <Cadastro/>
      </div>
    );
  }
}

export default App;
