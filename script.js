const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

function getComputerChoice() {
    let choices = ["rock","paper","scissors"];
    let chosenValue = choices[Math.floor(Math.random() * choices.length)];
    return chosenValue;
}

function getPlayerChoice() {
   let value = prompt("Rock, Paper, or Scissors?");
   return value.toLowerCase()
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection) return "It's a tie!";

    else if (playerSelection == "rock" && computerSelection == "scissors"
        || playerSelection == "scissors" && computerSelection == "paper"
        || playerSelection == "paper" && computerSelection == "rock"
    ) 
    return "You win! Congratulations!";

    else if (playerSelection == "rock" && computerSelection == "paper"
        || playerSelection == "scissors" && computerSelection == "rock"
        || playerSelection == "paper" && computerSelection == "scissors"
    ) 
    return "Sorry, you lose!";

    else return "Please enter a valid choice.";
}
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));