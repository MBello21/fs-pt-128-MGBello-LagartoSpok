
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
    let mensaje = ''
    let computerSelection = Math.floor(Math.random() * choises.length)
    if (userSelection === Object.keys(rules)[computerSelection]) mensaje = 'Empate'
    else if (rules[choises[computerSelection]].includes(userSelection)) mensaje = ' 🎊 Ganaste';
    else mensaje ='perdiste';
    document.getElementById('computerSelection').innerText = 'The computer select: ' + Object.keys(rules)[computerSelection];
    document.getElementById('result').innerText = mensaje;

})

const buttons = document.querySelectorAll('#lizardSpock button');

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        
        const valorJugador = event.currentTarget.value;
        spinSelection(valorJugador);
    });
});