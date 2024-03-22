console.log('ciao')

/* crea un array di oggetti che rappresentano degli animali. Ogni animale ha un nome, una famiglia e una classe */
const animale = {
    nome: 'leone',
    famiglia: 'felidi',
    classe: 'mammiferi',
}
const animali = [
    {nome: 'leone' , famiglia: 'felidi' , classe:'mammiferi'},
    {nome: 'gatto' , famiglia: 'felidi' , classe:'mammiferi'},
    {nome: 'cane' , famiglia: 'canidi' , classe:'mammiferi'},
    {nome: 'serpente' , famiglia: 'colubridi' , classe:'rettili'},
    {nome: 'rana' , famiglia: 'ranidi' , classe:'anfibi'},
    {nome: 'gallina' , famiglia: 'fasianidi' , classe:'uccelli'},
    {nome: 'pesce tamburo' , famiglia: 'caproidae' , classe:'pesci'},
    {nome: 'orca' , famiglia: 'delfini' , classe:'mammiferi'},
    {nome: 'canguro' , famiglia: 'marsupiali' , classe:'mammiferi'},
    {nome: 'topo' , famiglia: 'roditori' , classe:'mammiferi'},
]

// tutti gli oggetti contenenti la classe mammiferi li ragggruppo in un nuovo array:

const listaMammiferi = []

for(let i = 0; i < animali.length; i++){
    const animale = animali[i]
    
    if(animale.classe === 'mammiferi'){
        listaMammiferi.push(animale)
    }
}

console.log(listaMammiferi)


