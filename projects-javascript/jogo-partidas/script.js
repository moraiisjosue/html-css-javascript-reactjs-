let lines = 14;
 
var numberOfMatches = 0;//parseInt(lines.shift);
 
let n = lines;
let totalMatches = 0;
    while(n>1){
        if(lines % 2 == 0){
            lines = parseInt(lines /2);
              numberOfMatches = lines; 
              totalMatches = totalMatches + numberOfMatches;
              n = lines;
        }else{  
          lines = parseInt(lines /2);
          numberOfMatches = lines;
          lines = lines +  1;
          totalMatches = totalMatches + numberOfMatches;
          console.log(totalMatches);
          n = lines;
        }
    }
console.log(totalMatches);

//retorna quantas partidas foram jogadas até ter um vencedor
//quando o número de partidas é ímpar um time já está automaticamente na próxima fase
