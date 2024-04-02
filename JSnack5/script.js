// test
// alert ("JSnack5")

//creo l'array vuoto
let empty = []


//chiedo all'utente di inserire 6 numeri
let num1 = parseInt (prompt ("Dimmi un numero"));
let num2 = parseInt (prompt ("Dimmi un altro numero"));
let num3 = parseInt (prompt ("Un altro"));
let num4 = parseInt (prompt ("Un altro"));
let num5 = parseInt (prompt ("Un altro"));
let num6 = parseInt (prompt ("Un altro"));


//verifico se i numeri inseriti sono dispari
if (num1 % 2 !== 0) {
    empty.push(num1);
}
if (num2 % 2 !== 0) {
    empty.push(num2);
}
if (num3 % 2 !== 0) {
    empty.push(num3);
}
if (num4 % 2 !== 0) {
    empty.push(num4);
}
if (num5 % 2 !== 0) {
    empty.push(num5);
}
if (num6 % 2 !== 0) {
    empty.push(num6);
}

//stampo nell'array i numeri dispari
console.log (empty)


// Crea un array vuoto.
// Chiedi per 6 volte all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.