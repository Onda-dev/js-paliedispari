// Chiedere all’utente di inserire una parola
const word = prompt("Inserisci una parola")
// Creare una funzione per capire se la parola inserita è palindroma
function isItPal(word) {

    let reverseWord = ""
    for ( let i = word.length - 1; i >= 0; i-- ) {
        reverseWord += word[i]
    }
    console.log(reverseWord)
    
    if ( word === reverseWord ) {
        return true
    }
    else {
        return false
    }
    
}

if ( isItPal(word) ) {
    alert("Palindromo!!")
}
else {
    alert("Non è un palindromo...")
}


