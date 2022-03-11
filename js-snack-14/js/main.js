const automobili = [
    {
        marca: 'mercedes',
        modello: 'classe-a',
        alimentazione: 'benzina',
    },
    {
        marca: 'audi',
        modello: 'a-1',
        alimentazione: 'diesel',
    },
    {
        marca: 'alfa-romeo',
        modello: 'giulia',
        alimentazione: 'benzina',
    },
    {
        marca: 'fiat',
        modello : 'panda',
        alimentazione : 'metano',
    },
    {
        marca : 'lancia',
        modello:'delta',
        alimentazione :'benzina',
    },
    {
        marca : 'ferrari',
        modello: '458-italia',
        alimentazione: 'benzina',
    },
    {
        marca :'lamborghini',
        modello : 'Huracan',
        alimentazione : 'benzina',
    },
    {
        marca :'audi',
        modello : 'a-4',
        alimentazione : 'benzina',
    },
    {
        marca :'opel',
        modello : 'astra',
        alimentazione: 'metano',
    },
    {
        marca : 'renault',
        modello: 'megane',
        alimentazione : 'benzina',
    },
    {
        marca : 'renault',
        modello : 'clio',
        alimentazione : 'benzina',
    },
    {
        marca : 'mercedes',
        modello: 'classe-8',
        alimentazione: 'benzina',
    },
]

const benzina = automobili.filter((element) =>{
    if (element.alimentazione == "benzina") 
    return true
});
const diesel = automobili.filter((element) =>{
    if (element.alimentazione == "diesel") 
    return true
});
const altri = automobili.filter((element) =>{
    if (element.alimentazione != "benzina" && element.alimentazione != "diesel")
    return true
});

console.table(benzina)
console.table(diesel)
console.table(altri)
console.table(automobili)