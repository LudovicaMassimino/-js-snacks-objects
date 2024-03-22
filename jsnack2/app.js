console.log('ciao')

/* A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */

const nomi = ['pippo', 'PLUTO', 'Paperino']
console.log(nomi)
const nuovo = []

for(let i = 0; i < nomi.length; i++){
    const nome = nomi[i].toLowerCase();

    const sottostringhe = nome.slice(1);
    console.log(sottostringhe)

    const stringheMinuscole = sottostringhe.toLowerCase();
    console.log(stringheMinuscole)

    const primaLettera = nome.charAt(0).toUpperCase();
    const unisciNome = primaLettera + stringheMinuscole;

    nuovo.push(unisciNome); 
}

console.log(nuovo)