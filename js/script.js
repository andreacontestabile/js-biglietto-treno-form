// Definisco la variabile prezzo per km
var priceKm = 0.21;
// Seleziono il pulsante Genera e salvo il risultato in una variabile
var generateButton = document.getElementById('generate');

// Creo un evento che avverrà al click del pulsante Genera
generateButton.addEventListener("click",

  function() {
    // Catturo il valore dei campi input
    var nameValue = document.getElementById('name').value;
    var kmValue = document.getElementById('km').value;
    var ageValue = document.getElementById('age-group').value;

    var offerHTML = document.getElementById('ticket-offer');

    // Definisco la formula per calcolare il prezzo
    var price = (priceKm * kmValue);

    /* Se l'utente è minorenne, avrà uno sconto del 20%
       Se l'utente è over 65, avrà uno sconto del 40%
       Altrimenti non avrà nessuno sconto
       Stampo nel campo Offerta della tabella il nome dell'offerta corrispondente */

    if (ageValue == "minorenne") {
      var discount = 0.2;
      offerHTML.innerHTML = "Biglietto ridotto"
    } else if (ageValue == "over") {
      var discount = 0.4;
      offerHTML.innerHTML = "Offerta Silver"
    } else {
      var discount = 0;
      offerHTML.innerHTML = "Biglietto Standard"
    }

    // Calcolo il prezzo finale in base allo sconto
    var priceTotal = (price - price * discount).toFixed(2);

    // Stampo il prezzo totale nel campo Costo Biglietto  della tabella
    var priceHTML = document.getElementById('ticket-price');
    priceHTML.innerHTML = priceTotal + "€";

    // Genero un numero compreso tra 90000 e 99999 e lo stampo nel campo Codice CP della tabella
    var wagonHTML = document.getElementById('ticket-wagon');
    wagonHTML.innerHTML = Math.floor(Math.random() * 9) + 1;

    // Genero un numero compreso tra 1 e 9 e lo stampo nel campo Carrozza della tabella
    var codeHTML = document.getElementById('ticket-code');
    codeHTML.innerHTML = Math.floor(Math.random() * 10000) + 90000;

    // Mostro ticket-container
    document.getElementById('ticket-container').classList.remove("hide");
  }
);

// Seleziono il pulsante Genera e salvo il risultato in una variabile
var cancelButton = document.getElementById('cancel');

// Creo un evento che avverrà al click del pulsante Annulla
cancelButton.addEventListener("click",
  function() {
    // Svuoto tutti i campi input
    document.getElementById('name').value = "";
    document.getElementById('km').value = "";
    document.getElementById('age-group').value = "";

    // Nascondo ticket-container
    document.getElementById('ticket-container').classList.add("hide");
  }
);
