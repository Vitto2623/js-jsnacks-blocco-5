/**
 *
 *
    Crea un array di oggetti che rappresentino delle persone.
    Ogni persona ha un nome, un cognome e un'età.
    
    Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.
 */

    const persone = [
        {
            nome: 'Paolo',
            cognome: 'Pino',
            età: 8,
        },
        {
            nome: 'Marco',
            cognome: 'Prete',
            età: 40,
        },
        {
            nome: 'Giorgio',
            cognome: 'Vino',
            età: 80,
        },
        {
            nome: 'Riccardo',
            cognome: 'Ceci',
            età: 78,
        },
        {
            nome: 'Laura',
            cognome: 'Giorgina',
            età: 13,
        },
        {
            nome: 'Rosalinda',
            cognome: 'Ciccina',
            età: 75,
        }
    ];
    
    const nuovoArray = persone.map((element) => {
        if (element.età >= 18){
            element.frase = `${element.nome} ${element.cognome} può guidare`;
        } else{
            element.frase = `${element.nome} ${element.cognome} non può guidare`;
        }
        return element;
    });
    
    console.table(nuovoArray);