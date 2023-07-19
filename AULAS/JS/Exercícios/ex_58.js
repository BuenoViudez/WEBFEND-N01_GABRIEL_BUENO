let numEscolhido = 7;
let numSorteado = (Math.floor(Math.random() * 10 + 1));


while (numEscolhido != numSorteado){
        console.log("Errou");
        console.log(`Numero escolhido ${numEscolhido} , Numero sorteado ${numSorteado}`);
        numSorteado = (Math.floor(Math.random() * 10 + 1));
}

console.log(`THE END, O Numero sorteado foi ${numSorteado}`);