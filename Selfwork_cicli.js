// selfwork 1
/* Scrivi un programma che dato un numero, let num = 2, stampi la rispettiva tabellina corrispondente. */

/* let num = 2
for (let i = 1; i <= 100; i++) {
    console.log(num * i);
    
    
} */

// selfwork 2
/*  Scrivi un programma che stampi dei numeri da 1 a 20 ma solo quelli pari. Di tutti i numeri dispari, invece, calcola anche la media e stampala a schermo.*/

let num_dispari = 0
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





