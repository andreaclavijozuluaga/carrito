import React, { Component } from 'react'
import Encabezado from './Encabezado.jsx';
import Ingrediente from './Ingrediente.jsx';
import Boton from './Boton.jsx';
import Resultado from './Resultado.jsx';
import axios from 'axios';


class Contenedor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredientsSeleccionados: [],
      gastosDeEnvio: 7
    };
  }

  componentDidMount() {
    axios.get(`https://recipe-rissoto.now.sh/recipe`)
      .then(res => {
        const data = res.data;
        this.setState({
          name: data.name,
          shippingCost: data['shipping-cost'],
          currency: data.currency,
          ingredients: data.ingredients,
        });
      })
  }

  seleccionarIngredientes = (ingredienteNombre) => {
    let ingredientes = this.state.ingredients;
    let newIngrediente = null;

    ingredientes.forEach((ingrediente) => {
      if (ingrediente.product === ingredienteNombre) {
        newIngrediente = ingrediente;
      }
    });

    let ingredientsSeleccionados = this.state.ingredientsSeleccionados;
    ingredientsSeleccionados.push(newIngrediente);
    
    this.setState(prevState => ({
      ingredientsSeleccionados: [...new Set(ingredientsSeleccionados.flat())]
    }));

    this.calcular();
  };

  quitarIngredientes = (ingredienteNombre) => {
    let ingredientesSeleccionados = this.state.ingredientsSeleccionados;
  
    ingredientesSeleccionados.forEach((ingrediente, index) => {
      if (ingrediente.product === ingredienteNombre) {
        ingredientesSeleccionados.splice(index, 1);
      }
    });

    this.setState(prevState => ({
      ingredientsSeleccionados: [...new Set(ingredientesSeleccionados.flat())]
    }));

    this.calcular();
  }

  calcular = () => {
    const precios = this.state.ingredientsSeleccionados.map((ingredient) => {
      return ingredient.price
    });

    const subtotal = precios.reduce((sum, x) => sum + x);
    const total = subtotal + this.state.gastosDeEnvio;

    this.setState({
      subtotal: subtotal,
      total: total
    });
  }

  render() {
    return (
      <div>
        <Encabezado name={this.state.name} />
        {this.state.ingredients && this.state.ingredients.map((ingredient, i) =>
          <Ingrediente
            key={i}
            product={ingredient.product}
            brand={ingredient.brand}
            items={ingredient.items}
            quantity={ingredient.quantity}
            price={ingredient.price}
            currency={this.state.currency}
            seleccionarIngredientes={this.seleccionarIngredientes}
            quitarIngredientes={this.quitarIngredientes} />
        )}

        <Resultado
          items={this.state.ingredientsSeleccionados.length}
          subtotal={this.state.subtotal}
          gastosDeEnvio={this.state.gastosDeEnvio}
          total={this.state.total} />
        <Boton total={this.state.total} />   
        
      </div>  

    );
  }
}

export default Contenedor;