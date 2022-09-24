const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

const win = "You win! Congratulations!";
const lose = "Sorry, you lose!";
const tie = "It's a tie!";

function getComputerChoice() {
    let choices = ["rock","paper","scissors"];
    let chosenValue = choices[Math.floor(Math.random() * choices.length)];
    return chosenValue;
}

function getPlayerChoice() {
   let value = prompt("Rock, Paper, or Scissors?");
   return value.toLowerCase()
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) return tie;

    else if (playerSelection == "rock" && computerSelection == "scissors"
        || playerSelection == "scissors" && computerSelection == "paper"
        || playerSelection == "paper" && computerSelection == "rock"
    ) 
    return win;

    else if (playerSelection == "rock" && computerSelection == "paper"
        || playerSelection == "scissors" && computerSelection == "rock"
        || playerSelection == "paper" && computerSelection == "scissors"
    ) 
    return lose;

    else return "Please enter a valid choice.";
}

// play five rounds; win = ++ player, lose = ++ computer, tie = ++ draw;

function game(playerSelection, computerSelection) {
    let player = 0;
    let computer = 0;
    let draw = 0;
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);

        if (playRound() = win) ++ player;

        else if (playRound() = lose) ++ computer;
    
        else if (playRound() = tie) ++ draw;
        console.log(player);
     }

     
}
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
