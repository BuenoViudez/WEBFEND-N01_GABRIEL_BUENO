const words = ['HOMER SIMPSON','MARGE SIMPSON','BART SIMPSON','LISA SIMPSON','MAGGIE SIMPSON', 'KRUSTY', 'MOE', 'APU']; 
const maxAttempts = 6;
let wordToGuess, hiddenWord, attemptsLeft;

// Função para escolher uma palavra aleatória do array
function chooseWord() {
    return words[Math.floor(Math.random() * words.length)];
}

// Função para inicializar o jogo
function initializeGame() {
    wordToGuess = chooseWord();
    hiddenWord = wordToGuess.replace(/./g, '-');
    attemptsLeft = maxAttempts;

    updateDisplay();
}

// Função para atualizar a exibição do jogo na tela
function updateDisplay() {
    const hangmanDiv = document.querySelector('.hangman');
    hangmanDiv.textContent = `Tentativas restantes: ${attemptsLeft}`;

    const wordDiv = document.querySelector('.word-to-guess');
    wordDiv.textContent = hiddenWord;

    const lettersDiv = document.querySelector('.letters');
    lettersDiv.innerHTML = '';
    for (let letter of 'abcdefghijklmnopqrstuvwxyz') {
        const letterSpan = document.createElement('span');
        letterSpan.textContent = letter;
        letterSpan.addEventListener('click', () => checkLetter(letter));
        lettersDiv.appendChild(letterSpan);
    }

    const messageDiv = document.querySelector('.message');
    messageDiv.textContent = '';
}

// Função para verificar se a letra selecionada está na palavra a ser adivinhada
function checkLetter(letter) {
    if (attemptsLeft > 0 && hiddenWord !== wordToGuess) {
        let letterFound = false;
        let newHiddenWord = '';

        for (let i = 0; i < wordToGuess.length; i++) {
            if (wordToGuess[i] === letter) {
                newHiddenWord += letter;
                letterFound = true;
            } else {
                newHiddenWord += hiddenWord[i];
            }
        }

        hiddenWord = newHiddenWord;

        if (!letterFound) {
            attemptsLeft--;
        }

        updateDisplay();

        if (hiddenWord === wordToGuess) {
            showResultMessage('Você venceu! Parabéns!');
        } else if (attemptsLeft === 0) {
            showResultMessage(`Você perdeu! A palavra era "${wordToGuess}".`);
        }
    }
}

// Função para exibir mensagem de resultado (vitória ou derrota)
function showResultMessage(message) {
    const messageDiv = document.querySelector('.message');
    messageDiv.textContent = message;
}

// Inicializa o jogo ao carregar a página
initializeGame();
