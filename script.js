// prompts user for input and converts to lowercase

const playerInput = prompt("Choose between Rock, Paper and Scissors?").toLowerCase();

// array containing choice for computer
const computerChoices = ['rock', 'paper', 'scissors'];

// function to return a random item from the array
function getComputerChoice(computerChoices) {
    // return random computer choice
    return computerChoices[Math.floor(Math.random()*computerChoices.length)];
}


// calls function to get random choice and saves it in a variable
let computerSelection = getComputerChoice(computerChoices);

function playRound(playerInput, computerSelection) {
    
    if (playerInput == computerSelection) {
        return `Both players chose ${playerInput}`;

    } else if (playerInput == 'rock') {
        if (computerSelection == 'scissors') {
            return 'Rock smashes scissors! You win!';
        } else {
            return 'Paper covers rock! You lose';
        }

    } else if (playerInput == 'paper') {
        if (computerSelection == 'rock') {
            return 'Paper covers rock! You win!';
        } else {
            return 'Scissors cuts paper! You lose.';
        }
    }

}