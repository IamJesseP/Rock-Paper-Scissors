function getComputerChoice(){
    let number = Math.floor(Math.random() * 100);
    if(number < 33) {
        answer = 'Rock';
        return answer;
    }
    else if (number > 33 && number < 66){
        answer = 'Paper';
        return answer;
    }
    else {
        answer = 'Scissors';
        return answer;
    }
}

function playRound(playerSelection, computerSelection = getComputerChoice()) {
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();
    if(playerChoice == 'rock' && computerChoice == 'scissors'){
        playerScore++;
    }
    else if (playerChoice == 'paper' && computerChoice == 'rock'){
        playerScore++;
    }
    else if (playerChoice == 'scissors' && computerChoice == 'paper'){
         playerScore++;
    }
    else if (playerChoice == 'rock' && computerChoice == 'rock' || playerChoice == 'paper' && computerChoice == 'paper' || playerChoice == 'scissors' && computerChoice == 'scissors'){
        tieScore++;
    }
    else{
        computerScore++;
    }

    if(playerScore == 5 || computerScore == 5){
        replay.appendChild(replayContent);
    }
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const results = document.querySelector('.results');
const replay = document.querySelector('.replay');
const replayContent = document.createElement('button');
replayContent.textContent = 'Play again?';

let playAgain = 'no';
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

replayContent.addEventListener('click', () =>{
    playAgain = 'yes';
    if (playerScore >= 5 || computerScore >= 5 && playAgain == 'yes'){
        playerScore = 0;
        computerScore = 0;
        tieScore = 0;
        playAgain = 'no';
        replay.removeChild(replayContent);
        results.textContent = `Your score:${playerScore} \n 
        Computer score: ${computerScore} \n
       Tie Score: ${tieScore}`;
    }
})


rock.addEventListener('click', () =>{
    if (playerScore < 5 && computerScore < 5){    
        playRound('Rock');
    }
    results.textContent = `Your score:${playerScore} \n 
 Computer score: ${computerScore} \n
Tie Score: ${tieScore}`;
})

paper.addEventListener('click', () =>{
    if (playerScore < 5 && computerScore < 5){
        playRound('Paper');
    }
   results.textContent = `Your score:${playerScore} \n 
 Computer score: ${computerScore} \n
Tie Score: ${tieScore}`;
})
    
scissors.addEventListener('click', () =>{
    if (playerScore < 5 && computerScore < 5){
        playRound('Scissors');
    }
    results.textContent = `Your score:${playerScore} \n 
 Computer score: ${computerScore} \n
Tie Score: ${tieScore}`;
})


results.textContent = `Your score:${playerScore} \n 
 Computer score: ${computerScore} \n
Tie Score: ${tieScore}`;