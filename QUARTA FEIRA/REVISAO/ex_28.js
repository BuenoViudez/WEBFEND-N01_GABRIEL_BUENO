let mesAno = 4;
let mensagem = "";

switch (mesAno) {
  case 1:
    mensagem = "Janeiro tem 31 dias";
    break;
  case 2:
    mensagem = "Fevereiro tem 28 dias";
    break;
  case 3:
    mensagem = "Março tem 31 dias";
    break;
  case 4:
    mensagem = "Abril tem 30 dias";
    break;
  case 5:
    mensagem = "Maio tem 31 dias";
    break;
  case 6:
    mensagem = "Junho tem 30 dias";
    break;
  case 7:
    mensagem = "Julho tem 31 dias";
    break;
  case 8:
    mensagem = "Agosto tem 31 dias";
    break;
  case 9:
    mensagem = "Setembro term 30 dias";
    break;
  case 10:
    mensagem = "Outubro tem 31 dias";
    break;
  case 11:
    mensagem = "Novembro tem 30 dias";
    break;
  case 12:
    mensagem = "Dezembro tem 31 dias";
    break;
  default:
    mensagem = "Dia inválido";
}

console.log(mensagem);