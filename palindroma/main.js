// Chiedere all’utente di inserire una parola
const parola = prompt("Inserisci una parola")
// Creare una funzione per capire se la parola inserita è palindroma
function isItPal (parola) {
    // Trovare la lunghezza della parola nel prompt
    const wordLength = parola.length
    // Estraggo la prima metà della parola
    let firstHalf
    for ( let i = 0; i < wordLength / 2; i++ ) {
        firstHalf = parola[i]
        console.log(firstHalf)
    }
    // Estraggo la seconda metà della parola, al contrario
    let secondHalf
    for ( let i = wordLength; i > wordLength / 2 - 1; i-- ) {
        secondHalf = parola[i]
        console.log(secondHalf)
    }
    // Controllo se la prima e la seconda metà al contrario sono uguali
    if ( firstHalf === secondHalf ) {
        return true
    } else {
        return false
    }
}

if ( isItPal(parola) ) {
    alert("Palindromo!!")
}
else {
    alert("Non è un palindromo...")
}