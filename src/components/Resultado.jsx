import React, { Component } from 'react'
import '../estilos/Resultado.css'

class Resultado extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="container">
        <div className="col-sm text-left">
        <p className="texto-item">Item: <span className="contador-items">{ this.props.items }</span></p>

        <div className="d-flex justify-content-between">
          <div className="texto-subtotal">Subtotal</div>
          <div className="valor-item">{ this.props.subtotal } {this.props.currency}</div>
        </div>
        
        <div className="d-flex justify-content-between">
          <div className="gastos-de-envio">Gastos de envio</div>
          < div className="valor-item"> { this.props.gastosDeEnvio } {this.props.currency}</div>
        </div>
        
        <div className="d-flex justify-content-between">
          <div className="texto-total">Total</div>
          <div className="valor-item">{ this.props.total } {this.props.currency}</div>
        </div>
    
        </div>
      </div>
    );
  }
}
 
export default Resultado;