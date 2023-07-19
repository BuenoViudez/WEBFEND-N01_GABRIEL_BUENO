// Crie uma função que receba um array de palavras como parâmetro e retorne a palavra mais longa do array.

function encontrarMaiorPalvra(array) {
    let maiorPlavra = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > maiorPalavra) {
        maiorPalavra = array[i];
      }
    }
    return maiorPalavra;
  }
  
  const palavras = [];
  const maiorPalavra = encontrarMaiorPalvra(palavras);
  console.log(maiorPalavra);

  alert(maiorPalavra(palavras))
