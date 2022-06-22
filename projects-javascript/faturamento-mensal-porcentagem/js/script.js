var faturamento = [
    {"cidade": "SP", "fatur" : 67836.43, "porcentagem": 0},
    {"cidade": "RJ", "fatur" : 36678.66, "porcentagem": 0},
    {"cidade": "MG", "fatur" : 29229.88, "porcentagem": 0},
    {"cidade": "ES", "fatur" : 27165.48, "porcentagem": 0},
    {"cidade": "Outros", "fatur" : 19849.53, "porcentagem": 0}
]
var total = faturamento[0].fatur; 

for(var i=1; i<=4; i++){
    total = total + faturamento[i].fatur; 
}

for(var i=0; i<=4; i++){
    faturamento[i].porcentagem = (faturamento[i].fatur * 100)/total; 
    
}
console.log(faturamento);
