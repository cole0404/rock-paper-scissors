let player = 0;
let computer = 0;
let draw = 0;

const round = document.querySelector('.round');
const win = document.querySelector('.win');
const lose = document.querySelector('.lose');
const tie = document.querySelector('.tie');
const results = document.querySelector('.results');
const play = document.querySelector('.player');
const comp = document.querySelector('.computer');

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
    play.textContent = `Player: ${playerSelection}`;
    comp.textContent = `Computer: ${computerSelection}`;

    if (playerSelection == computerSelection) 
    ++draw, tie.textContent = `Ties: ${draw}`,
    round.textContent = `Tie!`;

    else if (playerSelection == "rock" && computerSelection == "scissors"
        || playerSelection == "scissors" && computerSelection == "paper"
        || playerSelection == "paper" && computerSelection == "rock"
    ) 
    ++ player, win.textContent = `Player score: ${player}`,
    round.textContent = `${playerSelection} beats ${computerSelection}!`;

    else if (playerSelection == "rock" && computerSelection == "paper"
        || playerSelection == "scissors" && computerSelection == "rock"
        || playerSelection == "paper" && computerSelection == "scissors"
    ) 
    ++ computer, lose.textContent = `Computer score: ${computer}`,
    round.textContent = `${playerSelection} loses to ${computerSelection}!`;


}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log("Player score: " + player);
        console.log("Computer score: " + computer);
        console.log("Draws: " + draw);
    }
    if (player > computer) results.textContent = `Congratulations, you won!`;
        
    else if (computer > player) results.textContent = `You lost, better luck next time!`;

    else results.textContent = `Tie game! Try again.`;
}