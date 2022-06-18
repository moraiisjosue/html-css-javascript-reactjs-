var num = document.getElementById('input');
const buttonCheck = document.getElementById('check');
var fibon = [];
fibon[0] = 0;
fibon[1] = 1;
var check = false;

buttonCheck.addEventListener("click", test);

function test() {
    for (var i = 2; i<100; i++ ) {
        fibon[i] = fibon[i-2] + fibon[i-1];
    }
    for (var i = 0; i<100; i++ ){
        if (num.value == fibon[i]) {
            check = true;
            alert("O número " + num.value + " pertence à sequência de Fibonacci.");
        }
    }
    if(check == false) {
        alert("O número " + num.value + " não pertence à sequência de Fibonacci.");
    }
}
