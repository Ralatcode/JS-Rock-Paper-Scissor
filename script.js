
let playerScore = 0;
let computerScore = 0;
let draw = 0;
let invalid = 0;

function playRound(playerInput, computerSelection) {
    // prompts user for input and converts to lowercase

    playerInput = prompt("Choose between Rock, Paper and Scissors?").toLowerCase();

    // array containing choice for computer
    const computerChoices = ['rock', 'paper', 'scissors'];

    // function to return a random item from the array
    function getComputerChoice(computerChoices) {
    // return random computer choice
    return computerChoices[Math.floor(Math.random()*computerChoices.length)];
    }


    // calls function to get random choice and saves it in a variable
    computerSelection = getComputerChoice(computerChoices);


    if (playerInput == computerSelection) {
        console.log(`Both players chose ${playerInput}`);
        return draw++;

    } else if (playerInput == 'rock') {
        if (computerSelection == 'scissors') {
            console.log('Rock smashes scissors! You win!');
            return playerScore++;
        } else {
            console.log('Paper covers rock! You lose');
            return computerScore++;
        }

    } else if (playerInput == 'paper') {
        if (computerSelection == 'rock') {
            console.log('Paper covers rock! You win!');
            return playerScore++;
        } else {
            console.log('Scissors cuts paper! You lose.');
            return computerScore++;
        }

    } else if (playerInput == 'scissors') {
        if (computerSelection == 'paper') {
            console.log('Scissors cuts paper! You win!');
            return playerScore++;

        } else {
            console.log('Rock smashes scissors! You lose.');
            return computerScore++;
        }

    } else {
        console.log(`Oops, ${playerInput} is an invalid input...`);
        return invalid++;
    }
}

function game(playerInput, computerSelection) {
    for (let i = 0; i < 5; i++) {
        playRound(playerInput, computerSelection);
    }

    return `Your total score is ${playerScore}, and the computer score is ${computerScore}.`
}

console.log(game());