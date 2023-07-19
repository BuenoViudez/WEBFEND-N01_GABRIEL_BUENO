let operacao = "divisão";
let calculo;
let n1 = 10;
let n2 = 20;

operacao = operacao.toLocaleLowerCase().trim()

switch (operacao) {
    case "soma":
        calculo = n1 + n2
        console.log(`${n1} + ${n2} = ${calculo}`);
        break;

    case "subtração":
        calculo = n1 - n2
        console.log(`${n1} - ${n2} = ${calculo}`);
        break;

    case "multiplicação":
        calculo = n1 * n2
        console.log(`${n1} x ${n2} = ${calculo}`);
        break;

     case "divisão":   
        calculo = n1 / n2
        console.log(`${n1} ÷ ${n2} = ${calculo}`);
        break;   

    default:
        console.log("Erro");
        break;
}











// Crie um programa que pergunte ao usuário a operação desejada (soma, subtração, multiplicação ou divisão) e realize o cálculo com base em dois números fornecidos pelo usuário.