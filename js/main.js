/*---------Variabili di html---------*/
const formPreventivo = document.getElementById("formPreventivo");

/**************************** */

/*--------Definisco una variabile con i servizi per la lezione---------*/

const backendDevelopment = 20.50;
const frontendDevelopment = 15.30;
const projectAnalysis = 33.60

/* Definisco i codici sconto e il valore dello sconto da applicare */
const discountPrice = 25;
const discountCodes = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];

/* Definisco il numero di ore totali per un lavoro */

const hourJobs = 10;

/* ------------inserimento condizionali------------ 

● se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.50€/l’ora
*/

formPreventivo.addEventListener("submit", function (event)){

    event.preventDefault();

    //Leggo i valori dal HTML
    const jobType = document.getElementById("jobType");
    const areaMessage = document.getElementById("areaMessage");
    const codePromo = document.getElementById("codePromo");
    const privacyPolicy = document.getElementById("privacyPolicy");
    const name = document.getElementById("name");
    const firstName = document.getElementById("firstName");
    const mail = document.getElementById("mail");


    // Determino la tipologia di jobType
    // Calcolo il totale in base al servicePrice * totale ore (sempre 10)
    let totalPrice;
    if (jobType == 1 ){
        totalPrice = backendDevelopment * 10
        console.log(totalPrice);
    }
    if(jobType == 2){
        totalPrice = frontendDevelopment * 10
    }
    if(jobType == 3){
        totalPrice = projectAnalysis * 10
    }

// codePromo = 'SCONTO'
if (codePromo == "YHDNU32"){

}
/* verifico se il codice sconto esiste nell'array e lo applico allo sconto */

for(let i = 0; i < discountCodes.length; i++ ){
totalPrice = backendDevelopment - (totalPrice * (discountPrice) / 100);
totalPrice = frontendDevelopment - (totalPrice * (discountPrice) / 100);
totalPrice = projectAnalysis -(totalPrice * (discountPrice) / 100);

}
    // Controllo se è il codice sia valido e applico lo sconto
    // Se il codice non è valido mostro un messaggio all'utente


    

}






/*----------variabili di sconto-------------*/



















/*
Aggiungiamo la componente js di interazione con l’utente.

Il prezzo finale è dato dal numero di ore per prezzo orario. Supponiamo per semplicità che
ogni progetto richieda lo stesso numero di ore di lavoro (es: 10 ore).
Il prezzo orario per una commissione varia in questo modo:
● se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.50€/l’ora
● se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.30€/l’ora
● se la commissione riguarda l’analisi progettuale il prezzo orario è di 33.60€/l’ora
L’utente potrebbe decidere di utilizzare un codice promozionale tra i seguenti: YHDNU32,
JANJC63, PWKCN25, SJDPO96, POCIE24.
Se l’utente inserisce un codice promozionale valido, ha diritto ad uno sconto del 25% sul
prezzo finale. Se il codice inserito non è valido, il sito deve informare l’utente che il codice
non è valido e il prezzo finale viene calcolato senza applicare sconti.
Il risultato del calcolo del prezzo finale deve essere visualizzato in “forma umana” (con 2
decimali e il simbolo dell’euro).
*/