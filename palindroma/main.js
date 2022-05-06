// Chiedere all’utente di inserire una parola
const parola = prompt("Inserisci una parola")
// Creare una funzione per capire se la parola inserita è palindroma
// function isItPal (parola) {
    // Trovare la lunghezza della parola nel prompt
    const wordLength = parola.length
    console.log(wordLength)
    // Scorro le lettere fino a metà parola
    for ( let i = 0; i < wordLength / 2; i++ ) {
        console.log(parola[i])
    // }

}