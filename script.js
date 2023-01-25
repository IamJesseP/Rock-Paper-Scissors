function getComputerChoice(){
    let number = Math.floor(Math.random() * 100);
    if(number < 33) {
        answer = 'Rock'
        return answer
    }
    else if (number > 33 && number < 66){
        answer = 'Paper'
        return answer
    }
    else {
        answer = 'Scissors'
        return answer
    }
}

function playGame(playerSelection, computerSelection = getComputerChoice()) {
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();
    if(playerChoice == 'rock' && computerChoice == 'scissors'){
        winner = "You win! Rock beats Scissors";
        return winner;
    }
    else if (playerChoice == 'paper' && computerChoice == 'rock'){
        winner = "You win! Paper beats Rock";
        return winner;
    }
    else if (playerChoice == 'scissors' && computerChoice == 'paper'){
        winner = "You win! Scissors beats paper";
        return winner;
    }
    else if (playerChoice == 'rock' && computerChoice == 'rock' || playerChoice == 'paper' && computerChoice == 'paper' || playerChoice == 'scissors' && computerChoice == 'scissors'){
        winner = "It was a tie! Try again";
        return winner;
    }
    else {
        winner = "You lost! Try again";
        return winner;
    }
}

console.log(playGame('scissorS'))