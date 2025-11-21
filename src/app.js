
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
    if (userSelection === Object.keys(rules)[computerSelection]) mensaje = 'You tied'
    else if (rules[choises[computerSelection]].includes(userSelection)) mensaje = 'You Lose.';
    else mensaje = 'You win.';


    document.getElementById('results').innerText = 'The result is: ';
    document.getElementById('computerSelection').innerText = 'The computer select: ' + Object.keys(rules)[computerSelection];
    document.getElementById('result').innerText = mensaje;

    const fireworks = document.querySelectorAll('#firework .firework');
    if (mensaje === 'You win.') {
        fireworks.forEach(fw => fw.classList.remove('d-none'));
    }else{
        fireworks.forEach(fw => fw.classList.add('d-none'));
    }
})

const buttons = document.querySelectorAll('#lizardSpock button');

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {

        const userSelections = event.currentTarget.value;
        spinSelection(userSelections);
    });
});