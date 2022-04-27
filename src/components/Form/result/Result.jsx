import React from "react";

import './style.css'

export function Result({ imc }){
  if(!imc) return;
  return(
    <h3>{imc}</h3>
  )
}