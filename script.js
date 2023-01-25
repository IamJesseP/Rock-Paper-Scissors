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

console.log(getComputerChoice());