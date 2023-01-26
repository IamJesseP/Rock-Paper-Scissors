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

function playRound(playerSelection, computerSelection = getComputerChoice()) {
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


function game(){
    playerScore = 0;
    computerScore = 0;
    tieScore = 0;
    for (let i = 0; i < 5; i++){
        playerResponse = prompt(`Lets play 5 rounds! Rock, paper, or scissors? \nRound: ${i} \nYour score: ${playerScore} \nComputer score: ${computerScore} \n Tie: ${tieScore}`);
        playRound(playerResponse);
        if(winner == "You lost! Try again"){
            computerScore++
        }
        else if(winner == "It was a tie! Try again"){
            tieScore++
        }
        else{
            playerScore++
        }
    }
    if(playerScore > computerScore){
        playAgain = prompt(`You won! Score: ${playerScore} to ${computerScore}, play again?(Yes / No)`);
        return playAgain;
    }
   else if(playerScore == computerScore) {
        playAgain = prompt(`It's a tie! Score: ${playerScore} to ${computerScore}, Tie rounds: ${tieScore} play again?(Yes / No) `);
        return playAgain;
   } 
    else {
    playAgain = prompt(`You lost! Score: ${playerScore} to ${computerScore}, Play again?(Yes/No)`);
        return playAgain;
    } 
}

let playAgain = "yes"
while (playAgain == "yes"){
    game()
    playAgain = playAgain.toLowerCase()
}
alert(`Thanks for playing!`)