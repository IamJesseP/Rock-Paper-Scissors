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
        liveScoreContent.textContent = 'Nice! Rock beats scissors!'
    }
    else if (playerChoice == 'paper' && computerChoice == 'rock'){
        playerScore++;
        liveScoreContent.textContent = 'Nice! Paper beats rock!'
    }
    else if (playerChoice == 'scissors' && computerChoice == 'paper'){
         playerScore++;
         liveScoreContent.textContent = 'Nice! Scissors beats paper!'
    }
    else if (playerChoice == 'rock' && computerChoice == 'rock' || playerChoice == 'paper' && computerChoice == 'paper' || playerChoice == 'scissors' && computerChoice == 'scissors'){
        tieScore++;
        liveScoreContent.textContent = `You both chose ${playerChoice}! It's a tie!!!`
    }
    else if (computerChoice == 'paper' && playerChoice == 'rock'){
        computerScore++;
        liveScoreContent.textContent = 'Darn! Your opponent chose paper... Paper beats rock!'
    }
    else if (computerChoice == 'rock' && playerChoice == 'scissors'){
        computerScore++;
        liveScoreContent.textContent = 'Darn! Your opponent chose rock... Rock beats scissors!'
    }
    else if (computerChoice == 'scissors' && playerChoice == 'paper'){
        computerScore++;
        liveScoreContent.textContent = 'Darn! Your opponent chose scissors... Scissors beats paper!'
    }

    liveScore.appendChild(liveScoreContent)
    doReplay();
}

function doReplay () {
    if(playerScore == 5 || computerScore == 5){
        whoWonContent.textContent = `${whoWon()} \n`
        replay.appendChild(whoWonContent);

        replay.appendChild(replayContent); //Show replay button after game
    }
}

function whoWon(){
    if(playerScore > computerScore){
        const winner = "You won!\n";
        return  winner;
    }
    else {
        const loser = "You lost!\n";
        return loser;
    }
}

let playAgain = 'no';
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const results = document.querySelector('.results');

const replay = document.querySelector('.replay');
const replayContent = document.createElement('button');
replayContent.textContent = `Play again?`;

const liveScore = document.querySelector('.liveScore')
const liveScoreContent = document.createElement('p')

const whoWonContent = document.createElement('h4')




replayContent.addEventListener('click', () =>{
    playAgain = 'yes';
    if (playerScore >= 5 || computerScore >= 5 && playAgain == 'yes'){
        playerScore = 0;
        computerScore = 0;
        tieScore = 0;
        playAgain = 'no';
        replay.removeChild(replayContent);
        replay.removeChild(whoWonContent);
        liveScoreContent.textContent = ""
        results.textContent = ` Your score: ${playerScore}\n Opponent score: ${computerScore}\n Tie Score: ${tieScore}`;
    }
})

rock.addEventListener('click', () =>{
    if (playerScore < 5 && computerScore < 5){    
        playRound('Rock');
    }
    results.textContent = ` Your score: ${playerScore}\n Opponent score: ${computerScore}\n Tie Score: ${tieScore}`;
})

paper.addEventListener('click', () =>{
    if (playerScore < 5 && computerScore < 5){
        playRound('Paper');
    }
    results.textContent = ` Your score: ${playerScore}\n Opponent score: ${computerScore}\n Tie Score: ${tieScore}`;
})
    
scissors.addEventListener('click', () =>{
    if (playerScore < 5 && computerScore < 5){
        playRound('Scissors');
    }
    results.textContent = ` Your score: ${playerScore}\n Opponent score: ${computerScore}\n Tie Score: ${tieScore}`;
})


results.textContent = ` Your score: ${playerScore}\n Opponent score: ${computerScore}\n Tie Score: ${tieScore}`;