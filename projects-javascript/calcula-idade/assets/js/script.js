
// Usando call
// const pessoa1 = {
//     nome: "Josué Morais",
//     idade: 21
// };

// var pessoa2 = {
//     "nome": "João Paulo",
//     "idade": 32
// };

// function calculaIdade(anos) {
// 	return `Daqui a ${anos} anos, ${this.nome} terá ${
// 		this.idade + anos
// 	} anos de idade.`;
// }

// console.log(calculaIdade.call(pessoa2, 4));


//Usando Apply
const pessoa1 = {
    nome: "Fernando Mathias",
    idade: 16
};

var pessoa2 = {
    "nome": "Cleber Karenti",
    "idade": 67
};

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.apply(pessoa1, [10]));