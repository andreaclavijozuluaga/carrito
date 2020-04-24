import React, { Component } from 'react';
import '../estilos/Encabezado.css';

class Encabezado extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (

      <div className="container">
        <p className="texto-ingredientes text-left">
          INGREDIENTES
        </p>
        <h1 className="text-nombre-plato text-left">
          { this.props.name }
        </h1>
        <div className="row">
          <div className="col-md-12">
            <p className="texto-seleccionar-todo text-left">  <a href="">Seleccionar todo</a> | <a href="">Deseleccionar todo</a> </p>
          </div>
        </div>
        <hr/>
      </div>
    );
  }
}

export default Encabezado;