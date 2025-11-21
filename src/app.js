
// Codigo para ejercicio, Lagarto-spock

// const spinSelection = ((userSelection) => {
//     let computerSelection = Math.floor(Math.random() * choises.length)
//     if (userSelection === Object.key(rules)[computerSelection]) console.log('Empate');
//     else if (userSelection === Object.values(rules)[computerSelection][0] || userSelection === Object.values(rules)[computerSelection][1]) console.log('Perdiste');
//     else if (userSelection !== Object.values(rules)[computerSelection][0] || userSelection !== Object.values(rules)[computerSelection][1]) console.log('ganaste');
// })

const spinSelection = ((userSelection) => {
    const choises = ["rock", "paper", "scissors", "lizard", "spock"]
    const rules = {
        rock: ['scissors', "lizard"],
        paper: ["rock", "spock"],
        scissors: ["paper", "lizard"],
        lizard: ["spock", "paper"],
        spock: ["scissors", "rock"]
    }
    let computerSelection = Math.floor(Math.random() * choises.length)
    if (userSelection === Object.keys(rules)[computerSelection]) console.log('Empate');
    else if (rules[choises[computerSelection]].includes(userSelection)) console.log('Ganaste');
    else console.log('perdiste');


})

spinSelection('lizard')