console.log('ciao')

/* A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */

const nomi = ['pippo', 'PLUTO', 'Paperino']
console.log(nomi)
const nuovo = []

for(let i = 0; i < nomi.length; i++){
    const nome = nomi[i].toLowerCase();

    // 1° bonus:
    const sottostringhe = nome.slice(1);
    console.log(sottostringhe)

    const stringheMinuscole = sottostringhe.toLowerCase();
    console.log(stringheMinuscole)

    const primaLettera = nome.charAt(0).toUpperCase();
    const unisciNome = primaLettera + stringheMinuscole;

    nuovo.push(unisciNome); 
}

console.log(nuovo)

/* 2° bonus: creare una funzione che prenda come input una parola e vi restituisce la parola formattata da usare */

const parola = prompt('Inserisci una parola');
console.log("La parola inserita dall'utente è: " + parola)


function formatted(text){
    if(!text) {
        return "La parola inserita non è valida";
    }
    let parolaFormattata = '';

    for(let i = 0; i < text.length; i++){
            // SE ci troviamo in posizione 0 cioè l'iniziale allora formattiamola in maiuscolo:
        if(i === 0){

            parolaFormattata = parolaFormattata + text[i].toUpperCase();
            // ALTRIMENTI in altre posizioni, esclusa la 0, formattiamo in minuscolo
        }else{
            parolaFormattata = parolaFormattata + text[i].toLowerCase();
        }
    }
    return parolaFormattata;
}

const parolaFormattata = formatted(parola);
console.log("La parola formattata è: " + parolaFormattata);