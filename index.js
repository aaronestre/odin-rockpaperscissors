const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];

    const randomNum = Math.floor(Math.random() * choices.length);

    return choices[randomNum];
}

const getHumanChoice = () => {
    const sign = prompt('Rock, Paper or Scissors?');
    return sign.toLowerCase();
}