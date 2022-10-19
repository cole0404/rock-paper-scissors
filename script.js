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

function getComputerChoice() {
    let choices = ["rock","paper","scissors"];
    let chosenValue = choices[Math.floor(Math.random() * choices.length)];
    return chosenValue;
}

function playRound(event) {
    let playerSelection = event.target.innerText.toLowerCase();
    let computerSelection = getComputerChoice();

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
    round.textContent = `${playerSelection} beats ${computerSelection}!`,
    game();

    else if (playerSelection == "rock" && computerSelection == "paper"
        || playerSelection == "scissors" && computerSelection == "rock"
        || playerSelection == "paper" && computerSelection == "scissors"
    ) 
    ++ computer, lose.textContent = `Computer score: ${computer}`,
    round.textContent = `${playerSelection} loses to ${computerSelection}!`,
    game();
}

function game() {
    if (player == 5) round.textContent = `Congratulations, you won!`, disableButtons();

    else if (computer == 5) round.textContent = `You lost, better luck next time!`, disableButtons();
    }

function disableButtons() {
    btns.forEach(elem => {
        elem.disabled = true
    })
    }