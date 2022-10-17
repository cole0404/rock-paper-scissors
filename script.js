let player = 0;
let computer = 0;
let draw = 0;

const round = document.querySelector('.round');
const win = document.querySelector('.win');
const lose = document.querySelector('.lose');
const tie = document.querySelector('.tie');
const results = document.querySelector('.results');
const btns = document.querySelectorAll('button');
btns.forEach((btn) => btn.addEventListener('click', playRound));

let computerSelection = getComputerChoice();

function getComputerChoice() {
    let choices = ["rock","paper","scissors"];
    let chosenValue = choices[Math.floor(Math.random() * choices.length)];
    return chosenValue;
}

function playRound(event) {
    playerSelection = event.target.innerText.toLowerCase();

    if (playerSelection == computerSelection) 
    ++draw, tie.textContent = `Ties: ${draw}`,
    round.textContent = `The Computer and you both picked ${playerSelection}`;


    else if (playerSelection == "rock" && computerSelection == "scissors"
        || playerSelection == "scissors" && computerSelection == "paper"
        || playerSelection == "paper" && computerSelection == "rock"
    ) 
    ++ player, win.textContent = `Player score: ${player}`,
    round.textContent = `You picked ${playerSelection} which beats the Computer's ${computerSelection}`;

    else if (playerSelection == "rock" && computerSelection == "paper"
        || playerSelection == "scissors" && computerSelection == "rock"
        || playerSelection == "paper" && computerSelection == "scissors"
    ) 
    ++ computer, lose.textContent = `Computer score: ${computer}`,
    round.textContent = `You picked ${playerSelection} which loses to the Computer's ${computerSelection}`;
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