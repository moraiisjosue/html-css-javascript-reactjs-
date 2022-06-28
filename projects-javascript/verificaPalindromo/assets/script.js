function verificaPalindromo(string) {
    if(!string) return;
    var verifica = [];
    for (let i = string.length-1; i >= 0; i--){ //também é possivel com o split (transforma em array)/reverse (faz a reversão) e o Join para juntar de novo
        verifica = verifica + string[i];
    }
    (string === verifica)? alert(`${string} é uma palabra Palíndromo. Sendo ${verifica}.`) : alert(`${string} não é uma palabra Palíndromo. Sendo ${verifica}.`);
}

var palavra = String(prompt('Digite uma palavra para verificar se é Palíndromo'));
verificaPalindromo(palavra);