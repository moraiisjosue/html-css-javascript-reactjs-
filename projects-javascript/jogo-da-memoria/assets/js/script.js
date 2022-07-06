const cards = document.querySelectorAll('.card'); /*Pega todos os cards, coloca em um array*/
let hasFlipCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard() { /*Função para receber as cartas*/
    if(lockBoard) return;
    if(this == firstCard) return;
    this.classList.add('flip');
    if(!hasFlipCard) {
        hasFlipCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    hasFlipCard = false;
    checkForMath(); /*função para saber se as cartas são iguais*/
}

function checkForMath() {
    if(firstCard.dataset.card === secondCard.dataset.card) { /*se as cartas são iguais são desabilitadas*/
        disableCards();
        return;
    }
    unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard); /*remove o evento listener*/
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() { /*remove a classe flip para voltar ao normal caso os cards não sejam iguais*/
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlipCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(
    function shuffe() {
        cards.forEach((card) => {
            let ramdomPosition = Math.floor(Math.random() * 12);
            card.style.order = ramdomPosition;
        })
    }
)();

cards.forEach((card) => {
    card.addEventListener('click', flipCard);
});

