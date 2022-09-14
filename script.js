// prompts user for input and converts to lowercase

const playerInput = prompt("Choose between Rock, Paper and Scissors?").toLowerCase();

// array containing choice for computer
const computerChoices = ['rock', 'paper', 'scissors'];

// function to return a random item from the array
function getComputerChoice(computerChoices) {

    return computerChoices[Math.floor(Math.random()*computerChoices.length)];
}


// calls function to get random choice and saves it in a variable
let computerSelection = getComputerChoice(computerChoices);

