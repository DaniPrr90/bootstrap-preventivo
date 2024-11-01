console.log("sono nella console")




/*---------Variabili di html---------*/
const myForm = document.getElementById ("myform");
const name = document.getElementById ("Name");
const firstname = document.getElementById ("firstName");
const email = document.getElementById ("insertEmail");
const jobType = document.getElementById ("job");
const textArea = document.getElementById ("Textarea");
const codePromo = document.getElementById ("code");
const privacy = document.getElementById ("privacyPolicy");


/* ------------logica delle variabili------------ */









/*--------Definisco una variabile con i servizi per la lezione---------*/

const lessonServices = [
    { name: 'Backend Development', servicePrice: 20.50 },
    { name: 'Frontend Development', servicePrice: 15.30 },
    { name: 'Project Analysis', servicePrice: 33.60 }
];

/*----------variabili di sconto-------------*/

const discountPrice = 25;
const discountCodes = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];
const discountCodesLength = discountCodes.length;














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