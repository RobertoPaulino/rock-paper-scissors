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
        console.log ('something went wrong with the computerPlay functtion.')
    }

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function playRound(computerSelection, playerSelection) {
    let result = '';
    playerSelection.toLowerCase();
    
    if ((computerSelection == 'rock' && playerSelection == 'scissors' ) || (computerSelection == 'paper' && playerSelection == 'rock') || (computerSelection == 'scissors' && playerSelection == 'paper')) {
        result = `You lose! ${computerSelection} beats ${playerSelection}.`
    } else if ((computerSelection == 'scissors' && playerSelection == 'rock' ) || (computerSelection == 'rock' && playerSelection == 'paper') || (computerSelection == 'paper' && playerSelection == 'scissors')) {
        result = `You win! ${playerSelection} beats ${computerSelection}.`
    } else {
        result = "It's a tie!"
    }
    
    return result;
}

// function game(){

//     for (let i = 0; i < 5; i++) {
        
//     }

// }
