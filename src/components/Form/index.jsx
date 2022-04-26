import React, { Component } from "react";

import './form.css'

export default class Form extends Component {
  state = {
    weight: 0,
    height: 0,
    imc: 0
  };

  handleChangeWeight(weight) {
    if(weight < 0) {
      alert('Insira um valor maior que 0') 
      location.reload()
    }
    this.setState({
      weight: Number(weight.replace(/\,/, '.'))
    })
  };

  handleChangeHeight(height) {
    if(height < 0 ) {
      alert('Insira uma altura válida') 
      location.reload()
    }
    this.setState({
      height: Number(height.replace(/\,/, '.'))
    })
  };

  handleSubmit = (e) => {
    e.preventDefault()
    const { weight, height } = this.state
    const h3 = document.querySelector('h3')

    if(isNaN(weight) || isNaN(height)) {
      alert('insira m valor válido')
    }
    
    if(weight < height){
      h3.innerHTML = 'Porque sua Altura e maior que seu peso? Valor invalido! Digite novamente!'
      h3.style.display = 'block'
      h3.style.backgroundColor = 'rgb(230, 122, 145)'
      return;
    }

    
    let result = ((weight / Math.pow(height, 2)))

    h3.innerHTML = result.toFixed(2)
    h3.style.display = 'block'
  };

  render(){
  return(
    <form action='#' onSubmit={this.handleSubmit}>
        <h1>Calcule seu IMC</h1>
        <input
        type="number"
        placeholder="peso" 
        onChange={e => this.handleChangeWeight(e.target.value)}
        required
        min="1"
        step="0.01">
        </input>

        <input
        type='number'
        placeholder="altura" 
        onChange={e => this.handleChangeHeight(e.target.value)}
        required
        min="1"
        step="0.01">
        </input>

        <button type="submit">Calcular</button>

        <h3></h3>
      </form>
  );
  }
}