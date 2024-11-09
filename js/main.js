
/*---------Variabili di html---------*/
const formPreventivo = document.getElementById("formPreventivo");

/*--------Definisco una variabile con i servizi per la lezione---------*/
const backendDevelopment = 20.50;
const frontendDevelopment = 15.30;
const projectAnalysis = 33.60;

/* Definisco i codici sconto e il valore dello sconto da applicare */
const discountPrice = 25;
const discountCodes = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];

/* Definisco il numero di ore totali per un lavoro */
const hourJobs = 10;

/* ------------Gestione del form------------ */
formPreventivo.addEventListener("submit", function (event) {
    event.preventDefault();

    // Leggo i valori dal HTML
    const jobType = parseInt(document.getElementById("jobType"));
    const codePromo = document.getElementById("codePromo");
    const areaMessage = document.getElementById("areaMessage");

    // Determino il prezzo base per la tipologia di servizio scelto
    let servicePrice;
    if (jobType === 1) {
        servicePrice = backendDevelopment;
    } else if (jobType === 2) {
        servicePrice = frontendDevelopment;
    } else if (jobType === 3) {
        servicePrice = projectAnalysis;
    } else {
        areaMessage.innerText = "Seleziona un tipo di lavoro valido.";
        return;
    }

    // Calcolo il prezzo totale senza sconto
    let totalPrice = servicePrice * hourJobs;

    // Controllo se il codice sconto è valido e applico lo sconto
    if (discountCodes.includes(codePromo)) {
        totalPrice -= totalPrice * (discountPrice / 100);
        areaMessage.innerText = `Codice di sconto valido. Prezzo finale: €${totalPrice.toFixed(2)}`;
    } else if (codePromo) {
        areaMessage.innerText = `Codice di sconto non valido. Prezzo finale: €${totalPrice.toFixed(2)}`;
    } else {
        areaMessage.innerText = `Prezzo finale: €${totalPrice.toFixed(2)}`;
        console.log(totalPrice);
    }
});

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