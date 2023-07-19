let divisores = 0;

// Variável de controle para o laço de repetição while
for (let i = 1; i <= 100; i++) {
    divisores = 0;
    for (let j = 1; j <= i; j++) {
      // Verifica se o número é divisível por i, ou seja, se o resto da divisão é igual a 0
      if (i % j === 0) {
        // Incrementa o contador de divisores
        divisores++;
      }
      // Incrementa o valor de i para verificar o próximo número
    }
    
    if (divisores === 2) {
      console.log(i + " é um número primo.");
    } else {
      console.log(i + " não é um número primo.");
    }
    // Verifica se o número possui exatamente dois divisores (1 e ele mesmo)
}