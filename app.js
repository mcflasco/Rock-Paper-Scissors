console.log("test")

const options = ["rock", "paper", "scissors"]
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerscore = 0;

playerSelection = prompt("Choose Rock, Paper, or scissors: ")
console.log(`Player Selection : ${playerSelection}`)

const getComputerChoice = () => {
    let randomChoice = Math.floor(Math.random() * options.length)
    return options[randomChoice];
}

computerSelection = getComputerChoice()
console.log(`Computer Choice: ${computerSelection}`)