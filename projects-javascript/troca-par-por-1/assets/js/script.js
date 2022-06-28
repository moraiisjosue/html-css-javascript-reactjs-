function troca(trocaArray) {

    if(!trocaArray) return document.getElementById("arr").innerHTML = "-1";;
    if(trocaArray.length-1 == "") return document.getElementById("arr").innerHTML = "-1";
    if(!trocaArray.length) return document.getElementById("arr").innerHTML = "-1";;

    document.getElementById("arr").innerHTML = trocaArray;

    trocaArray = array.map(Number);
    console.log(trocaArray.length);
    for(let i = 0; i<trocaArray.length;i++){
        if((trocaArray[i] % 2) == 0){
                trocaArray.splice(i,1,1);     
        } 
    }
    console.log(trocaArray);
    document.getElementById("arrTroca").innerHTML = trocaArray;
    
    return trocaArray;
}

var array = prompt('Digite uma seleção de números').split(",");
troca(array);