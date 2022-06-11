
// var currentNumberWrapper = document.getElementById('currentNumber'); //pega o valor do current Number no html
// var currentNumber = 0; //cria uma nova variável aux

// function increment() {
//     currentNumber = currentNumber + 1; //soma mais um
//     currentNumberWrapper.innerHTML = currentNumber; //adiciona o valor atualizado na página do html
// }

// function decrement() {
//     currentNumber = currentNumber -1; //diminui um
//     currentNumberWrapper.innerHTML = currentNumber; //adiciona o valor atualizado na página do html
// }

// document.getElementById('increment').addEventListener("click", increment);

var currentNumber = document.getElementById('currentNumber'); //pega o valor do current Number no html
var buttonInc = document.getElementById('increment');
var buttonDec = document.getElementById('decrement');
let count = 0;

buttonInc.addEventListener("click", increment);
buttonDec.addEventListener("click", decrement);

function increment() {
    if(count >= 10){  //verifica se o contador passou ou é igual 10, se sim bloqueio o botão
        button.disabled = true;
    } else {
        count++
        currentNumber.innerHTML = count; //soma mais um
    }
    
}

function decrement() {
    if(count <= 0){ //verifica se o contador menos ou igual a 0 , se sim bloqueio o botão
        buttonDec.disabled = true;
    } else {
        count --;
        currentNumber.innerHTML = count; //menos um}
    }
}

