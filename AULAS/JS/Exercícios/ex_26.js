let lado1 = 1
let lado2 = 2
let lado3 = 2

if (lado1 == lado2 && lado1 == lado3) {
    console.log(`O triangulo é EQUILATERO, pois os lads são iguais`);
}
else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3){
    console.log(`O triangulo é ESCALENO, pois todos os lados são diferentes`);
}
else{
    console.log(`O triangulo é ISOSCELES, pois um dos lados sao diferentes`);
}
