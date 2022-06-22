fatur = [
	{
		"dia": 1,
		"valor": 22174.1664
	},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	}
]

var section = document.querySelector('section');
var menorFatur = document.getElementById('menorFatur');
var maiorFatur = document.getElementById('maiorFatur');
var mediaFatur = document.getElementById('mediaFatur');
menorFatur = fatur[0].valor;
maiorFatur = fatur[0].valor;
mediaFatur = 0;

//menor faturamento
for(var i=1; i<=29;i++) {
    if(menorFatur > fatur[i].valor){
        menorFatur = fatur[i].valor;
        console.log(menorFatur);
    }
}
//maior faturamento
for(var i=1; i<=29;i++) {
    if(maiorFatur < fatur[i].valor){
        maiorFatur = fatur[i].valor;
    }
}
//media faturamento
for(var i=0; i<=29;i++) {
    if(fatur[i].valor > 0){
        mediaFatur = (mediaFatur + fatur[i].valor);
    }
}
mediaFatur = mediaFatur/30;
alert(' Menor faturamento ' + menorFatur.toLocaleString('en-BR', { minimumFractionDigits: 2}) + ' Maior Faturamento ' + maiorFatur.toLocaleString('en-IN', { minimumFractionDigits: 2}) + ' Média do Faturamento ' + mediaFatur.toLocaleString('en-IN', { minimumFractionDigits: 2}));





