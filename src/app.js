
// Codigo para ejercicio, Lagarto-spock primer codigo antes de intentar la solucion con includes()

// const spinSelection = ((userSelection) => {
//     let computerSelection = Math.floor(Math.random() * choises.length)
//     if (userSelection === Object.key(rules)[computerSelection]) console.log('Empate');
//     else if (userSelection === Object.values(rules)[computerSelection][0] || userSelection === Object.values(rules)[computerSelection][1]) console.log('Perdiste');
//     else if (userSelection !== Object.values(rules)[computerSelection][0] || userSelection !== Object.values(rules)[computerSelection][1]) console.log('ganaste');
// })
// Funcion para obtener eleccion del ordenador y comparar con la elegida con el usuario
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

    //Inserción de texto mediante ID's para ver que eligio el ordenador y si hemos ganado, empatado o perdido
    document.getElementById('results').innerText = 'The result is: ';
    document.getElementById('computerSelection').innerText = 'The computer select: ' + Object.keys(rules)[computerSelection];
    document.getElementById('result').innerText = mensaje;

    //Aunque el codigo de los Fuegos artificiales a sido copiado (HTML y CSS) aañadimos esta funcion para que solo se muestre 
    //si se gana, creamos una constante que selecione todos los componentes con el id firework y la clase firework, para remover o 
    //añadir o quitar el display none, como son varios fuegos artificiales usamos un forEach para recorrer todos los div con la clase
    //firework y que quite a cada fuego artificial el d-none
    const fireworks = document.querySelectorAll('#firework .firework');
    if (mensaje === 'You win.') {
        fireworks.forEach(fire => fire.classList.remove('d-none'));
    } else {
        fireworks.forEach(fire => fire.classList.add('d-none'));
    }
})

//Hacemos algo similar a lo anterior pero con distintos values en HTML, para obtener la eleccion por botones del usuario
const buttons = document.querySelectorAll('#lizardSpock button');
//Con forEach recorremos cada boton para poder añadirle el addEventListener-> click para escuchar o ver el evento del click en el boton
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {

        const userSelections = event.currentTarget.value;
        spinSelection(userSelections);
    });
});