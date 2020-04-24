import React, { Component } from 'react';
import '../estilos/Boton.css';

class Boton extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
     
          <button className="texto-boton btn btn-success align-content-center btn-lg btn-block">Comprar ingredientes: {this.props.total} {this.props.currency}</button>
    
    );
  }
}

export default Boton;