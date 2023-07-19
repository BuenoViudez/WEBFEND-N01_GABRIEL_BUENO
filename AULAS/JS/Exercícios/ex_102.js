// Crie uma função que receba um número como parâmetro e retorne true se ele for par e false se for ímpar.

let resultado = document.querySelector(".resultado")

function verificarPar(numero) {
    if (numero % 2 === 0) {
        texto = "Par"
        return texto;
       
    } else {
        texto = "Impar"
        return texto;
    }
}
let num1 = Number(prompt(`Digite um numero`))

resultado.innerHTML = verificarPar(num1)