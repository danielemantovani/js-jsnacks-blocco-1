//test
// alert ("JSnack8")

//chiedo all'utente un numero a 4 cifre
let number = prompt ("Inserisci un numero di 4 cifre");
 // console.log (number, typeof number);

// Inizializzo la somma delle cifre a 0
let sum = 0;

// Ciclo attraverso ciascuna cifra del numero e aggiungo la cifra alla somma
for (let i = 0; i < number.length; i++) {
    sum += parseInt(number [i]);
}

// stampo il risultato in console
console.log(sum);





