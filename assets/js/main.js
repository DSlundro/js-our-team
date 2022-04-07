// Viene fornito un file js in cui è definito un array di oggetti che rappresentano i membri del team.
// Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
// MILESTONE 1 (da fare entro le 18):
//      stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2 (se ce la fai falla entro le 18 altrimenti puoi consegnare anche dopo le 18 - easy):
//      stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1 (solo se non sei giá frustrato dalle milestone 1 e 2):
//      trasformare la stringa foto in una immagine effettiva
// BONUS 2 (solo se non sei giá fuso):
//      organizzare i singoli membri in card/schede

// seleziono elemento nella pagina
let personInPage = document.querySelector('.team');


// creo un array con le informazioni del team
const team = [
    {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
    },
    {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
    },
    {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
    },
    {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
    },
    {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
    },
];
// stampo in console l'intero array
console.log(team);

// creo un ciclo per tirare fuori le informazioni di ogni elemento del array
for (let i = 0; i < team.length; i++){
    // creao una variabile per la singola persona
    let person = team[i];
    // creo una variabile per gli elementi che saranno creati in DOM
    let personIn = document.createElement('div');
    // inserisco il contenuto per la DOM
    personIn.innerHTML = `
    <img src="./assets/img/${person.image}" alt="">
    <h2>${person.name}</h2>
    <p>${person.role}</p>
    `;
    // al contenuto aggoungo altre classi
    personIn.classList.add('person','col-4','text-center', 'bg-white');
    // appento ogni gruppo di elemento in DOM
    personInPage.append(personIn);

    // stampo in console ogni singola informazione degli oggetti nel array
    console.log(person)
    console.log(`Name:      ${person.name}`);
    console.log(`Role:      ${person.role}`);
    console.log(`Image:     ${person.image}`);
}












