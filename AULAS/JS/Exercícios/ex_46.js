let codEs = 4;
let estado = "";
let região = "";

switch (codEs) {
    case 1:
        estado = "Bahia";
        região = "Nordeste";
        break;

    case 2:
        estado = "Minas-Gerais";
        região = "Sudeste";
        break;

    case 3:
        estado = "Mato-Grosso";
        região = "Centro-Oeste";
        break;

    case 4:
        estado = "Paraná";
        região = "Sul";
        break;

    case 5:
        estado = "São Paulo";
        região = "Sudeste";
        break;

    case 6:
        estado = "Rio Grande do Sul";
        região = "Sul";
        break;

    case 7:
        estado = "Goiás";
        região = "Centro";
        break;

    case 8:
        estado = "Santa Catarina";
        região = "Sul";
        break;

    case 9:
        estado = "Ceara";
        região = "Nordeste";
        break;

    case 10:
        estado = "Maranhão";
        região = "Nordeste";
        break;

    case 11:
        estado = "Amazonas";
        região = "Noroeste";
        break;

    case 12:
        estado = "Pará";
        região = "Norte";
        break;

    case 13:
        estado = "Pernanbuco";
        região = "Nordeste";
        break;

    case 14:
        estado = "Espirito Santo";
        região = "Sudeste";
        break;

    case 15:
        estado = "Rio Grande do norte";
        região = "Norte";
        break;

    case 16:
        estado = "Piaui";
        região = "Nordeste";
        break;

    case 17:
        estado = "Rio de Janeiro";
        região = "Sudeste";
        break;

    case 18:
        estado = "Tocantins";
        região = "Centro";
        break;

    case 19:
        estado = "Paraiba";
        região = "Nordeste";
        break;

    case 20:
        estado = "Acre";
        região = "Noroeste";
        break;

    case 21:
        estado = "Mato Grosso do Sul";
        região = "Centro Oeste";
        break;

    case 22:
        estado = "Roraima";
        região = "Norte";
        break;

    case 23:
        estado = "Sergipe";
        região = "Nordeste";
        break;
    case 24:
        estado = "Alagoas";
        região = "Nordeste";
        break;

    case 25:
        estado = "Rondonia";
        região = "Norte";
        break;

    case 26:
        estado = "Amapá";
        região = "Norte";
        break;

    case 27:
        estado = "Brasilia";
        região = "Centro";
        break;
    default:
        console.log("Erro !!!");
        break;

}
console.log(estado + "\n" + região);
















// Crie um programa que pergunte ao usuário o código de um estado brasileiro (1 a 27) e exiba a região geográfica desse estado (Norte, Nordeste, Centro-Oeste, Sudeste ou Sul).