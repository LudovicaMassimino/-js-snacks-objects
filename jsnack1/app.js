console.log('ciao')

/* Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e
alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array */

const auto =[
    {marca: 'Fiat', modello: 'Punto', alimentazione:'Benzina'},
    {marca: 'Alfa Romeo', modello: 'Giulietta', alimentazione:'Gpl'},
    {marca: 'Volkswagen', modello: 'Polo', alimentazione:'Benzina'},
    {marca: 'Diacia', modello: 'Duster', alimentazione:'Diesel'},
    {marca: 'Ford', modello: 'Fiesta', alimentazione:'Gpl'},
    {marca: 'Merdeces', modello: 'Classe A', alimentazione:'Benzina'},
    {marca: 'Audi', modello: 'Q4', alimentazione:'Elettrica'},
    {marca: 'Seat', modello: 'Nuova leon', alimentazione:'Metano'},
    {marca: 'BMW', modello: 'iX2', alimentazione:'Elettrica'},
    {marca: 'Skoda', modello: 'Kamiq', alimentazione:'Metano'}
]

// divido l'array sopra in 3 array:
const benzina = []
const diesel = []
const altro = []

for(let i = 0; i < auto.length; i++){
    if(auto[i].alimentazione === 'Benzina'){
        benzina.push(auto[i])
    }else if(auto[i].alimentazione === 'Diesel'){
        diesel.push(auto[i])
    }else{
        altro.push(auto[i])
    }
}
console.log('Le auto a benzina sono: ', benzina)
console.log('Le auto a diesel sono: ', diesel)
console.log('Le auto alimentate a gpl, metano o elettrice sono: ', altro)