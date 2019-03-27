import React, { Component } from 'react';

class Formulario extends Component {

    ciudadRef = React.createRef();
    paisRef = React.createRef();

    buscarClima =(e) =>{
        e.preventDefault();
        //leer los refs y crear objeto
        const respuesta ={
            ciudad :this.ciudadRef.current.value,
            pais : this.paisRef.current.value
        }
        //enviar los props
        console.log(respuesta);
        //resetear el formulario
    }

    render() { 
        return ( 
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <form onSubmit={this.buscarClima}>
                            <div className="input-fiel col s12 m8 l4 offset-m2">
                                <input id="ciudad" type="text" ref={this.ciudadRef}></input>
                                <label htmlFor="ciudad">Ciudad:</label>  
                            </div>
                            <div className="input-fiel col s12 m8 l4 offset-m2">
                                <select ref={this.paisRef}>
                                    <option value="" defaultValue>Elige un pais</option>
                                    <option value="GT" defaultValue>Guatemala</option>
                                    <option value="AR" defaultValue>Argentina</option>
                                    <option value="CO" defaultValue>Colombia</option>
                                    <option value="CR" defaultValue>Costa Rica</option>
                                    <option value="ES" defaultValue>España</option>
                                    <option value="US" defaultValue>Estados Unidos</option>
                                </select>
                                <label htmlFor="pais">Pais:</label> 
                            </div>
                            <div className="input-field col s12 m8 l4 offset-2 buscador">
                                <input type="submit" className="waves-effect waves.light btn-large yellow accent-4" value="Buscar"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Formulario;