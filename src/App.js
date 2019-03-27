import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header titulo="Clima React"></Header>
        <Formulario></Formulario>
      </div>
    );
  }
}

export default App;
