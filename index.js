let computerScore = 0;
let humanScore = 0;


const results = document.getElementById('result');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const humanScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');

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

rockButton.addEventListener('click', () => {
    results.textContent = playRound("rock", getComputerChoice());
    humanScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;

    checkScore();
});

paperButton.addEventListener('click', () => {
    results.textContent = playRound("paper", getComputerChoice());
    humanScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;

    checkScore();
});

scissorsButton.addEventListener('click', () => {
    results.textContent = playRound("scissors", getComputerChoice());
    humanScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;

    checkScore();
});

const checkScore = () => {
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) {
            alert("You won the game");
        } else {
            alert("You lost the game");
        }
    }
}