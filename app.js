function computerPlay () {
    let choice = 3;

    choice = getRandomInt(3);

    if (choice == 2) {
        return 'rock';
    } else if (choice == 1) {
        return 'paper';
    } else if (choice == 0) {
        return 'scissors';
    } else {
        console.log ('something went wrong with the computerPlay function.')
    }

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function playRound(computerSelection, playerSelection) {
    let result = '';
    playerSelection.toLowerCase();
    
    if ((computerSelection == 'rock' && playerSelection == 'scissors' ) || 
            (computerSelection == 'paper' && playerSelection == 'rock') || 
            (computerSelection == 'scissors' && playerSelection == 'paper')) {
        result = `You lose! ${computerSelection} beats ${playerSelection}.`
        loseCount++;
    } else if ((computerSelection == 'scissors' && playerSelection == 'rock' ) || 
            (computerSelection == 'rock' && playerSelection == 'paper') || 
            (computerSelection == 'paper' && playerSelection == 'scissors')) {
        result = `You win! ${playerSelection} beats ${computerSelection}.`
        winCount++
    } else {
        result = "It's a tie!"
    }
    
    return result;
}

function game(playerSelection){

    let result = playRound(computerPlay(),playerSelection);
    resultDiv.textContent = result;
    scoreDiv.textContent = (`The result is \n Player -> ${winCount} \n Computer -> ${loseCount} `);


if(winCount >= 5) {
    winnerHeader.textContent = 'YOU WIN!';
    resultDiv.textContent = '';
    scoreDiv.textContent = '';
    winCount = 0;
    loseCount = 0;
} else if (loseCount >= 5) {
    winnerHeader.textContent = 'YOU LOSE!';
    resultDiv.textContent = '';
    scoreDiv.textContent = '';
    winCount = 0;
    loseCount = 0;
} else {
    winnerHeader.textContent = '';
}

}

let playerSelection = '';
let winCount = 0;
let loseCount = 0;

let gamestate = '';

const rockBtn = document.querySelector('#rock-btn');
rockBtn.addEventListener('click', function (e) {
    game('rock');
});

const paperBtn = document.querySelector('#paper-btn');
paperBtn.addEventListener('click', function (e) {
    game('paper');
});

const scissorsBtn = document.querySelector('#scissors-btn');
scissorsBtn.addEventListener('click', function (e) {
    game('scissors');
});

const resultDiv = document.querySelector('.result');
const scoreDiv = document.querySelector('.score')
const winnerHeader = document.querySelector('.winner')

// rockBtn.onclick = () => alert('hello world im a js button')




// if (winCount > loseCount) {
//     console.log('you win the game')
// } else if (loseCount > winCount) {
//     console.log('you lose the game')
// } else {
//     console.log('its a tie')
// }