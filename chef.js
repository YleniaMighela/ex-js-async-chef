// In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). Questa funzione accetta un id di una ricetta e deve:
// Recuperare la ricetta da https://dummyjson.com/recipes/{id}
// Estrarre la proprietà userId dalla ricetta
// Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
// Restituire la data di nascita dello chef
// Note del docente
// Scrivi la funzione getChefBirthday(id), che deve:
// Essere asincrona (async).
// Utilizzare await per chiamare le API.
// Restituire una Promise con la data di nascita dello chef.
// Gestire gli errori con try/catch

async function getChefBirthday(id) {
    const ricetta = await fetch(`https://dummyjson.com/recipes/${id}`)
    const ricettaId = await ricetta.json();
    // console.log(ricettaId);

    const infoChef = await fetch(`https://dummyjson.com/users/${ricettaId.userId}`)
    const chefId = await infoChef.json();
    // console.log(chefId);
    return chefId.birthDate;

}


getChefBirthday(1)
    .then(compleanno => console.log("Data di nascita", compleanno))
    .catch(error => console.log(error))