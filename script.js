let player = 0;
let computer = 0;
let draw = 0;

const win = "You win! Congratulations!";
const lose = "Sorry, you lose!";
const tie = "It's a tie!";

function getComputerChoice() {
    let choices = ["rock","paper","scissors"];
    let chosenValue = choices[Math.floor(Math.random() * choices.length)];
    return chosenValue;
}

function getPlayerChoice() {
    console.log('working')
  // return btn.toLowerCase();
}
  
const btn = document.querySelectorAll('button');
btn.forEach((btn) => btn.addEventListener('click', getPlayerChoice));


  
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) ++draw, console.log(tie);

    else if (playerSelection == "rock" && computerSelection == "scissors"
        || playerSelection == "scissors" && computerSelection == "paper"
        || playerSelection == "paper" && computerSelection == "rock"
    ) 
    ++ player, console.log(win);

    else if (playerSelection == "rock" && computerSelection == "paper"
        || playerSelection == "scissors" && computerSelection == "rock"
        || playerSelection == "paper" && computerSelection == "scissors"
    ) 
    ++ computer, console.log(lose);

    else return "Please enter a valid choice.";
}

// function game() {

//     for (let i = 0; i < 5; i++) {
       
//         let computerSelection = getComputerChoice();
//         let playerSelection = getPlayerChoice();

//         playRound(playerSelection, computerSelection);

//         console.log("You picked " + playerSelection + " and the computer chose " + computerSelection);
//         console.log("Player score: " + player);
//         console.log("Computer score: " + computer);
//         console.log("Draws: " + draw);
//     }
//     if (player > computer) return win;
        
//     else if (computer > player) return lose;

//     else return tie; 
//}

console.log(btn);
