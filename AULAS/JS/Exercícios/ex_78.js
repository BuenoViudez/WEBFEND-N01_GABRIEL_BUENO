let numero = 6;
let divisor = [];
let soma = 0;

for (let i = 0; i < numero ; i++) {

    if (numero % i === 0) {
        divisor.push(i)
        console.log(divisor);

        soma += i 
    }
}

console.log(soma);

if (soma === numero) {
    console.log(`O ${numero} é um numero Perfeito`);
}
else {
    console.log(`O ${numero} é um numero Imperfeito`);
}
