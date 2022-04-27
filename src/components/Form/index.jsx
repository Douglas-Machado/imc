import React, { Component } from "react";
import { Result } from "./result/result"; 

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

    if(isNaN(weight) || isNaN(height)) {
      alert('insira um valor válido')
      return;
    }else if(weight <= height){
      alert('insira um valor válido')
      return;
    }

    let result = (weight / Math.pow(height, 2)).toFixed(2)

    this.setState({
      imc: result
    })
  };

  render(){
    const { imc } = this.state
  return(
    <form action='#' onSubmit={this.handleSubmit}>
        <h1>Calcule seu IMC</h1>
        <input
        type="number"
        placeholder="peso(Kg)" 
        onChange={e => this.handleChangeWeight(e.target.value)}
        required
        min="1"
        step="0.01">
        </input>

        <input
        type='number'
        placeholder="altura(m)"
        onChange={e => this.handleChangeHeight(e.target.value)}
        required
        min="1"
        step="0.01">
        </input>

        <button type="submit">Calcular</button>

        <Result
        imc={imc}
        />
      </form>
  );
  }
}