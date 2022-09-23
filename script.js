const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

function getComputerChoice() {
    let choices = ["rock","paper","scissors"];
    let chosenValue = choices[Math.floor(Math.random() * choices.length)];
    return chosenValue;
}

function getPlayerChoice() {
    return prompt("Rock, Paper, or Scissors?")
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection) return "It's a tie!";

    else if (playerSelection == "rock" && computerSelection == "scissors"
        || playerSelection == "scissors" && computerSelection == "paper"
        ||playerSelection == "paper" && computerSelection == "rock"
    ) 
    return "You Win! Congratulations!"
    
    else return "You lose!";
}
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));