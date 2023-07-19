let codigoCor = 2;
let mensagem = "";

switch (codigoCor) {
  case 1:
    mensagem = "Rosa";
    break;
  case 2:
    mensagem = "Marrom";
    break;
  case 3:
    mensagem = "Verde";
    break;
  case 4:
    mensagem = "Azul";
    break;
  case 5:
    mensagem = "Preto";
    break;
  case 6:
    mensagem = "Vermelho";
    break;
  default:
    mensagem = "Dia inválido";
}

console.log(mensagem);