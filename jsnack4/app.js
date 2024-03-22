console.log('ciao')

/* crea un array di oggetti che rappresentano delle persone. Ogni persona ha un nome, un cognome e un'età.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età */


const persona = [
    {nome:'Giulio', cognome:'Giuliani', età: 32},
    {nome:'Francesca', cognome:'Franceschini', età: 17},
    {nome:'Anna', cognome:'Annati', età: 24},
    {nome:'Lorenzo', cognome:'Lorenzoni', età: 56},
    {nome:'Grazia', cognome:'Graziati', età: 15},
]

// creo un nuovo array in cui ogni persona avrà queste proprietà: nome, cognome e se può guidare:
const nuovo = [];

for(let i = 0; i < persona.length; i++){

    if(persona[i].età >= 18){
        nuovo.push(persona[i].nome + ' , ' + persona[i].cognome + ' , ' + 'può guidare')
    }else{
        nuovo.push(persona[i].nome + ' , ' + persona[i].cognome + ' , ' + 'non può guidare')
    }
}

console.log(nuovo)





