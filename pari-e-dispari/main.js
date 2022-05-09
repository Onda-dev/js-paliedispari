// L’utente sceglie pari o dispari
const userChoice = prompt("Scegli pari o dispari")
// e inserisce un numero da 1 a 5.
let userNumber
while ( isNaN(userNumber)) {
    userNumber = Number(prompt("Scegli un numero da 1 a 5"))
}
console.log(userNumber)
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
cpuNumber = randomNumber(1, 5)
console.log(cpuNumber)
// Sommiamo i due numeri
const total = userNumber + cpuNumber
console.log(total)
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function oddOrEven(number) {
    if (number % 2 === 0) {
        return "pari"
    } else {
        return "dispari"
    }
}
console.log(oddOrEven(total))
// Dichiariamo chi ha vinto.
if ( userChoice === oddOrEven(total) ) {
    alert ("Hai vinto!")
} else {
    alert ("Hai perso!")
}