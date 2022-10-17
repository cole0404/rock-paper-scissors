let player = 0;
let computer = 0;
let draw = 0;

const win = "You win! Congratulations!";
const lose = "Sorry, you lose!";
const tie = "It's a tie!";

const btns = document.querySelectorAll('button');
btns.forEach((btn) => btn.addEventListener('click', playRound));

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

function getComputerChoice() {
    let choices = ["rock","paper","scissors"];
    let chosenValue = choices[Math.floor(Math.random() * choices.length)];
    return chosenValue;
}

function getPlayerChoice() {
    btns.forEach((btn) => btn.addEventListener('click', () => {
        let result = btn.innerText.toLowerCase();
        return result;
    }))
}

function playRound(player, computer) {
    console.log(playerSelection);
    console.log(computerSelection);
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

    else  console.log("Please enter a valid choice.");
}

// function game() {

//     for (let i = 0; i < 5; i++) {
       


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