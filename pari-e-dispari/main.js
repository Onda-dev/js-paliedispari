// L’utente sceglie pari o dispari
const userChoice = prompt("Scegli pari o dispari")
// e inserisce un numero da 1 a 5.
const userNumber = Number(prompt("Scegli un numero da 1 a 5"))
console.log(userNumber)
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
const cpuNumber = Math.floor(Math.random() * 5) + 1;
console.log(cpuNumber)
// Sommiamo i due numeri
const total = userNumber + cpuNumber
console.log(total)
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.