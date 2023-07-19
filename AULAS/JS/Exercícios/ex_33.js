let altura = 1.71;
let peso = 103;
let imc = peso / Math.pow(altura, 2);

if (imc <= 18.5) {
    console.log(`IMC de ${imc} - Peso normal`);
}
else if (imc <= 24.9) {
    console.log(`IMC de ${imc} - Peso normal`);

}
else if (imc <= 29.9) {
    console.log(`IMC de ${imc} -Excesso Peso`);

}
else if (imc <= 34.9) {
    console.log(`IMC de ${imc} -Obesidade classe I`);

}
else if (imc <= 39.9) {
    
    console.log(`IMC de ${imc} -Obesidade classe II`);
}
else {
    console.log(`IMC de ${imc} -Obesidade classe III`);
}