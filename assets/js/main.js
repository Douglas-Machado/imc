const submit = document.getElementById("submit");
var result = document.getElementById("result");

function getImc (weight, height){
  let value = (weight.value / Math.pow(height.value, 2));
  if(isNaN(value)){
    alert("Insira um número")
    location.reload();
  }
  return(value)
}

function getImcLevel (){
  event.preventDefault()
  const weight = document.getElementById("input-1");
  const height = document.getElementById("input-2");
  imc = getImc(weight, height);

  
  let answer
  console.log(imc)
  if(imc < 18.5){
    answer = "Abaixo do peso"
  }else if(imc >= 18.5){
    answer = "Peso normal"
  }else if(imc >= 24.9){
    answer = "Sobrepeso"
  }else if(imc >= 29.9){
    answer = "Obesidade grau 1"
  }else if(imc >= 34.9 && imc < 40){
    answer = "Obesidade grau 2"
  }else{
    answer = "Obesidade grau 3"
  }

  result.style.display = "block"
  document.getElementById("result-text").innerHTML = `Seu IMC é ${imc.toFixed(2)} (${answer})`;
}

submit.addEventListener("click", getImcLevel)
