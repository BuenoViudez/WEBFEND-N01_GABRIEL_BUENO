let numeros = [10 , 20, 30, 40, 5760];
let maiornumero = 0


for (let i = 0; i < numeros.length; i++) {
    
    let numero = numeros[i];

    if (numero > maiornumero) {
        maiornumero = numero;
    }
}

console.log(maiornumero)