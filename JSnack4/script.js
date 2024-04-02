// test
// alert ("JSnack4")

// INPUT

const invitedPeople = ["Walker", "BananaJoe", "Terrence", "Ryan"]; 
console.log (invitedPeople)

const enterName = prompt("Il vostro nome prego")
console.log (enterName);

// Variabile flag 
let doorName = false;

// ESEUCUZIONE LOGICA

// Ciclo for che scorre tutto l'array per trovare il nome dell'invitivato, quando trova il nome dell'invitato si deve fermare
for (let i = 0; i < invitedPeople.length; i++) {
    const people = invitedPeople[i]
    if(people === enterName){
        doorName = true;
        break;
    }
}


// OUTPUT, stampa in pagina

if (doorName === true){
    console.log ("Entra! Sei il benvenuto");
} else {
    console.log ("Vai Via!");
}










