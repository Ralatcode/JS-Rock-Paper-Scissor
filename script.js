const gameBoard = document.querySelector('#RPS-board');
const playerChoice = document.querySelectorAll('.choice-box > *');
let playerDisplay = document.querySelector('#player-score');
let computerDisplay = document.querySelector('#computer-score');
const result = document.createElement('p');
const modal = document.querySelector('#modal');
const modalContent = document.querySelector('.modal-content');
const resetBtn = document.querySelector('.reset-btn');

let playerScore = 0;
let computerScore = 0;
let draw = 0;
let invalid = 0;

playerChoice.forEach(choice => choice.addEventListener('click', playRPS, true));

result.classList.add('result');

function playRPS () {
    // gets player input from clicked class value
    const playerInput = this.classList.value;

    // calls function to get random choice and saves it in a variable
    const computerSelection = getComputerChoice();
    
    // play Round 
    const getWinner = playRound(playerInput, computerSelection);

    // show Winner
    showWinner(getWinner);

    // ammend game result
    gameBoard.appendChild(result);

    if (playerScore === 5 || computerScore === 5) {
        decideWinner();
    }

}

// hides modal when the window is clicked
window.addEventListener('click', clearModal);

// allows player to reset game
resetBtn.addEventListener('click', resetGame);



// function to return a random item from the array
function getComputerChoice() {

    // array containing choice for computer
   const computerChoices = ['rock', 'paper', 'scissors'];

    // return random computer choice
    return computerChoices[Math.floor(Math.random()*computerChoices.length)];
}

// function to increment score and display score
function showWinner(getWinner) {
    if (getWinner === 'player') {
        playerScore++;
        playerDisplay.textContent = `Player: ${playerScore}`;
    } else if (getWinner === 'computer') {
        computerScore++;
        computerDisplay.textContent = `Computer: ${computerScore}`;
    }
}

function decideWinner() {
    modal.style.display = 'flex';
    // display modal for result
    if (playerScore > computerScore) {
        modalContent.innerHTML = `
        <i class="fa-solid fa-face-smile fa-5x"></i>
        <h3 class="modal-result">You Won!!</h3>
        `;
    } else {
        modalContent.innerHTML = `
        <i class="fa-solid fa-face-frown-open fa-5x"></i>
        <h3 class="modal-result">You Lost!!</h3>
        `;
    }
}

function playRound(playerInput, computerSelection) {
    // Rock Paper scissors game round
    if (playerInput == computerSelection) {
        result.textContent += `Both players chose ${playerInput}\n`;
        return draw++;

    } else if (playerInput == 'rock') {
        if (computerSelection == 'scissors') {
            result.textContent += 'Rock smashes scissors! You win!\n';
            return 'player';
        } else {
            result.textContent += 'Paper covers rock! You lose \n';
            return 'computer';
        }

    } else if (playerInput == 'paper') {
        if (computerSelection == 'rock') {
            result.textContent += 'Paper covers rock! You win!\n';
            return 'player';
        } else {
            result.textContent += 'Scissors cuts paper! You lose.\n';
            return 'computer';
        }

    } else if (playerInput == 'scissors') {
        if (computerSelection == 'paper') {
            result.textContent += 'Scissors cuts paper! You win!\n';
            return 'player';

        } else {
            result.textContent += 'Rock smashes scissors! You lose.\n';
            return 'computer';
        }

    } else {
        console.log(`Oops, ${playerInput} is an invalid input...`);
        return invalid++;
    }

}

function clearModal(e) {
    // hide modal
    if (e.target == modal) {
        resetGame();
        modal.style.display = 'none';
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerDisplay.textContent = `Player: ${playerScore}`;
    computerDisplay.textContent = `Computer: ${computerScore}`;
    result.textContent = '';
}



