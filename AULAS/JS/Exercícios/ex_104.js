// Crie uma função que receba um array de números como parâmetro e retorne o menor número do array.

// let numero = document.querySelector(".resultado")

let numeros = [];
let numero;

do {
    numero = Number(prompt("Digite um número (digite 0 para encerrar)"));
    if (numero !== 0) {
        numeros.push(numero)
    }
} while (numero !== 0);


function manorValor(array) {
    let manorValor = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < manorValor) {
            manorValor = array[i];
        }
    }
    return manorValor;
}
alert(manorValor(numeros))


