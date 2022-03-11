const stringhe = ['pippo', 'PlUTO', 'Paperino'];
const nuoveStringhe = stringhe.map((element) => {
    return element.charAt(0).toUpperCase() + 
    element.substring(1).toLowerCase();
});

console.table(stringhe);
console.table(nuoveStringhe);