const playerSelection = "rock";
const computerSelection = getComputerChoice();

function getComputerChoice() {
    let choices = ["rock","paper","scissors"];
    let chosenValue = choices[Math.floor(Math.random() * choices.length)];
    return chosenValue;
}

//if paper === rock, rock === scissors, scissors === paper, return true

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) return true;
    
    else return false;
}

console.log(playRound(playerSelection, computerSelection));