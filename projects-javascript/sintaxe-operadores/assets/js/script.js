function test(num1, num2) {
    const soma = num1 + num2;
    var saoIguais;
    var comp10;
    var comp20;

    (num1 === num2) ? saoIguais = 'são iguais': saoIguais = 'não são iguais';
    (soma > 10) ? comp10 = 'maior que 10' : comp10 = 'menor que 10';
    (soma > 20) ? comp20 = 'maior que 20' : comp20 = 'menor que 20';
    
    alert(`Os números ${num1} e ${num2} ${saoIguais}. Sua soma é ${soma}, que é ${comp10} e ${comp20}.`);

}

var num1 = Number(prompt('Digite o primeiro número'));
var num2 = Number(prompt('Digite o segundo número'));
test(num1, num2);