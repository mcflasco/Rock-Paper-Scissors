const options = ["rock", "paper", "scissors"];
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')

let computerSelection;
let playerSelection;
let computerScore = 0;
let playerscore = 0;

//Prompt user for Rock, Paper, or Scissors

rock.addEventListener('click', () =>{
  console.log("ROCK!!!")
})

paper.addEventListener('click', () =>{
  console.log("PAPER!!!")
})

scissors.addEventListener('click', () =>{
  console.log("SCISSORS!!!")
})

// Generate random choice for CPU
const getComputerChoice = () => {
  let randomChoice = Math.floor(Math.random() * options.length);
  return options[randomChoice];
};

computerSelection = getComputerChoice();

//Fucntion that plays single round of Rock Paper Scissors
const playRound = (playerSelection, computerSelection) => {
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    playerscore++;
    console.log(`Player Score: ${playerscore}\n`);
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == computerSelection) {
    console.log("Its a Tie!\n");
  } else {
    computerScore++;
    console.log(`Computer Score: ${computerScore}\n`);
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
};

const game = () => {
  playerSelection = prompt("Choose Rock, Paper, or scissors: ");
  getComputerChoice();

  console.log(playRound(playerSelection, computerSelection));
};

// for (let i = 0; i < 5; i++) {
//   game();
// }
