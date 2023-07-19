//Crie uma função que receba dois números como parâmetros e retorne a soma deles
let resultado = document.querySelector(".resultado")

function soma(num1, num2) {
    const resultado = num1 + num2;
    return resultado;
  }
  
let num1 = Number(prompt("Digite o primeiro número"));
let num2 = Number(prompt("Digite o segundo número"))
console.log(soma);
resultado.innerHTML = soma(num1, num2)