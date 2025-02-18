let computerScore = 0;
let humanScore = 0;

const scoreElement = document.getElementById('score');

const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];

    const randomNum = Math.floor(Math.random() * choices.length);

    return choices[randomNum];
}

const getHumanChoice = () => {
    const sign = prompt("Rock, Paper or Scissors?");
    return sign.toLowerCase();
}

const playRound = (humanChoice, computerChoice) => { 
    if ( humanChoice === computerChoice ) {
        return "It was a tie";
    } else if ( humanChoice === "rock" && computerChoice === "scissors" ) {
        humanScore++;   
        return "You win rock beats scissors";       
    } else if ( humanChoice === "paper" && computerChoice === "rock" ) {
        humanScore++;
        return "You win paper beats rock";
    } else if ( humanChoice === "scissors" && computerChoice === "paper" ) {
        humanScore++;
        return "You win scissors beats paper";
    } else {
        computerScore++;
        return `You lose ${computerChoice} beats ${humanChoice}`;
    }
}

const playGame = () => {

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
        console.log(result);
    }

    if (humanScore === computerScore) {
        return "You tied the game";
    } 
    else if (humanScore > computerScore) {
        return "You won the game";
    }
    else {
        return "You lost the game";
    }

}

const game = playGame();
console.log(game);
scoreElement.innerHTML = game;