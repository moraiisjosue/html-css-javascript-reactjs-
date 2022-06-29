students = [
    {
        "name": "Josue Morais",
        "nota": 8 
    },
    {
        "name": "Fabiano Ribeiro",
        "nota": 5 
    },
    {
        "name": "Matheus Silva",
        "nota": 3
    },
    {
        "name": "Gabriel Monteiro",
        "nota": 9
    },
    {
        "name": "Letícia Alber",
        "nota": 8
    },
    {
        "name": "Sara Andrade",
        "nota": 9
    },
    {
        "name": "Joce Mister",
        "nota": 7 
    },
    {
        "name": "Alexandre Bambu",
        "nota": 10 
    },
    {
        "name": "Mirela Enem",
        "nota": 6 
    },
    {
        "name": "Kauane Tairon",
        "nota": 3
    },
]

console.log(students.length);

function studentsApproved(alunos, media){
    let approved = [];

    for(let i =0; i < alunos.length;i++){
        const {nota} = alunos[i];
        if(nota >= media){
            approved.push(alunos[i]);
        }
    }
    return approved;
}

console.log(studentsApproved(students, 7));