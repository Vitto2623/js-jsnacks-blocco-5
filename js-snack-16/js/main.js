const animali = [
    {
        nome: 'leone',
        famiglia: 'alessandri',
        classe: 'mammiferi',
    },
    {
        nome: 'cane',
        famiglia: 'canidi',
        classe: 'mammiferi',
    },
    {
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli',
    }
]

const nuvoArray = animali.filter((element)=>{
    if (element.classe == 'mammiferi'){
        return true
    }
})

console.table(nuvoArray);
console.table(animali);