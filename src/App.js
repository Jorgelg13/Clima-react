import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Mensaje from './componentes/Mensaje';
import Clima from './componentes/Clima';

class App extends Component {

  state={
    error: false,
    consulta :{},
    resultado :{}
   }

  componentDidUpdate(prevProps, prevState){
    if(prevState.consulta !== this.state.consulta){
      this.consultarApi();
    }
  }

  componentDidMount(){
    this.setState({
      error:false
    })
  }

  consultarApi = () =>{
    const {ciudad, pais} = this.state.consulta;
    if(!ciudad || !pais) return null;

    const appId = '886ff7587c40488244511170488df015';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&APPID=${appId}`;
    //console.log(url);
    //realizar una consulta con fetch api
    fetch(url)
    .then(respuesta =>{
      return respuesta.json();
    })
    .then(data => {
      //console.log(data);
      this.setState({
        resultado :data
      })
    }).catch(error =>{
      console.log(error)
    })
  }

  datosConsulta = respuesta =>{
    if(respuesta.ciudad === '' || respuesta.pais ===''){
      this.setState({
        error: true
      })
    } else{
        this.setState({
           consulta : respuesta,
           error : false
        })
    }
  }

  render() {

    const error = this.state.error;
    let resultado ;
    if(error){
      resultado = <Mensaje mensaje="Ambos campos son obligatorios"></Mensaje>
    } else{
       resultado = <Clima resultado={this.state.resultado} ></Clima>

    }

    return (
      <div className="App">
        <Header titulo="Clima React"></Header>
        <Formulario
        datosConsulta ={this.datosConsulta}
        />
        {resultado}
      </div>
    );
  }
}

export default App;
