const basketPlayer = {
    codiceGiocatore: "",
    nome: 'Marco',
    cognome: 'Palla',
    età: 26,
    mediaPuntiPartita: "",
    successoTiriDa3: "",

}

basketPlayer.codiceGiocatore = generatePlayerCode();
basketPlayer.mediaPuntiPartita = Math.floor(Math.random() * ((50 + 1) - 0) + 0);
basketPlayer.successoTiriDa3 = Math.floor(Math.random() * ((100 + 1) - 0) + 0);

function generatePlayerCode(){
    return makeId(3) + makeNumbericId(3);
}

function makeNumbericId(length){
    let result = "";
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWYX';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++){
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}