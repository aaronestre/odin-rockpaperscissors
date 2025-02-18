let computerScore = 0;
let humanScore = 0;

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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
const result = playRound(humanSelection, computerSelection);
console.log(result);