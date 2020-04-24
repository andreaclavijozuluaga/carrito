import React, { Component } from 'react';
import '../estilos/Ingrediente.css'

class Ingrediente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }

  handleClick = () => {
    this.setState({
      active: !this.state.active
    })

    if (!this.state.active) {
      this.props.seleccionarIngredientes(this.props.product);
    }

    if (this.state.active) {
      this.props.quitarIngredientes(this.props.product);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm text-left">
            <input className="input" type="checkbox"  name="" id="" checked={this.state.active} onClick={() => this.handleClick()} />

            <div className="cantidad border d-inline-block text-center"
                 style={{height: '80px', width: '80px' }}>
              <p className="item">{ this.props.items }</p>
            </div>

            <div className="ingrediente d-inline-block" style={{ position: 'relative', top: '18px' }}>
              <p className="nombre-producto">{ this.props.product }</p>
              <p className="nombre-marca">{ this.props.brand }</p>
              <p className="peso-kg">{ this.props.quantity }</p>            
            </div>        
          </div>

          <div className="col-sm text-right">
            <div className="precio-contenedor " style={{ position: 'relative', top: '18px' }}>
              <p className="precio align-items-end">{ this.props.price } {this.props.currency}</p>
            </div>         
          </div> 
        </div>
        <hr/>
      </div>

    );
  }
}

export default Ingrediente;