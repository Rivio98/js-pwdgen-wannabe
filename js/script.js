let firstName = prompt('Dimmi il tuo Nome')

let lastName = prompt('Dimmi il tuo Cognome')

let favouriteColor = prompt('Dimmi il tuo colore preferito')

let concatenazione = `La tua password generata è: ${firstName}${lastName}${favouriteColor}23`

console.log(concatenazione)

document.getElementById('concatenazione').innerHTML = concatenazione