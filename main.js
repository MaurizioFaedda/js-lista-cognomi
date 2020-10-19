// Creare un array contenente dei cognomi in ordine casuale.
// Chiedere all'utente il suo cognome e inserirlo nella lista dei cognomi.
// Stampare la lista dei cognomi in ordine alfabetico e comunicare all'utente la posizione in cui si trova il suo cognome (dopo averlo riordinato).

// Creo il mio Array in ordine causale
var cognomi = ["Rossi", "Verdi", "Rossi", "Ricci", "Bianchi", "Ferrari"];

// L'utente inserisce il suo cognome
var cognomeUtente = prompt("Inserirsci il tuo cognome");

// anche se l'utente inserirà la prima lettera minuscola del suo cognome, questo verrà inserito
// con la lettere maiuscola in modo che non finsica all'ultima posizione.
cognomeUtente = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.slice(1)

// Inserisco il cognome dell'utente dentro l'array
cognomi.push(cognomeUtente);

// stampa di tutti i cognomi in ordine casuale
console.log(cognomi);

// Ordino i cognomi
cognomi.sort();

// Stampo tutti i cognomi in ordine alfabetico
console.log(cognomi);

// Dichiaro la mia variabile per indicare la posizione
var posizione = cognomi.indexOf(cognomeUtente) + 1;

// Ciclo in caso di cognomi uguali. All'utente viene indicato il numero delle persone con il suo stesso cognome
var contatoreCognomeUtente = -1;
var stessoCognome;
for (var i = 0; i < cognomi.length; i++) {
    if (cognomeUtente == cognomi[i]) {
        contatoreCognomeUtente += 1;

    }
}

if (contatoreCognomeUtente < 0 ) {
    console.log("L'utente " + cognomeUtente + " è alla " + posizione + "° posizione");
} else if (contatoreCognomeUtente == 1) {
    console.log("L'utente " + cognomeUtente + " è alla " + posizione + "° posizione con un altro utente con lo stesso cognome.");
} else {
    console.log("L'utente " + cognomeUtente + " è alla " + posizione + "° posizione con altri " + contatoreCognomeUtente + " utenti con lo stesso cognome.");
}
