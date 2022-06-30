var referenceError = new ReferenceError('Parâmetros enviados são inválidos');
var typeError = new TypeError('Valor enviado não corresponde ao tipo esperado');
var rangeError = new RangeError('Valor não está conjunto ou no intervalo permitido');

function validateErrors(array, number) {
    try {   
        if(!array || !number){
            throw referenceError;
        }
        if(Array.isArray(array) == false){
            throw typeError;
        }
        if(typeof number !== "number" ){
            throw typeError;
        } 
        if(number != array.length){
            console.log(array.length);
            throw typeError;
        }

        return array;
    } catch (error) {
        if (error instanceof ReferenceError){
            console.log("Este  erro é um ReferenceError!");
            console.log(error.message);
        } else if (error instanceof TypeError){
            console.log("Este  erro é um TypeError!");
            console.log(error.message);
        } else if (error instanceof RangeError){
            console.log("Este  erro é um RangeError!");
            console.log(error.message);
        } else {
            console.log("Erro não esperado:" + e);
        }
    }
};

students = [
    {
        "name": "Josue Morais",
        "nota": 8 
    },
    {
        "name": "Fabiano Ribeiro",
        "nota": 5 
    },
]

console.log(validateErrors(students, 2));