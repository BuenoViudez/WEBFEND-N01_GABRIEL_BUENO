let estacao = "verao";
let mensagem = "";

switch (estacao) {
  case "verao":
    mensagem = "Verão é entre 22 de Dezembro a 20 de março";
    break;
  case "inverno":
    mensagem = "Inverno: 21 de junho a 23 de setembro";
    break;
  case "outono":
    mensagem = "Outono: 20 de março a 21 de junho";
    break;
  case "primavera":
    mensagem = "Primavera: 22/23 de setembro a 22 de dezembro";
    break;
   default:
    mensagem = "Estação inválido";
}

console.log(mensagem);


