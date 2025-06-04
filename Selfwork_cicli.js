// selfwork 1
/* Scrivi un programma che dato un numero, let num = 2, stampi la rispettiva tabellina corrispondente. */

/* let num = 2
for (let i = 1; i <= 100; i++) {
    console.log(num * i);
    
    
} */

// selfwork 2
/*  Scrivi un programma che stampi dei numeri da 1 a 20 ma solo quelli pari. Di tutti i numeri dispari, invece, calcola anche la media e stampala a schermo.*/

/* let num_dispari = 0
let tot_num_dispari = 0

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
        
    } else {
       num_dispari = num_dispari + i
        tot_num_dispari ++

    }
    
    
}

console.log(`somma tra i numeri dispari = ${num_dispari}`);
console.log(`totale numeri dispari = ${tot_num_dispari}`);
console.log(`media tra i numeri = ${num_dispari / tot_num_dispari}`);
 */

// Selwork cicli 3

/* Scrivi un programma che simuli un distributore di bevande e che rispetti i seguenti passaggi:
l’utente deve poter inserire un numero (ipotizziamo che l'utente possa inserire SOLO numeri)
in console dev’essere stampato il messaggio del distributore
se inserisce 1, seleziona acqua e quindi stampare in console: “E’ stata selezionata l’acqua”
se inserisce 2, seleziona coca cola e quindi stampare in console: “E’ stata selezionata coca cola”
se inserisce 3, seleziona birra e quindi stampare in console: “E’ stata selezionata birra”
se inserisce qualcosa di diverso, il programma dovra’ riproporre automaticamente la domanda di partenza

Extra: correggere l'esercizio facendo in modo che l'utente non sia obbligato ad inserire solo numeri ma possa scrivere ciò che vuole. Nel caso il dato inserito non sia una scelta accettabile il programma dovrà rifiutare la risposta e riproporre automaticamente la domanda di partenza.
 */

let scelta
do{
 scelta = Number (prompt ("Inserisci un numero:\n1 = acqua\n2 = coca cola\n3 = birra"))

switch (scelta) {
    case 1:
      console.log("È stata selezionata l'acqua");
      break;
    case 2:
      console.log("È stata selezionata coca cola");
      break;
    case 3:
      console.log("È stata selezionata birra");
      break;
    default:
      console.log("Scelta non valida. Riprova.");
  }

}while  (scelta !== 1 && scelta !== 2 && scelta !== 3);